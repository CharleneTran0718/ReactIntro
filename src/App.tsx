import ListGroup from "./components/ListGroup";

function App(){
  let items = ["New York", "Korea", "Los Angeles", "California", "Toyko"];

  return (<div><ListGroup items={items} heading="Cities"/></div>);
}

export default App;