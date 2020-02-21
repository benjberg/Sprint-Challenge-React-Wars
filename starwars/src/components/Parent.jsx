import React, { useState,useEffect} from 'react';
import Charcard from './Charcard';
import axios from 'axios';
const Parent = (props) =>{
const [data,setData]= useState([])
useEffect(()=>{
    axios.get('https://swapi.co/api/people/').then(response =>{
        console.log('responseLOG', response.data.results)
        setData(response.data.results)
    })
},[]); return(
    <div className='cardDiv'>
        {data.map(data =>{
            return(<Charcard  key={data.url} name={data.name} height={data.height} gender={data.gender}/> )
        })}


    </div>
)
}



export default Parent;