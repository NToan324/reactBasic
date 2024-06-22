import Reacct from 'react';
class AddChildComponent extends Reacct.Component {

    state = {
        name: '',
        age: '',
        salary: '',
    }
    changeYourName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    changeYourAge = (event) => {
        this.setState({
            age: event.target.value,
        })
    }

    submitInfo = (event) => {
        event.preventDefault();
        if(this.state.name === '' || this.state.age === '' || this.state.salary === '') {
            alert('Please fill all the fields');
            return;
        }
        let newPersonal = {
            name: this.state.name,
            age: this.state.age,
            salary: this.state.salary,
            code: Math.floor(Math.random() * 1000)
        }
        this.setState({
            name: '',
            age: '',
            salary: ''
        })
        this.props.addPersonal(newPersonal);
    }


    changeYourSalary = (event) => {
        this.setState({
            salary: event.target.value
        }) 
    }
    render() {
        return (
            <>
                <form>
                    <p>Enter your name</p>
                    <input type="text" value={this.state.name} onChange={this.changeYourName} />
                    <p>Enter your age</p>
                    <input type="text" value={this.state.age} onChange={this.changeYourAge} />
                    <p>Enter your salary</p>
                    <input type="text" value={this.state.salary} onChange={this.changeYourSalary} />
                    <button onClick={this.submitInfo}>Submit</button>
                </form>
            </>
        )
    }
}

export default AddChildComponent;