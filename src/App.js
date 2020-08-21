import React from 'react';
import SearchInput from './components/SearchInput';
import WeatherInfo from './components/WeatherInfo';
import axios from 'axios';


const base = 'https://api.openweathermap.org/data/2.5/';
const key = process.env.REACT_APP_API_KEY;
  


class App extends React.Component {
  state = { responses: [] }

  //TODO: Prop add ID for each response
  onSearchSubmit = async (entry) => {
    const response = await axios.get(`${base}weather?q=${entry}&units=imperial&appid=${key}`)
    this.setState( {responses: this.state.responses.concat(response)} )
  }



  render(){
    return (
      <div className='ui container' style={{marginTop:'30px'}}>
        <SearchInput onSearchSubmit={this.onSearchSubmit}/>
          {this.state.responses.map(response => (
              <WeatherInfo 
                // id={response.data.id}
                city={response.data.name}
                temp={response.data.main.temp}
                description={response.data.weather[0].description}
                iconURL={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
              />              
            ))}
      </div>
    )
  }
}

export default App;
