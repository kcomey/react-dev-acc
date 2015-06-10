var React = require('react')

var AddNote = React.createClass({
  getInitialState: function(){
    return {
      note: ''
    }
  },
  updateNewNote: function(e){
    this.setState({
      newNote: e.target.value
    });
  },
  handleAddNew: function(){
    this.props.addNew(this.state.newNote);
    this.setState({
      newNote: ''
    });
  },
  render: function(){
    return (
        <div>
          <input type="text" value={this.state.newNote} onChange={this.updateNewNote} />
          <button onClick={this.handleAddNew}> Add Note </button>
        </div>
    );
  }
});

module.exports = AddNote;
