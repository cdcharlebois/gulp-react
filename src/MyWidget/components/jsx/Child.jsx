define([
    "MyWidget/widget/lib/react", "MyWidget/widget/lib/react-dom"
], function(React, ReactDOM) {
    return React.createClass({
        // the state is what triggers the real-time DOM updates
        // ---
        // Here we're just initializing it with some default values
        getInitialState: function() {
            return {list: [], newPetName: '', newPetType: 'cat'}
        },

        // componentWillMount is called immediately before the component is
        // rendered to the DOM.
        // ---
        // Here, we call a microflow to fetch our data, and store that in the
        // state
        componentWillMount: function() {
            var self = this
            mx.data.action({
                params: {
                    actionname: "TestSuite.DS_ReturnList",
                    applyto: "selection",
                    guids: [this.props.person.getGuid()]
                },
                callback: function(res) {
                    console.log(res)
                    self.setState({list: res})
                },
                error: function(err) {
                    console.log(err)
                }
            }, this)
        },
        // listeners
        // ---
        // fired when a user changes the pet name in the form
        handleNameChange: function(e) {
            this.setState({newPetName: e.target.value})
        },
        // fired when a user changes the pet type in the form
        handleTypeChange: function(e) {
            this.setState({newPetType: e.target.value})
        },
        // fired when the user clicks the "add" button
        // -----
        // We use this to:
        // 1. Create a new mx object on the server
        // 2. update the state with that object, so that our UI updates
        //    immediately
        handleAdd: function() {
            var self = this
            mx.data.create({
                entity: "TestSuite.Pet",
                callback: function(obj) {
                    console.log("Object created on server");
                    obj.set('Name', self.state.newPetName)
                    obj.set('AnimalType', self.state.newPetType)
                    obj.addReference('TestSuite.Pet_Person',
                                        self.props.person.getGuid())
                    var newList = self.state.list
                    newList.push(obj)
                    self.setState({list: newList, newPetName: ''})
                },
                error: function(e) {
                    console.log("an error occured: " + e);
                }
            });
        },
        // fired when the user is finished adding new records
        // -----
        // Use this to run the commit microflow and persist the data from the
        // server to the DB
        handleSubmit: function() {
            var self = this
            ,   pets = self.state.list.map(function(p){return p.getGuid()})
            console.log(pets)
            mx.data.action({
                params: {
                    actionname : "TestSuite.IVK_SavePets",
                    applyto    : "selection",
                    guids      : pets
                },
                callback: function(res) {
                    console.log(res)
                },
                error: function(err) {
                    console.log(err)
                }
            })
        },

        render: function() {
            // debugger;
            var listOfPets = this.state.list.map(function(s) {
                return <li>
                    {s.get('Name')} -- {s.get('AnimalType')}
                </li>
            });
            return (
                <div>
                    <ul>{listOfPets}</ul>
                    <div>
                        <input type="text" value={this.state.newPetName} onChange={this.handleNameChange}/>
                        <select value={this.state.newPetType} onChange={this.handleTypeChange}>
                            <option value="cat">cat</option>
                            <option value="dog">dog</option>
                        </select>
                        <br/>
                        <input type="button" value="add pet" onClick={this.handleAdd}/>
                        <br/>
                        <input type="button" value="Finished Adding Pets" onClick={this.handleSubmit}/>
                    </div>
                </div>

            )
        }

    });

});
