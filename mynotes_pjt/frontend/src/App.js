// router
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


import './App.css';
import Header from './components/Header'
import NoteList from './pages/NoteList'
import SingleNote from './pages/SingleNote'



function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
          <Header/>
          <Routes>
            <Route path="/" Component={NoteList} />

            <Route path="/notes/:num"  Component={SingleNote} />
          </Routes>
        </div>
        
      
      </div>
    </Router>
  );
}

export default App;
