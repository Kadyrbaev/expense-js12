import styled from "styled-components"

const RashodRender = (props) => {
  return (
    <Container>
      <h2>{props.title}</h2>
      <h3>{props.price}</h3>
      <span>{props.date}</span>
    </Container>
  )
}

export default RashodRender

const Container = styled.div`
    box-shadow: 0px 0px 10px 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    padding: 6px 20px;
    border-radius: 16px;
    margin: auto;
    margin-top: 20px;
`