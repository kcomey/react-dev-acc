var React = require('react')

var AddNote = React.createClass({
  getInitialState: function(){
    return {
      note: ''
    }
  },
  updateNewNote: function(e){
    this.setState({
      note: e.target.value
    });
  },
  handleAddNew: function(){
    // TODO: add author field
    var note = {author: 'Kendall', note: this.state.note};
    this.props.addNote(note);
    this.setState({note: ''});
  },
  render: function(){
    return (
        <div>
          <input type="text" value={this.state.note} onChange={this.updateNewNote} />
          <button onClick={this.handleAddNew}> Add Note </button>
        </div>
    );
  }
});

module.exports = AddNote;




