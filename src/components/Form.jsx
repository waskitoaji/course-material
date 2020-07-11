import React from 'react';


class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      gaji:'',
      gender:'',
      alamat:'',
      skill:[],

    }

    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.onPick=this.onPick.bind(this);


  }



  onCheck(event){
    const { name }=event.target;
    this.setState(prevState=>({[name]:!prevState[name]}))
  }

  onChange(event){
    const { name,value }=event.target;
    this.setState({[name]:value});
    console.log(this.state);
  }

  onPick(event){
    let skill =[...this.state.skill];
    let idx=skill.findIndex(elemen=>event.target.value===elemen);
    if(idx>0){
      skill=[...skill.slice(0,idx),...skill.slice(idx+1,skill.length)]
    } else if(idx===0){
      skill=[...skill.slice(idx+1,skill.length)]
    }else {
      skill.push(event.target.value)
    }
    console.log(idx);
    console.log(skill);
    console.log(idx);
    this.setState({skill});
  }

  onSubmit(event){
    alert(`namaku adalah ${this.state.gender}, pekerjaanku sebagai ${this.state.pekerjaan}, alamatku di ${this.state.alamat}`);
    console.log(`untuk input uncontrollednya nilai unnamed ${this.inputUnname.current.value} dengan file ${this.inputfile.current.files[0].name}`)
    event.preventDefault();
  }

  render() {
    const { name,gaji,alamat,skill } =this.props;
  return (
    <div className="App">
      <form onSubmit={this.onSubmit} >
        <label>
          nama : 
          <input type="text" name='name' value={name} onChange={this.onChange} />
        </label> <br />
        <label>
          gaji : 
          <input type="number" name='gaji' value={gaji} onChange={this.onChange} />
        </label> <br />
        <label>laki2 / perempuan :</label> <br />
        <label>
            <input name='gender' type="radio" value="laki2" checked={this.state.gender === "laki2"} onChange={this.onChange} />
            laki2
          </label>
          <label>
            <input name='gender' type="radio" value="perempuan" checked={this.state.gender === "perempuan"} onChange={this.onChange} />
            perempuan
          </label> <br />

        <label>
          Skill :
          <select multiple value={skill} onChange={this.onPick}>
            <option value='cooking'>Cooking</option>
            <option value='writing'>Writing</option>
            <option value='singing'>Singing</option>
          </select>
        </label> <br />
        <label>
          alamat : 
          <textarea name='alamat' value={alamat} onChange={this.onChange} />
        </label> <br />
        <input type="submit" />
      </form>
    </div>
  );
}
}
export default Form;