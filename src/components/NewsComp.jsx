import React from 'react';

const NewsComp=(props)=>{
    return(
    <div className='news'>
        <div className='image-thumb'>
            <img src={require("../images/tekno.jpg")} alt="" />
        </div>
        <div className='content'>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    </div>
    )
}
export default NewsComp;