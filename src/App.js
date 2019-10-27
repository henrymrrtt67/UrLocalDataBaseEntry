//importing all relevant files to this file.
import React from 'react';
import Form from './components/Form';

//importing css to this file
import './App.css';



//overall App class which takes all
class App extends React.Component {
   //constructor for the App class in which a super with the returned values passed through
  //calls the render function
  render(){
    //this is the return function that returns the html that helps create the app
    return (
      //a div class in order to have the specific section in question
      <div className="App">
        <header>
         <Form />
       </header>
    </div>
  );
  }
}


export default App;
