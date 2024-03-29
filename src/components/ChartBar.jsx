import React from 'react'
import styled from 'styled-components'

const ChartBar = (props) => {
    const sun = 30000
    const prosent = props.rashod*100 / sun
  return (
    <div>
        <Wrapper  >
            <Inner style={{height: `${prosent}%`}}></Inner>
        </Wrapper>
        <span style={{color: "white"}}>{props.month}</span>
    </div>
  )
}

export default ChartBar


const Wrapper = styled.div`
    border: 2px solid;
    width: 50px;
    height: 220px;
    border-radius: 40px;
    display: flex;
    flex-direction: column-reverse;
    overflow: hidden;
    background-color: white;

`
const Inner = styled.div`
    background-color: red;
    
`