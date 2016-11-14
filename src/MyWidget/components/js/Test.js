define([
  "MyWidget/widget/lib/react",
  "MyWidget/widget/lib/react-dom",
  "MyWidget/components/js/Child"
], function(React, ReactDOM, Child) {
    return React.createClass({
      render: function(){
        return (
          React.createElement("div", null, 
            React.createElement("h3", null, this.props.person.get('Name'), "'s Pets"), 
            React.createElement(Child, {person: this.props.person})
          )
        )
      }
    })
});
