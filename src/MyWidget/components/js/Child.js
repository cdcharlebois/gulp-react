define([
    "MyWidget/widget/lib/react", "MyWidget/widget/lib/react-dom"
], function(React, ReactDOM) {
    return React.createClass({
        // the state is what triggers the real-time DOM updates
        // ---
        // Define your state
        getInitialState: function() {
            return {
              value: ''
            }
        },

        // componentWillMount is called immediately before the component is
        // rendered to the DOM.
        // ---
        // Use this to call a microflow that returns the objects that will be
        // displayed in the component
        componentWillMount: function() {
          // mx.data.action({...})
        },

        // listeners
        // ---
        // create your own handlers to handle interactions that your users
        // will make on your component
        handleValueChange: function(e) {
          this.setState({'value': e.target.value})
        },

        render: function() {
            var list = ['1', '2', '3'].map(function(i){  // this is a dynamic element
              return React.createElement("li", null, i)
            });
            return (
                React.createElement("div", null, 
                    React.createElement("div", null, 
                        React.createElement("input", {type: "text", value: this.state.value, onChange: this.handleValueChange})
                    ), 
                    React.createElement("p", null, 
                      "You entered \"", 
                      this.state.value, 
                      "\""
                    ), 
                    React.createElement("div", null, 
                      React.createElement("ul", null, 
                        list
                      )
                    )
                )

            )
        }

    });

});
