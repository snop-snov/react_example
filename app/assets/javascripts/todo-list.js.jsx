/** @jsx React.DOM */
$(function(){

  var todoListContainer = React.createClass({
    getInitialState: function() {
      return {items: [], text: '', count: 0};
    },
    formSubmit: function(e) {
      e.preventDefault();
      newItem = {id: this.state.count, text: this.state.text};
      newCount = this.state.count + 1;
      newItems = this.state.items.concat(newItem)
      this.setState({
        items: newItems,
        count: newCount,
        text: ''
      });
    },
    inputChange: function(e) {
      this.setState({
        text: e.target.value
      })
    },
    removeItem: function(id) {
      items = this.state.items
      _.remove(items, {id: id});
      this.setState({
        items: items
      })
    },

    render: function() {
      return (
        <div>
          <h1>TODO list</h1>
          <div className="form-group">
            <form className="form-inline" onSubmit={this.formSubmit}>
              <input className="form-control" onChange={this.inputChange} value={this.state.text}/>
              <button className="btn btn-default">Add task</button>
            </form>
          </div>
          <ul>
            {this.state.items.map(
              function(item){
                return (
                  <div>
                    <li>{item.text}</li>
                    <button className="btn btn-default" onClick={this.removeItem.bind(this, item.id)}>Remove task</button>
                  </div>
                );
              },
              this
            )}
          </ul>
        </div>
      );
    }
  });

  React.renderComponent(
    <todoListContainer />,
    document.getElementById('todo_component')
  );
});
