
class Forecast {
  constructor() {
    this.key = 'K5hm5r6b8g6deRn80ht1PYRWzCSKVciv';
    this.weather = `http://dataservice.accuweather.com/currentconditions/v1/`;
    this.city = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  }
  async valueReturned(location) {
    const locLocation = await this.getCity(location);
    console.log(locLocation)
    const localWeather = await this.getConditions(locLocation.Key);
    console.log(localWeather)
  
  setWeather(locLocation, localWeather);
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`

    const response = await fetch(this.city + query);
    const datass = await response.json();
    return (datass[0])
  }
  async getConditions(id) {
    console.log(id)
    const query = `${id}?apikey=${this.key}`;
  
    const response = await fetch(this.weather + query);
    const data = await response.json();
    console.log(data[0])
   return data[0];
  }
 
}







