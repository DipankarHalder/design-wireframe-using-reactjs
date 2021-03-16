// import { allInputChangeEvent } from './AllInputChangeEvent';

export default function Input({ type = "text", placeText, name, value }) {
  console.log(value);

  const allInputChangeEvent = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="app-inputs">
      <input 
        type={type} 
        placeholder={placeText} 
        name={name}
        value={value}
        onChange={(event) => allInputChangeEvent(event)}
      />
    </div>
  )
}



{/* <div className="us-verify-field phone-filed">
  <input
    type="email"
    name="email"
    onChange={(event) => handleChange(event)}
    value={initialValue.email}
    placeholder="Email Address"
  />
  {disError.emailDisError && (
    <p className="error-validation">{errorValidate.emailError}</p>
  )}
</div> */}