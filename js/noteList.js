var React = require('react')

var NoteList = React.createClass({
  handleDelete: function(){
    this.props.handleDelete()
  },
  render: function(){
    var listNotes = this.props.notes.map(function(note, index){
      return (
        <li>
          {note.note} {note.author}
          [<a href="#" onClick={this.props.handleDelete.bind(this, note, index)}>x</a>]
        </li>
      )
    }.bind(this));
    return (
        <div>
          <h3> Notes </h3>
          <ul>
            {listNotes}
          </ul>
        </div>
    )
  }
})

module.exports = NoteList;

