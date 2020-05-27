import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './Main';
import CategoryList from './CategoryList';
import FilmsList from './FilmsList';
import Stream from './Stream';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact render={(props) => <Main Cmp={CategoryList} props={props} />} />
        <Route path='/films/:id' exact render={(props) => <Main Cmp={FilmsList} props={props} />} />
        <Route path='/films/watch/:filmId' render={(props) => <Main Cmp={Stream} props={props} />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
