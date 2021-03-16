import { useState } from 'react';
// import { allInputChangeEvent } from '../../core/elements/form/AllInputChangeEvent';
import { allInputsValidation } from '../../core/elements/form/AllInputsValidation';
import Input from '../../core/elements/form/Input';
import AuthLayout from '../../core/layout/AuthLayout';

export default function Login() {

  const [initval, setInitval] = useState({ 
    name: '',
    email: '', 
    password: '' 
  });
  
  // allInputChangeEvent(setInitval);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    allInputsValidation();
  }

  return (
    <AuthLayout>
      <div className="app-from-wrapper">
        {/* <Form submitForm={handleSubmit}> */}
          <Input 
            type="text" 
            name="name"
            placeText="Please enter name..." 
            value={initval.name} />
          <Input 
            type="email" 
            name="email"
            placeText="Please enter email..." 
            value={initval.email} />
          <Input 
            type="password" 
            name="password"
            placeText="Please enter password..." 
            value={initval.password} />
          <button type="submit">Submit</button>
        {/* </Form> */}
      </div>
    </AuthLayout>
  )
}
