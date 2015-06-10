var React = require('react')
var AddNote = require('./addNote')
var NoteList = require('./noteList')

var NoteContainer = React.createClass({
    getInitialState: function(){
      return {
        notes: ['note1', 'note2'],
      }
    },
    addNote: function(note){
      this.state.notes.push(note);
      this.setState({
        notes: this.state.notes
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
