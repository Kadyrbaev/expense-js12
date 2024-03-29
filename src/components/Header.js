import styled from "styled-components"
import "./Header.css"

const Header=(props)=>{

    return (
        <HeaderStyle className="header" >
            <Button onClick={props.onShowFormHandler}>Dobavit rashod</Button>
        </HeaderStyle>
    )
}

export default Header


const Button = styled.button`
    color: red;
    padding: 6px 30px;
    border-radius: 10px;
    &:hover{
        color: brown;
    }
`
const HeaderStyle = styled.header`
    border: 2px solid;
    padding: 20px 20px;
    text-align: center;
    background-color: bisque;
`

