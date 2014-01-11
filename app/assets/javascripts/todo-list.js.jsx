/** @jsx React.DOM */
$(function(){

  var todoListContainer = React.createClass({
    getInitialState: function() {
      return {items: [], text: '', count: 0};
    },
    formSubmit: function(e) {
      e.preventDefault();
      newItem = {id: this.state.count, text: this.state.text, is_disabled: "disabled"};
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
      items = this.state.items;
      _.remove(items, {id: id});
      this.setState({
        items: items
      })
    },
    updateItem: function(id) {

    },

    toggleItem: function(id) {
      items = this.state.items;
      new_items = _.map(items, function(e){
        if (e.id == id) {
          e.is_disables = ''
        };
        return e;
      });
      this.setState({items: new_items});
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
                    <li>
                      <input value={item.text} onClick={this.toggleItem.bind(this, item.id)} disabled={item.is_disabled} />
                    </li>
                    <button className="btn btn-default" onClick={this.updateItem.bind(this, item)}>Update task</button>
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
