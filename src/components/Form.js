//importing all relevant files to this file.
import React from 'react';
import Checkbox from './checkBox';



// creating a Constant for the options that the users can click on
const OPTIONS = ["Wine", "Beer", "Spirits"];





//overall App class which takes all
class Form extends React.Component {
   //constructor for the App class in which a super with the returned values passed through
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //sets the checkbox values to false so it can be presented so to people.
    this.state={
    	ProductData: [],
      checkboxes: OPTIONS.reduce(
          (options, option) => ({
            ...options,
            [option]:false
          }),
          {}
        ),
        barname: "",
        street_num: 0,
        street_name: "",
        suburb: "",
        city: "",
  		  craftSlide: 5,
  		  complexity: 5,
      	barLocation: "",
      	lqMeal: 0,
      	lqBeer: 0,
      	uqMeal: 0,
      	uqBeer: 0,
    };
  }
  

  // is a super function in order to select all values either selecting or de-selecting
  handleChange(event){
  	this.setState({...this.state,
      [event.target.name]: event.target.value})
  }

  // allows for a passing through in order to select all checkboxes as true  

  // allows for the changing between true and false for individual checkboxes
  handleCheckboxChange = changeEvent => {
    //ginds the specific checkbox to be checked off
    const { name } = changeEvent.target;
    // changes the state dependant on whether it was previously true or false
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };
    //allows for event and changing of the checkbox
    async handleSubmit(event){
      event.preventDefault();
      var craftSlide = parseInt(this.state.craftSlide, 10);
      var complexity = parseInt(this.state.craftSlide, 10);
      var street_num = parseInt(this.state.street_num);
      var lqBeer = parseInt(this.state.lqBeer);
      var lqMeal = parseInt(this.state.lqMeal);
      var uqMeal = parseInt(this.state.uqMeal);
      var uqBeer = parseInt(this.state.uqBeer);
        await fetch('https://127.0.0.1:5001/api/bars',{
    		method: 'POST',
        headers: {
          'Accept': 'application/json, tet/plain, */*',
          'content-type':'application/json'},
    		body: JSON.stringify({
          "barName": this.state.barname,
          "street_num": street_num,
          "street_name": this.state.street_name,
          "suburb": this.state.suburb,
          "city": this.state.city,
  				"craftSlide": craftSlide,
  				"complexity": complexity,
  				"wineCheck": this.state.checkboxes["Wine"],
  				"beerCheck": this.state.checkboxes["Beer"],
  				"spiritsCheck": this.state.checkboxes["Spirits"],
  				"lqMeal": lqMeal,
  				"lqBeer": lqBeer,
  				"uqMeal": uqMeal,
  				"uqBeer": uqBeer,
  			})
        }
    	)
    		.then(function (response) {
            if (response.status !== 200) {
                alert(response.status);
            }

          response.json().then(function (data) {
                console.log("Data Inserted Correctly");
                console.log(data);
            });
        })
        .catch(function (err) {
            alert(err);
        });
  			}

  // allows for the creation within this class whilst using the imported files
  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );
  // creates all the checkboxes based on the constants that are the options
  createCheckboxes = () => OPTIONS.map(this.createCheckbox);

  //calls the render function
  render(){
    //this is the return function that returns the html that helps create the app
    return (
      //a div class in order to have the specific section in question
      <div className ="form">
         <form onSubmit = {this.handleSubmit}>
           <label>
             <h3>What is the Barname: <br/></h3>
              <input type = "text" name ="barname" onChange={this.handleChange.bind(this)} value={this.state.barname} />
            </label><br />
            Street Number: <br />
            <input type="number" 
           	name="street_num" 
           	onChange={this.handleChange.bind(this)}
           	value = {this.state.street_num}
           	/> <br />
             Street Name: <br />
            <input type = "text" name ="street_name" onChange={this.handleChange.bind(this)} value={this.state.street_name} />
            <br />
            Suburb: <br />
            <input type = "text" name ="suburb" onChange={this.handleChange.bind(this)} value={this.state.suburb} />
            <br />
            City:<br />
            <input type = "text" name ="city" onChange={this.handleChange.bind(this)} value={this.state.city} />

            <div className = "slideContainer">
              <h3> Craft Beer </h3>
              <input type="range" min="1" max="10" className="slider"
              name="craftSlide" onChange={this.handleChange.bind(this)} value={this.state.craftSlide}/> <br/>
              {this.state.craftSlide}
              <h3> Wine complexity </h3>
              <input type="range" min="1" max="10" className="slider"
              name="complexity" onChange={this.handleChange.bind(this)} value={this.state.complexity}/> <br />
              {this.state.complexity}
            </ div>
            <h3>Liquor Specialty Checkboxes: <br/></h3>
            <div className = "checkboxes">
              <input type ="checkbox"
              defaultChecked={this.onCheckboxChange}
              onChange = {this.handleCheckboxChange} 
              key = "Wine"
              name = "Wine"/>
              {OPTIONS[0]}
               <input type ="checkbox"
              name="Beer"
              defaultChecked={this.onCheckboxChange}
              onChange = {this.handleCheckboxChange} 
              key = "Beer" /> 
              {OPTIONS[1]}
               <input type ="checkbox"
              name="Spirits"
              defaultChecked={this.onCheckboxChange}
              onChange = {this.handleCheckboxChange}
              key="Spirits" />
              {OPTIONS[2]}
            </div><br/>
            Lower Quartile Meal Price:<br/>
           	<input type="number" 
           	name="lqMeal" 
           	onChange={this.handleChange.bind(this)}
           	value = {this.state.lqMeal}
           	/><br/>
           	Lower Quartile Beer Price:<br/>
           	<input type="number" 
           	name="lqBeer" 
           	onChange={this.handleChange.bind(this)}
           	value = {this.state.lqBeer}
           	/>
           	<br/>
           	Upper Quartile Meal Price: <br/>
           	<input type="number" 
           	name="uqMeal" 
           	onChange={this.handleChange.bind(this)}
           	value = {this.state.uqMeal}
           	/>
           	<br/>
           	Upper Quartile Beer Price:
           	<br/>
           	<input type="number" 
           	name="uqBeer" 
           	onChange={this.handleChange.bind(this)}
           	value = {this.state.uqBeer}
           	/> 
           	<br/>
            <input type="submit" value="Submit"/>
        </form>
        </div>
  );
  }
}


export default Form;
