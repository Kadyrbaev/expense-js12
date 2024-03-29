import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import RashodRender from './components/RashodRender';
import styled from 'styled-components';
import Chart from './components/Chart';

const expense = [
  {
    title: "Taxi",
    price: 1400,
    id: "1s",
    date: "2023/3/4"
  },
  {
    title: "Products",
    price: 5600,
    id: "2s",
    date: "2024/3/4"
  },
  {
    title: "obed",
    price: 15000,
    id: "3s",
    date: "2024/4/4"
  },
]

function App() {
  const [form, setForm] = useState(false)
  const [products, setProducts] = useState(expense)
  const [select, setSelect] = useState("2024")
  console.log(select);
 
  const showFormHandler=()=>{
    setForm(true)
  }
  const closeFormHandler=()=>{
    setForm(false)
  }

  const getProduct=(data)=>{
    console.log(data);
    setProducts([...products, data]) // [{},{},{},{}]
  }

  const selectHandler=(e)=>{
    setSelect(e.target.value)
  }

  const filteredByYear = products.filter((el)=>{
    const date = new Date(el.date).getFullYear()
    return +select === date
  })
  console.log(filteredByYear);
    return (
    <div className="App">
      <Header onShowFormHandler={showFormHandler} />
      {form===true ? <Form onGetProduct={getProduct} onCloseFormHandler={closeFormHandler}/> : ""}

      <Chart arr={filteredByYear}/>
      <Select value={select} onChange={selectHandler} name="" id="">
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </Select>
      {
        filteredByYear.map((el)=>{
          return <RashodRender 
                  key={el.id}
                  title={el.title} 
                  price={el.price} 
                  date={el.date} 
                />
        })
      }
    </div>
  );
}


export default App;


const Select = styled.select`
  padding: 4px 20px;
  margin-left: 100px;
  margin-top: 20px;
`