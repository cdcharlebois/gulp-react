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
          return <li>
            {s.jsonData.attributes.Name.value}
          </li>
        });
        return (
          <div>
            <h3>Hello From react</h3>
            <ul>{listElements}</ul>
          </div>

        )
      }

    });

});
