import CareerHeader from "./components/CareerHeader";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <CareerHeader />
      <main className="flex-1 w-full">
        <h1 className="text-center text-4xl mt-12 font-bold">X-Career</h1>
      </main>
    </div>
  );
}

export default App;
