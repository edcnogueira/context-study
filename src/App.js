import Counter from "./components/Counter";
import Mirror from "./components/Mirror";
import CountProvider from "./context/Count";

function App() {
  return (
    <CountProvider>
      <Counter />
      <hr />
      <Mirror />
    </CountProvider>
  );
}

export default App;
