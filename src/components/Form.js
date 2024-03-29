import { useState } from "react";
import styled from "styled-components";

const Form=(props)=>{
    const [title, setTitle]= useState("")
    const [price, setPrice] = useState("")
    const [date, setDate] = useState("")

    const titleHandler=(e)=>{
        setTitle(e.target.value)
    }
    const priceHandler=(e)=>{
        setPrice(e.target.value)
    }
    const dateHandler=(e)=>{
        setDate(e.target.value)
    }


    const addHandler=()=>{
        if(title.length>0 && price.length>0){
            const product = {
                title: title,
                price,
                date: date,
                id: Math.random()
            }
            console.log(product);
            props.onGetProduct(product)
            setTitle("")
            setDate("")
            setPrice("")
        }
    }    
    return(
        <FormStyle className="form">
            <input value={title} onChange={titleHandler} type="text" />
            <input value={price} onChange={priceHandler} type="number" />
            <input value={date} onChange={dateHandler} type="date" />
            <button  onClick={props.onCloseFormHandler}>Cancel</button>
            <button onClick={addHandler} >ADD</button>
        </FormStyle>
    )
}

export default Form



const FormStyle = styled.div`
    border: 1px solid;
    width: 300px;
    padding: 20px 30px;
    border-radius: 14px;
    margin: auto;
    margin-top: 30px;

    input{
        width: 100%;
        margin-top: 10px;
        padding: 6px 0px;
    }
`
