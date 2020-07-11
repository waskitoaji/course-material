import React, { Component } from 'react';
import './News.css';
import NewsComp from './NewsComp';

class News extends Component{
    state={
        newscomp:[
            {id:1,
            title:'tekno',
            desc:'desc'},
            {id:2,
            title:'tekno',
            desc:'desc'},
            {id:2,
            title:'tekno',
            desc:'desc'}
        ]
    }

    render(){
        const {newscomp} = this.state;
        return(
            newscomp.map(newscomp=>{
                return <NewsComp key={newscomp.id} title={newscomp.title} desc={newscomp.desc}/>
            })
            
        )
    }
}

export default News;