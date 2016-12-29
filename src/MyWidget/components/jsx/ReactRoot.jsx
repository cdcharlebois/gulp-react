define([
  "MyWidget/widget/lib/react",
  "MyWidget/widget/lib/react-dom",
  "MyWidget/components/js/Child"
], function(React, ReactDOM, Child) {
    return React.createClass({
      render: function(){
        return (
          <div>
            <h3>{this.props.person.get('Name')}'s Pets</h3>
            <Child person={this.props.person}/>
          </div>
        )
      }
    })
});
