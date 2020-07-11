import React from "react";

export default class MassInput extends React.Component{
    handleChange=(e)=>{
      this.props.onChangeMass(e.target.value);
    }
  
    render(){
      const { massLabel,mass }=this.props;
      return(
        <>
          <label>
            {massLabel==='gram'?'gram:':'kilogram:'}
            <input type='number' value={mass} onChange={this.handleChange}/>
          </label>
        </>
      )
    }
  
  }