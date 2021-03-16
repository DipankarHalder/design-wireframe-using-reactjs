export default function Profile(props) {
  
  console.log(props);

  return (
    <div>
      {props.match.params.id}
    </div>
  )
}
