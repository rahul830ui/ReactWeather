var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        var {temp,location} = this.props;
        return (
            <h1>It is {temp} at {location}</h1>
        );
    }
});

module.exports = WeatherMessage;