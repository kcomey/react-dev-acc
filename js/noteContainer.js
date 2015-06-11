var React = require('react')
var AddNote = require('./addNote')
var NoteList = require('./noteList')

var NoteContainer = React.createClass({
    getInitialState: function() {
      return {notes: []};
    },
    componentDidMount: function() {
      var endpoint = this.props.url + '/api/notes';
      $.ajax({
        url: endpoint,
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function(data) {
          if (this.isMounted()) {
            this.setState({notes: data});
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    render: function(){
      return (
        <div>
          <AddNote addNew={this.addNote} />
          <NoteList notes={this.state.notes} />
        </div>
      )
    }
});

module.exports = NoteContainer
