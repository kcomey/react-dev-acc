var React = require('react')

var App = React.createClass({
  render: function() {
    return (
      <h1>Welcome to my site</h1>
    )
  } 
})

React.render(<App />, document.getElementById('app'))
