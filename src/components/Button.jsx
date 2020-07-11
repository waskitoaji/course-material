import React, { Component } from 'react';
import  { connect } from 'react-redux';

class Button extends Component{
   

   

    render(){
        console.log(this.props)
        return(
            <div className="button">
                <button className="minus" onClick={this.props.handleMin}>-</button>
                <input type="text" value={this.props.hitung}/>
                <button className="plus" onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        hitung : state.hitungan
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        handlePlus:()=>dispatch({type:'PLUS'}),
        handleMin:()=>dispatch({type:'MINUS'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Button);