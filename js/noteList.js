var React = require('react')

var NoteList = React.createClass({
  render: function(){
    var listNotes = this.props.notes.map(function(note){
      return <li> {note} </li>;
    });
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
