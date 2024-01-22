import { useState } from "react";

function Login() {
  const [fullName, setFullName] = useState({
    fname: " ",
    lname: " ",
    email: "",
  });

  function eventDisplay(e) {
    setFullName(e.target.value);
    setFullName(e.target.name);

    const value = e.target.value;
    const name = e.target.name;

    setFullName((prevValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prevValue.lname,
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          lname: value,
        };
      }
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    alert("Form Submitted");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>
          Hello {fullName.fname} {fullName.lastName}
        </h1>
        <br />
        <h2>{}</h2>
        <input
          type="text"
          placeholder="Enter username"
          onChange={eventDisplay}
          name="fname"
          value={fullName.fname}
        ></input>

        <input
          type="text"
          placeholder="Enter LastName"
          onChange={eventDisplay}
          name="lname"
          value={fullName.lname}
        ></input>

        <input
          type="email"
          placeholder="Enter email"
          onChange={eventDisplay}
          name="email"
          value={fullName.email}
        ></input>

        <input
          type="number"
          placeholder="Enter phone Number"
          onChange={eventDisplay}
          name="phoneNumber"
          value={fullName.phoneNumber}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
