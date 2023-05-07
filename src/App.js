import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import StartApplication from './components/StartApplication';
import InitiateApplication from './components/InitiateApplication';
import LoanForm from './components/LoanForm';
import CheckForm from './components/CheckForm';
import DecisionEngine from './components/DecisionEngine';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<StartApplication/>}/>
        <Route path='/initiation' element={<InitiateApplication/>}/>
        <Route path='/initiation/form-filling' element={<LoanForm/>}/>
        <Route path='/checkform/:name/:date/:loan' element={<CheckForm/>}/>
        <Route path='/finalPage/:name/:date/:loan/:preAssessment' element={<DecisionEngine/>}/>
      </Routes>
    </div>
  );
}

export default App;
