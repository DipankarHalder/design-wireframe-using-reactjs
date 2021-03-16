export default function Input({ type = "text", placeText }) {

  console.log(type);
  
  return (
    <div className="app-inputs">
      <input type={type} placeholder={placeText} />
    </div>
  )
}
