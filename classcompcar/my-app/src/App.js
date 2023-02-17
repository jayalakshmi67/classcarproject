import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import CardList from './components/CardList';
import About from './components/About';
import CardDetails from './components/CardDetails';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import CreateCard from './components/CreateCard';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
      <div className='App'>   
      <Navbar/>
      <Switch>
      <Route exact path={'/'} component={CardList}/>
      <Route path={'/form'} component={CreateCard}/>
      <Route path = {'/about'} component={About}/>
      <Route path = {'/card/:card_id'} component = {CardDetails}/>
      </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App