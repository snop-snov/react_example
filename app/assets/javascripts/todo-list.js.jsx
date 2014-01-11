/** @jsx React.DOM */
$(function(){

  var todoListContainer = React.createClass({
    getInitialState: function() {
      return {items: [], text: '', count: 0};
    },
    render: function() {
      return (
        <div>
          <todoListHeader />
          <taskList items={this.state.items} />
        </div>
      );
    }
  });

  var todoListHeader = React.createClass({
    render: function() {
      return (
        <div>
          <h1>TODO list</h1>
          <taskForm />
        </div>
      );
    }
  });


  var taskForm = React.createClass({
    formSubmit: function(e) {
      e.preventDefault();
      newItem = {id: this.state.count, text: this.state.text};
      newCount = this.state.count + 1;
      this.setState({
        items: this.state.items.concat(newItem),
        count: newCount,
        text: ''
      });
    }
    inputChange: function(e) {
      this.setState({
        text: e.target.value
      })
    }
    render: function() {
      return (
        <div className="form-group">
          <form className="form-inline" onSubmit={this.formSubmit}>
            <input className="form-control" onChange={this.inputChange}/>
            <button className="btn btn-default">Add task</button>
          </form>
        </div>
      )
    }
  })


  var taskList = React.createClass({
    render: function() {
      return (
        <ul>
          {this.props.items.map(
            function(item){
              return (
                <taskItem text={item.text} />
              );
            }
          )}
        </ul>
      );
    }
  });

  var taskItem = React.createClass({
    render: function() {
      return (
          <li>{this.props.text}</li>
      );
    }
  });

  // var example = React.createClass({
  //   render: function() {
  //     return (
  //       )
  //   }
  // })
  React.renderComponent(
    <todoListContainer data={data}/>,
    document.getElementById('todo_component')
  );
});
