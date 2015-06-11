var React = require('react')

var AddNote = React.createClass({
  getInitialState: function(){
    return {
      note: []
    }
  },
  updateNewNote: function(e){
    this.setState({
      note: e.target.value
    });
  },
  handleAddNew: function(){
    // Don't have this.state.notes
    var notes = this.props.notes;
    console.log(notes + 'what');
    var note = {author: 'Kendall', note: this.state.note};
    notes.push(note);
    var endpoint = 'http://localhost:3000/api/notes';
    //TODO
    //this.props.url +
    this.setState({notes: notes}, function() {
      $.ajax({
        url: endpoint,
        dataType: 'json',
        type: 'post',
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: note,
        cache: false,
        success: function(data) {
          if (this.isMounted()) {
            this.setState({notes: data});
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.log('error');
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
    });
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




