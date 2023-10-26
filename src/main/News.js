import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import Card from './Card';
import style from './style.css';
function News() {
    const [newsList,set]=useState([]);
     const [query,setq]=useState("india");
     const qin=useRef(null);
  //API calling

  const API='74e2893c1bf64bd7830466cab059acea';
  const url=`https://newsapi.org/v2/everything?q=${query}&from=2023-09-25&sortBy=publishedAt&apiKey=${API}`;
 useEffect(()=>{
  fatchData();
 },[query])
 async function fatchData(){
  try{
    const res=await fetch(url);
    const data=await res.json();
     set(data.articles);
  
  }catch(e){
      alert(e,"error is occure");

  }
 

 }
   //handle button
 function  cricket(e){
 e.preventDefault();
    setq("cricket")
 }
function  football(e){
   e.preventDefault();
    setq("football")
 }
 function  wether(e){
   e.preventDefault();
    setq("wether")
 }
 function  science(e){
   e.preventDefault();
    setq("science")
 }

 function Startup(e){
    e.preventDefault();
    setq("Startup")
 }
function handle(e){
    e.preventDefault()
    const v=qin.current.value;
    setq(v);
}
  return (
    <div className='news-app' >
    <h1 style={{fontFamily:"monospace",fontSize:"3rem",marginBotton:"20px"}}>Samachar</h1>
     
   <form onSubmit={handle} style={{display:'flex'}}>
    <input className='qu' type="text" ref={qin}></input>
    <button className='but'  onClick={handle} type="submit" value="Submit">Submit</button>

   </form>


   <button className='buttono'  onClick={cricket} type="cricket" value="Cricket">Cricket</button>
   <button className='buttono'  onClick={football} type="football" value="Football">Football</button>
   <button className='buttono'  onClick={wether} type="wether" value="Wether">Wether</button>
   <button className='buttono'  onClick={science} type="science" value="Science">Science</button>
   <button className='buttono'  onClick={Startup} type="Startup" value="Startup">Startup</button>
    
   
   
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,32%)", justifyContent:"space-between",rowGap:"20px"}} >
       {newsList.map(news=>{
        return  <Card key={news.url+news.urlToImage} news={news}/> 
       })}

    </div>
    </div>
  );
}

export default News