import React,{Component} from 'react';
import './app.scss';
import {Switch,Route} from 'react-router-dom';
import Header from '../pages/header';
import Footer from '../pages/footer';
import Cvetsvecheniya from '../pages/cvetsvecheniya';
import Info from '../pages/infocomponent'

class App extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Switch>
                  <Route
                  path="/cvet_svecheniya"
                  component={
                    Cvetsvecheniya
                  }
                  />
                  <Route
                  path="/info"
                  component={
                    Info
                  }
                  />
                </Switch>    
                <Footer/>
             
           
           
           
            </React.Fragment>
        )
    }
}
export default App;

  