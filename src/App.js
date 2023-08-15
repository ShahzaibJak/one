import './App.css';
import { PredictAge } from './components/PredictAge';
import { TaskHome } from './TaskHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { CatFact } from './components/CatFact';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SignUp } from './components/SignUp';



function App() {

  const client = new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false
      }
    }
  })


  return (
    <div className="App">
      <Router>
        <QueryClientProvider client={client}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cat-fact' element={<CatFact />} />
            <Route path='/age-predictor' element={<PredictAge />} />
            <Route path='/task-list' element={<TaskHome />} />
            <Route path='/register' element={<SignUp />} />
          </Routes>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
