import "./App.css";
import Timer from "./Timer";
import TimerClass from "./TimerClass";

function App(props) {
  const myObj = {};
  const myArray = [];
  const myInt = 1;
  const myString = "my string";
  const nullValue = null;
  const undefinedValue = undefined; // not recommended
  const myFunc = () => {};
  const myClass = class myClass {};

  const myDivString = "<div></div>";
  const myDiv = <div></div>;

  return (
    <div className="App">
      <header className="App-header">Header</header>
      <aside>Aside</aside>
      <main>
        <Timer
          className="my-special-timer"
          myArray={myArray}
          myClass={myClass}
          myObj={myObj}
          myInt={myInt}
          myString={myString}
          nullValue={nullValue}
          undefinedValue={undefinedValue}
          myFunc={myFunc}
          myDivString={myDivString}
          myDiv={myDiv}
        >
          <div>Child 1</div>
          <div>Child 2</div>
        </Timer>
        <TimerClass>
          <div>Class Child 1</div>
          <div>Class Child 2</div>
        </TimerClass>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
