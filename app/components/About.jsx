var React = require('react');

var About = React.createClass({
    render: function () {
        return (
          <div>
              <h1>About component</h1>
              {this.props.children}
          </div>
        );
    }
});

module.exports = About;