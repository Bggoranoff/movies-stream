import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './Main';
import CategoryList from './CategoryList';
import FilmsList from './FilmsList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact render={(props) => <Main Cmp={CategoryList} props={props} />} />
        <Route path='/films/:id' render={(props) => <Main Cmp={FilmsList} props={props} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
