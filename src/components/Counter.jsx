import React, { Component } from 'react';
import Button from './Button';
import  { connect } from 'react-redux';

class Counter extends Component{
    state={
        hitung:0
    }

 

    render(){
        return(
            <div className="Counter">
                <h3 >Counter :{this.props.hitung}</h3>
                <Button />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        hitung : state.hitungan
    }
}

export default connect(mapStateToProps)(Counter);