import Alert from "./components/Alert";
import Button from "./components/Button";
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
      <Button color="secondary" onClick={() => console.log('Clicked')}>My Button</Button>
    </div>
  );
}

export default App;