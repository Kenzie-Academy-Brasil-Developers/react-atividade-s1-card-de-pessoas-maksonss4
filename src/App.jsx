import "./App.css";
import Developer from "./components/developer";

function App() {
  return (
    <div className="App">
      <Developer name={"Makson"} age={24} country={"Brasil"} />
      <Developer name={"Sillas"} age={32} country={"Brasil"} />
      <Developer name={"Santos"} age={44} country={"Brasil"} />
      <Developer name={"Azevedo"} age={21} country={"Brasil"} />
    </div>
  );
}

export default App;
