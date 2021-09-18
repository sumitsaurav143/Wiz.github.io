import React,{useRef,useState} from 'react'

const Login=()=>{
  const name=useRef()
  const pass=useRef()
 const [show,setShow]=useState(false)


function validateUserPass() {

  //User Validation
  const user=name.current.value;
 
  var errors_username = [];
  if (user.length < 8) {
    errors_username.push("Your username must be at least 8 characters"); 
  }
  if (user.search(/[a-z]/i) < 0) {
    errors_username.push("Username must contain at least one lower case letter.");
  }
  if (user.search(/[A-Z]/) < 0) {
    errors_username.push("Username must contain at least one Upper case Letter."); 
}
  if (user.search(/[0-9]/) < 0) {
      errors_username.push("Username must contain at least one digit."); 
  }
  
  
  //Password_Validation
  const passwd=pass.current.value;
  
  var errors_pass = [];
  if (passwd.length < 8) {
    errors_pass.push("Your password must be at least 8 characters"); 
  }
  if (passwd.search(/[a-z]/i) < 0) {
      errors_pass.push("Your password must contain at least one letter.");
  }
  if (passwd.search(/[0-9]/) < 0) {
    errors_pass.push("Your password must contain at least one digit."); 
  }
  //Errors
  if (errors_username.length > 0) {
    document.getElementById("valid_user_msg").innerText=errors_username.join("\n");
}
  if (errors_pass.length > 0) {
    document.getElementById("valid_pass_msg").innerText=errors_pass.join("\n");
  }
  if (errors_pass.length == 0 && errors_username.length > 0) {
  setShow(true);
}
}
   


  return(
    <>
      <div className="Main">
        <div id="login_form">
          <div>
          <input ref={name} type="text" placeholder="Enter Username" required/>
          </div>
          <br/>
          <div>
          <input ref={pass} type="text" placeholder="Enter Password" required/>
          </div>
          <br/>
            <button onClick={validateUserPass}> Submit</button>
          </div>
          
      </div> 
      {!show?
      <div id="errors_here">
      <div id="error">Errors Shown Below:-</div>
      <div id="valid_user_msg"></div>
      <div id="valid_pass_msg"></div>
      </div>:
      <h1 id="success">User Logged In!!</h1>  
  }
    </>
  )
}

export default Login;
