import CareerHeader from "./components/CareerHeader";
import ApplyPage from "./pages/ApplyPage/ApplyPage";
import CareerFooter from "./components/CareerFooter";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <CareerHeader />
      <main className="flex-1 w-full">
        <ApplyPage/>
      </main>
      <CareerFooter />
    </div>
  );
}

export default App;
