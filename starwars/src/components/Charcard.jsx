import React from 'react';
import {
    Card,  CardTitle, CardText, 
    CardSubtitle, CardBody
  } from 'reactstrap';
import styled from 'styled-components';
 
 const Cardcont= styled(Card)`
 margin: 0 auto;
  
 width: 25rem;
 ` 
 const Cardstyle= styled(CardBody)`
 font-weight: bold;
 `
 
const Charcard = (props) => {
    return (
      <Cardcont>
        <Card>
         
          <Cardstyle>
            <CardTitle>Name: {props.name}</CardTitle>
            <CardSubtitle>Gender: {props.gender}</CardSubtitle>
            <CardText>Height (cm): {props.height}</CardText>
           
          </Cardstyle>
        </Card>
       </Cardcont>
    );
  };
  
  export default Charcard;