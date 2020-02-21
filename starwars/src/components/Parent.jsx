import React, { useState,useEffect} from 'react';
import Charcard from './Charcard';
import axios from 'axios';
import styled from 'styled-components';

const Cdiv= styled.div`
opacity: .4;
`

const Parent = (props) =>{
const [data,setData]= useState([])
useEffect(()=>{
    axios.get('https://swapi.co/api/people/').then(response =>{
        console.log('responseLOG', response.data.results)
        setData(response.data.results)
    })
},[]); return(
    <Cdiv>
        {data.map(data =>{
            return(<Charcard  key={data.url} name={data.name} height={data.height} gender={data.gender}/> )
        })}


    </Cdiv>
)
}



export default Parent;