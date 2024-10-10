import Button from "./components/button"

function App() {
  return (
    <>
      <h1>Hi, I'm a Button from <a href="https://github.com/mitevskasara/library">Library UI Repository</a></h1>
      <Button onClick={() => alert('Thanks!')}>Click me!</Button>
    </>
  )
}

export default App;
