/** @jsx React.DOM */
$(function(){
  var data = [
    '1 task',
    '2 task',
    '3 task'
  ];

  var todoListContainer = React.createClass({
    render: function() {
        this.props.data.map(function(text){console.log(text)});
      return (
        <div>
          <div><h1>TODO list</h1></div>

          <ul>{this.props.data.map(function(text){return (<taskItem text={text} />)})}</ul>
        </div>
        )
    }
  })

  var taskItem = React.createClass({
    render: function() {
        return (
            <li>{this.props.text}</li>
        );
    }
  });

  // var taskList = React.createClass({
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
