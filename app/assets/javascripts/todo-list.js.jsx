/** @jsx React.DOM */
$(function(){
  var todoListContainer = React.createClass({
    render: function() {
      return (
        <div>
          <div><h1>TODO list</h1></div>
          <div>taskList</div>
        </div>
        )
    }
  })
  // var taskList = React.createClass({
  //   render: function() {
  //     return (
  //       )
  //   }
  // })
  React.renderComponent(
    <todoListContainer/>,
    document.getElementById('todo_component')
  );
});
