var React = require('react')
var Header = require('./header')
var NoteContainer = require('./noteContainer');
var CommentBox = require('./commentBox');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <NoteContainer url={this.props.url}/>
      </div>
    )
  }
})

var url = 'http://localhost:3000'
React.render(<App url={url}/>, document.getElementById('app'))





