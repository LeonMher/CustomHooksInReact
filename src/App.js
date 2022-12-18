import "./App.css";
import { useResizeHook } from "./customHooks/resizeHook";
import { useGetData } from "./customHooks/fetchData";

function App() {
  const w = useResizeHook();
  const { data, loading } = useGetData("https://dummyjson.com/products/1");
  console.log(data);
  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <p>width {w} px</p>
      {loading ? <h1>...loading</h1> : <h1>{data.title}</h1>}
    </div>
  );
}

export default App;
