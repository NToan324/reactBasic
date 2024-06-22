import React from 'react';
import {toast} from 'react-toastify';

class AddToDo extends React.Component {

    state = {
        todo: ''
    }


    handleInput = (event) => {
        this.setState({
            todo: event.target.value
        })
    }

    addToDoList = () => {
        if(!this.state.todo) {
            toast.error('Please enter your todo');
            return;
        }
        let newTodo = {
            id: Math.floor(Math.random() * 1000),
            todo: this.state.todo
        }
        this.setState({
            todo: ''
        })
        this.props.todoLists(newTodo);
        toast.success('Add new todo success');
    }

    render() {
        let {todo} = this.state;
        return (
            <div className='add-list'>
                <input type='text' className='inputText' value = {todo} onChange={(event) => this.handleInput(event)}/>
                <button type='button' className='add' onClick={() => this.addToDoList()}>Add</button>
            </div>
        )
    }
}

export default AddToDo;