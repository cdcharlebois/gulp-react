define([
  "MyWidget/widget/lib/react",
  "MyWidget/widget/lib/react-dom"
], function(React, ReactDOM) {
    return React.createClass({
      getInitialState: function(){
        return {list: []}
      },


      componentDidMount: function(){
        var self = this
        mx.data.action({
          params: {
            actionname: "TestSuite.DS_ReturnList",
          },
          callback: function(res) {
            console.log(res)
            self.setState({list: res})
          },
          error: function(error) {
            alert(error.description);
          }
        }, this);
      },



      render: function(){
        debugger;
        var listElements = this.state.list.map(function(s) {
          return React.createElement("li", null, 
            s.jsonData.attributes.Name.value
          )
        });
        return (
          React.createElement("div", null, 
            React.createElement("h3", null, "Hello From react"), 
            React.createElement("ul", null, listElements)
          )

        )
      }

    });

});
