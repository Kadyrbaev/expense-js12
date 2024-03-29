import React from 'react'
import ChartBar from './ChartBar'
import styled from 'styled-components'

const Chart = (props) => {
  console.log(props);

  const months = [
    {
      month: "january",
      rashod: 0
    },
    {
      month: "Feburary",
      rashod: 0
    },
    {
      month: "march",
      rashod: 0
    },
    {
      month: "april",
      rashod: 0
    },
    {
      month: "may",
      rashod: 0
    },
    {
      month: "june",
      rashod: 0
    },
    {
      month: "july",
      rashod: 0
    },
    {
      month: "august",
      rashod: 0
    },
    {
      month: "september",
      rashod: 0
    },
    {
      month: "octomber",
      rashod: 0
    },
    {
      month: "novomber",
      rashod: 0
    },
    {
      month: "december",
      rashod: 0
    },
  ]

  props.arr.map((el)=>{
    const date = new Date(el.date).getMonth()
    months[date].rashod = months[date].rashod + +el.price
  })
  return (
    <ChartStyle>
      {
        months.map((el)=>(
          <ChartBar key={el.month} month={el.month} rashod={el.rashod} />
        ))
      }
    </ChartStyle>
  )
}

export default Chart

const ChartStyle = styled.div`
    border: 1px solid;
    display: flex;
    justify-content: space-around;
    background-color: #575757;
    padding: 20px ;
    border-radius: 20px;
    margin-top: 20px;
`