import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';



import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import ErrorFourFour from './components/ErrorFourFour';

function App() {
  // Initiate Query state
  const [ query, setQuery] = useState();

  // Function to update query state passed to other components
  const updateQuery = (newQuery)=>{
    setQuery(newQuery);
  }

  return (
    <div className="container">
    <BrowserRouter> 
      <SearchForm />
      <Nav updateQuery={updateQuery}/>
        <Switch>
          <Route exact path='/' render={ () => <Redirect to={`/apple%20pie`} /> } />
          <Route exact path="/:query" render={(props)=> <PhotoContainer query={query} updateQuery={updateQuery}/>} />
          {/* if no matching route, render Not Found */}
          <Route component={ErrorFourFour} />
        </Switch>
      </BrowserRouter>  

    </div>
  );
}

export default App;
