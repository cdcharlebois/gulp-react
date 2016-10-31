define([
  "MyWidget/widget/lib/react",
  "MyWidget/widget/lib/react-dom"
], function(React, ReactDOM) {
    return React.createClass({
      render: function(){
        return (
          <div>Hello From Somewhere that's not dojo</div>
        )
      }
    })
});
