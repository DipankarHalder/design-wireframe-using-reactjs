import React from 'react';

export default function Form({children, submitForm}) {
  // console.log(children);

  

  // const checkSpace = /^\S+$/;
  // const validNumber = /^[0-9\s]*$/;
  // const validEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/;


  // const checkInputValidation = () => {
  //   if(type){
  //     if (type === "") {
  //       console.log(`Please enter ${name}`);
  //     }
  
  //     if (type === "email" && !checkSpace.test(type)) {
  //       console.log(`Space is not allow in ${type}`);
  //     }
  //     if ((type === "email") !== "" && !validEmail.test(type)) {
  //       console.log("Please enter a valid email address")
  //     }
  //   }
  // }

  return (
    <form onSubmit={submitForm}>
      {children}
    </form>
  )
}
