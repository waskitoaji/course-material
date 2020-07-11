import React, {useState, useEffect} from 'react';


function HookConcept(props){
  const[mount, setMount] = useState(true);
  const[mystate,setState] = useState('Hello!');
  
  useEffect(() => {
    let mystate='Hello World!'
    setState(mystate);   
  },[])



  useEffect(() => {
    console.log(`my updated state is ${mystate}`);
  }, [mystate])

  useEffect(() => {
    console.log('Good Bye!');
  }, [mount])




    return (
      <>
      <br />
      <button onClick={() => setMount(!mount)}>{mount ? 'Unmount': 'Mount'}</button>
      <div className="hello">
        Halo Dunia  {mystate}
      </div>
      </>
    );
  }


export default HookConcept;