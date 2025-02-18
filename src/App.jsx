const Hello = (props) => {
  console.log(props)  
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old      
        </p>
    </div>
  )
}

const App = () => {
  const name = 'Pekka'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}
export default App
