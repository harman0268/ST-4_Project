
import './App.css';
import Form from './components/Form'
import Added from './components/Added'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='/added' element={<Added/>}></Route>
      </Routes>
    </Router>

      
    </div>
  );
}

export default App;
