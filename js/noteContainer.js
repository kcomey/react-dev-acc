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
    handleDelete: function(noteToDelete, index, e) {
      var endpoint = 'http://localhost:3000/api/notes/' + noteToDelete._id;
        $.ajax({
        url: endpoint,
        type: 'delete',
        dataType: 'json',
        cache: false,
        success: function(data) {
          if (this.isMounted()) {
            this.state.notes.splice(index, 1);
            this.setState({notes: this.state.notes});
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    handleNoteSubmit: function(newNote) {
      var endpoint = 'http://localhost:3000/api/notes';
      $.ajax({
        url: endpoint,
        dataType: 'json',
        type: 'post',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: newNote,
        cache: false,
        success: function(data) {
          if (this.isMounted()) {
            this.setState({
              notes: this.state.notes.concat([data])
            });
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.log('error');
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    },
    render: function(){
      return (
        <div>
          <AddNote notes={this.state.notes} addNote={this.handleNoteSubmit} />
          <NoteList notes={this.state.notes} handleDelete={this.handleDelete} />
        </div>
      )
    }
});

module.exports = NoteContainer
