import React from 'react';
import ChildComponent from './ChildComponnent';
// import SecondChildComponent from './SecondChildComponent';
import AddChildComponent from './AddChildComponent';

class MyComponent extends React.Component {
    state = {
        personal: []
    }

    addPersonal = (newPersonal) => {
        if(this.state.personal.length === 0) {
            this.setState({
                personal: [newPersonal]
            });
        }
        this.setState({
            personal: this.state.personal.concat(newPersonal)
        });
        console.log('mycomponent test', this.state.personal);
    }

    deletePerson = (item) => {
        let personal = this.state.personal;
        personal = personal.filter(per => per.code !== item.code)
        console.log(personal, item.code);
        this.setState({
            personal: personal
        });
    }
    render() {
        return (
            <>
                <AddChildComponent
                    addPersonal={this.addPersonal}
                />
                <ChildComponent
                    personal={this.state.personal}
                    deletePerson={this.deletePerson}
                />
            </>
        )
    }
}

export default MyComponent;
// find Js export default