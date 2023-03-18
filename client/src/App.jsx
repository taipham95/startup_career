import {BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom';

import CareerHeader from "./components/CareerHeader";
// import ApplyPage from "./pages/ApplyPage/ApplyPage";
import CareerFooter from "./components/CareerFooter";
import JobDetail from "./components/JobDetail";

import Header from "./components/CareerBody/Header/Header";
import Content from "./components/CareerBody/Content/Content";
import CardItemDetails from './components/CareerBody/Components/CardItemDetails/CardItemDetails';
import ApplyPage from './pages/ApplyPage/ApplyPage';

function App() {
  const CareerPage =()=>{
    return (
      <div className="min-h-screen flex flex-col ml-0">
        <CareerHeader />
      <main className="flex-1 w-full">
        {/* <Header/> */}
        {/* <Content/> */}
        <ApplyPage />
      </main>
      <CareerFooter />
      </div>
    )
  } 
  return (
<Router>
    {/* <div className="min-h-screen flex flex-col ml-0"> */}
      {/* <CareerHeader />
      <main className="flex-1 w-full">
        <Header/>
        <Content/>
      </main>
      <CareerFooter /> */}
    {/* </div> */}

    <Routes>
      <Route exact path="/" element={<CareerPage/>}></Route>
      <Route exact path="/item/:id" element={<CardItemDetails/>}></Route>
      <Route exact path="/item/:id/apply" element={<ApplyPage/>}></Route>
    </Routes>
</Router>
  );
}

export default App;
