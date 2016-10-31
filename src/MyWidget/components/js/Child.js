define([
  "MyWidget/widget/lib/react",
  "MyWidget/widget/lib/react-dom"
], function(React, ReactDOM) {
    return React.createClass({
      constructor: function(){
        this.setState({})
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

      listElements: function(){
        return this.state.list.map(function(s) {
          return React.createElement("li", null, 
            s.jsonData.attributes.Name.value
          )
        })
      },

      render: function(){
        return (
          React.createElement("div", null, 
            React.createElement("h3", null, "Hello From react"), 
            React.createElement("ul", null, this.listElements())
          )

        )
      }

    });

});
