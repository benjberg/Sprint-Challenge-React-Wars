import React, {useState, useEffect} from 'React';
import Charcard from './Charcard';
import axios from 'axios';
const Parent = (props) =>{
const [data,setData]= useState([])
useEffect(()=>{
    axios.get('http https://swapi.co/api/people/').then(response =>{
        console.log('responseLOG', response)
    })
})
}



export default Parent;