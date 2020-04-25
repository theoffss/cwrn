
import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

//match : vidéo 5.3, il s'agit de récuper via le props l'adresse url actuelle dynamiquement
const MenuItem =({ title, imageUrl, size , history, linkUrl, match})=>(
    <div className= {`${size}   menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div 
        className='backgroung-image'
        style = {{ 
          backgroundImage: `url(${imageUrl})`
        }} 
        />
      <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>

);


export default withRouter(MenuItem); 