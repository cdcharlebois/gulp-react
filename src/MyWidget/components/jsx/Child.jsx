define([
    "MyWidget/widget/lib/react", "MyWidget/widget/lib/react-dom"
], function(React, ReactDOM) {
    return React.createClass({
        getInitialState: function() {
            return {list: [], newPetName: '', newPetType: ''}
        },

        componentDidMount: function() {
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
        //listeners
        handleNameChange: function(e) {
            this.setState({newPetName: e.target.value})
        },
        handleTypeChange: function(e) {
            this.setState({newPetType: e.target.value})
        },
        handleAdd: function() {
            var self = this
            mx.data.create({
                entity: "TestSuite.Pet",
                callback: function(obj) {
                    console.log("Object created on server");
                    obj.set('Name', self.state.newPetName)
                    obj.set('AnimalType', self.state.newPetType)
                    obj.addReference('TestSuite.Pet_Person', self.props.person.getGuid())
                    var newList = self.state.list
                    newList.push(obj)
                    self.setState({list: newList, newPetName: ''})
                },
                error: function(e) {
                    console.log("an error occured: " + e);
                }
            });
        },
        handleSubmit: function() {
            var self = this
            ,   pets = self.state.list.map(function(pet) {
                        return pet.getGuid()
                      })
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
                        <input type="button" value="add pet" onClick={this.handleAdd}/>
                        <input type="button" value="Finished Adding Pets" onClick={this.handleSubmit}/>
                    </div>
                </div>

            )
        }

    });

});
