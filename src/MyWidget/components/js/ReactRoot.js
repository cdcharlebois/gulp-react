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
          React.createElement("div", null, 
            React.createElement("h3", null, title), 
            React.createElement(Child, {person: this.props.person})
          )
        )
      }
    })
});
