import React from 'react';
import SearchInput from './components/SearchInput';
import WeatherInfo from './components/WeatherInfo';
import axios from 'axios';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
const api = {
  key: '',
  base: 'https://api.openweathermap.org/data/2.5/'
  
}

class App extends React.Component {

  state = { city: '', temp: '', description: '', iconURL: ''}

  onSearchSubmit = async (entry) => {
    const response = await axios.get(`${api.base}weather?q=${entry}&units=imperial&appid=${api.key}`)
    this.setState({city: response.data.name, 
                  temp: response.data.main.temp,
                  description: response.data.weather[0].description, 
                  iconURL: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`})
  }


  render(){
    return (
      <div className='ui container' style={{marginTop:'30px'}}>
        <SearchInput onSearchSubmit={this.onSearchSubmit}/>
        <WeatherInfo 
          city={this.state.city} 
          temp={this.state.temp} 
          description={this.state.description}
          iconURL={this.state.iconURL}
          />
      </div>
    )
  }
}

export default App;
