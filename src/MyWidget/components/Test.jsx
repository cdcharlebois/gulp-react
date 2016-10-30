var Test = React.createClass({
  render: function(){
    return (
      <div>Hello From React</div>
    )
  }
})

ReactDOM.render(
  <Test/>,
  document.querySelector('[data-dojo-attach-point="widgetBase"]')
)
