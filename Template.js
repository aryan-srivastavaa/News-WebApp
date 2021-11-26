import React from 'react';
import './App.css';

function Template(props) {
    return (<>
    
        <div className="card">
            <div className='flex-div'>
            <div><img className="img" src={props.img}></img></div>
            <div className="flex-column-div">
            
            <h4 className="title">{props.title}</h4>
            <h4 className="author">Author: {(props.author!=null)?`${props.author}`:'Annonymous'}</h4>
            </div>
            </div>
            <div className="description">{props.description}</div>
            <a href={props.url} target ="_blank" ><button className="link">Go to News</button></a>
        </div>
       
        </>
    )
}

export default Template
