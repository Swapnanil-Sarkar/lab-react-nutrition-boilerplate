import {Component} from "react";
import './App.css'
import FoodData from './resources/FoodData'
import FoodBox from './components/FoodBox'
class App extends Component{
  constructor(){
    super();
    this.state = {
      filteredData: [...FoodData],
    }
  }
render(){

  let handleChange = (event) =>{
    
    let searchText = event.target.value.toLowerCase();

    let searchResults = FoodData.filter((element)=>{
      return element.name.includes(searchText);
    })

    this.setState({
      filteredData: searchResults,
    });

  }
  

  return(
    <>
    <div style={{ display: "flex", alignItems: "center" }}>
  <input
    style={{
    padding: '10px',
    border: '1px solid rgb(204, 204, 204)',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '100%',
    marginBottom: '20px',
    }}
    type="text"
    placeholder="Search Here"
    onChange={handleChange}
  />
</div>

      {this.state.filteredData.map((element,i)=>(
        <FoodBox foodItem = {element} key={i}/>
    ))
    }
    </>
  )
}
}
export default App