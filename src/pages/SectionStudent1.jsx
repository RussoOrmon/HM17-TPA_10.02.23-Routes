import React from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const SectionStudent1 = ({title , name}) => {

  
  const params =useParams()
  return (
    <Container>
    
      <h4>{title} </h4>
        <h4>  {name} {params.id} </h4>

    </Container>
  )
}

export default SectionStudent1;

const Container= styled.div`
    background-color: #fffefe;
  width: 800px;
  height: 300px;
  margin:  150px 250px ;
  text-align: start;
  padding: 10px;
  position: absolute;
`