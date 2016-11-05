var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4781ba67f4a6c390b0b527851fe31a6f&units=imperial';

//4781ba67f4a6c390b0b527851fe31a6f

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURI(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestURL).then(function (res) {
            if (res.data.con && res.data.message){
                throw new Error(res.data.message)
            } else {
                return res.data.main.temp;
            }

            
        }, function (res) {
            throw new Error(res.data.message)
        });
        
    }
};