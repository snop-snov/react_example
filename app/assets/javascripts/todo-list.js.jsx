/** @jsx React.DOM */
$(function(){
  var data = [
    '1 task',
    '2 task',
    '3 task'
  ];

  var todoListContainer = React.createClass({
    render: function() {
      return (
        <div>
          <todoListHeader />
          <taskList data={this.props.data} />
        </div>
        )
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
    render: function() {
      return (
        <form onSubmit={this.formSubmit}>
            <input />
            <button>Add task</button>
        </form>
      )
    }
  })


  var taskList = React.createClass({
    render: function() {
      return (
        <ul>
          {this.props.data.map(
            function(text){
              return (
                <taskItem text={text} />
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
