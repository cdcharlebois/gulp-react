define([
  "MyWidget/widget/lib/react",
  "MyWidget/widget/lib/react-dom",
  "MyWidget/components/js/Child"
], function(React, ReactDOM, Child) {
    return React.createClass({
      render: function(){
        return (
          <div>
            <Child />
          </div>
        )
      }
    })
});
