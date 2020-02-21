import React from 'react';
import { Card, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';
import styled from 'styled-components';
 
const Cardstyle= styled(Card)`
display: flex;

width: 25rem;


` 
  const Charcard = (props) => {
    return (
      <div>
        <Cardstyle>
          <CardHeader> Name: {props.name}</CardHeader>
          <CardBody>
            <CardTitle>Gender: {props.gender}</CardTitle>
    <CardText>Height (cm): {props.height}</CardText>
          </CardBody>
        </Cardstyle>
  
      </div>
    );
  };
  
  export default Charcard;