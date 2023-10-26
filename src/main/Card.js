import React from 'react'
import card from './card.css'
function  Card({news}) {
  return (
    <div className='news-card'>  
        <img src={news.urlToImage} alt={news.title}></img>
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <p>publish date:-{news.publishedAt}</p>
         <button className="morebtn" onClick={()=>{window.open(news.url)}}>Read More</button>
         

    </div>
  )
}

export default  Card