define([
  "MyWidget/widget/lib/react",
  "MyWidget/widget/lib/react-dom",
  "MyWidget/components/js/Child"      // import any components needed here
], function(React, ReactDOM, Child) {
    return React.createClass({
      render: function(){
        var title = ['Hello', 'Greetings', 'Hola'][Math.floor(Math.random()*3)]
            + ' from React'
        return (
          <div>
            <h3>{title}</h3>
            <Child person={this.props.person}/>
          </div>
        )
      }
    })
});
