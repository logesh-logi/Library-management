import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <div className="mx-auto max-w-2xl p-4">
          <h1 className="text-3xl font-bold mb-4">Library Management</h1>
        </div>
        <div className="mx-auto max-w-2xl p-4">
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
