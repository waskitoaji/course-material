import React from "react";
import MassInput from './MassInput'


class Converter extends React.Component{
    constructor(props){
      super(props);
      this.state={
        gram:0,
        kilogram:0
      }
    }
  
    onChangeGram=(gram)=>{
      let kilogram =(parseFloat(gram)/1000).toString()
      this.setState({gram,kilogram})
    }
  
    onChangeKilogram=(kilogram)=>{
      let gram =(parseFloat(kilogram)*1000).toString()
      this.setState({gram,kilogram})
    }
  
    render(){
      const { gram,kilogram } = this.state;
      return(
        <form>
          <MassInput massLabel='gram' mass={gram} onChangeMass={this.onChangeGram}/>
          <MassInput massLabel='kg' mass={kilogram} onChangeMass={this.onChangeKilogram}/>
          <button type="submit">convert</button>
        </form>
      )
    }
  
  
  }
  
  export default Converter;
  