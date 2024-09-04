import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup"

function App() {
  const items = [
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Alert>
        Hello World
      </Alert>
      {/* <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem} /> */}
    </div>
  );
}

export default App;