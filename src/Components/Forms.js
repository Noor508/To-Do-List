import { useState } from "react";

function Forms()
{
    const [iName , setIname]= useState("");
    const [fullName, setfullName]=useState();
    function eventDisplay(e)
    {
     setIname(e.target.value)
    }

    function onSubmit()
    {      
        setfullName(iName)
    }
    
    return(
        <>
        <h1>Hello {fullName} </h1>
        <input type='text'placeholder="Enter name" onChange={eventDisplay} value={iName} ></input>
        <button onClick={onSubmit}>Submit </button>
        </>
    )
}


export default Forms;