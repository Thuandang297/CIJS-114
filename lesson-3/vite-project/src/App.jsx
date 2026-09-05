import Card from './components/Card'

function App() {

  return (
    <>
      <div className="app">
        <h1>Hello mọi người!</h1>
        <Card name={{ name: "Richard" }} age={20} />
        <Card name="Linda" age={20} />
        <Card name="Audi" age="25" />
        <Card />
        <Card />
        <Card />
      </div>
    </>

  )
}

export default App
