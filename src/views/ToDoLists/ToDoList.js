import React from 'react';
import './style.scss';
import AddToDo from './AddToDo';
import DeleteToDo from './DeleteToDo';
import { toast } from 'react-toastify';
import Color from '../Color/Color';

class TodoList extends React.Component {

    state = {
        todoLists: [
            { id: Math.floor(Math.random() * 1000), todo: 'Reading book' },
            { id: Math.floor(Math.random() * 1000), todo: 'Coding Propramming' },
            { id: Math.floor(Math.random() * 1000), todo: 'Play games' }
        ],
        editTodo: {}
    }

    addNewToDoList = (todoLists) => {
        this.setState({
            todoLists: this.state.todoLists.concat(todoLists)
        })
    }

    deleteToDoList = (item) => {
        let { todoLists } = this.state;
        todoLists = todoLists.filter(todo => todo.id !== item.id);
        this.setState({
            todoLists: todoLists
        })
    }

    getValueEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.todo = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })

    }

    editTodo = (item) => {
        let { todoLists, editTodo } = this.state;
        this.setState({
            editTodo: item
        })
        let isEmtyEditTodo = Object.keys(this.state.editTodo).length === 0;
        if (!isEmtyEditTodo) {
            let findKeyTodo = todoLists.findIndex(key => key.id === editTodo.id);
            todoLists[findKeyTodo].todo = editTodo.todo;
            this.setState({
                editTodo: {}
            })
            toast.success(`Edit ${item.todo} success`);
        }

    }

    render() {
        let isEmtyEditTodo = Object.keys(this.state.editTodo).length === 0;
        let { todoLists, editTodo } = this.state;
        return (
            <div className='list-todo-container'>
                <AddToDo
                    todoLists={this.addNewToDoList}
                />
                <div className='show-list'>
                    {/* Check condition to show lists */}
                    {todoLists && todoLists.length > 0 && todoLists.map((item, index) => {
                        return (
                            <div className='list-child' key={item.id}>
                                <div className='list-content'>
                                    {/* Check EditToDo */}
                                    {isEmtyEditTodo ? <p>{index + 1} - {item.todo}</p>
                                        : (item.id === editTodo.id) ?
                                            <>
                                                <span>{index + 1}</span> - <input type='text' value={editTodo.todo} onChange={(event) => this.getValueEditTodo(event)} />
                                            </>
                                            : <p>{index + 1} - {item.todo}</p>
                                    }

                                </div>
                                <div className='list-action'>
                                    <button className='edit' onClick={() => this.editTodo(item)}>
                                        {isEmtyEditTodo ? 'Edit' : item.id === editTodo.id ? 'Save' : 'Edit'}</button>
                                    <DeleteToDo
                                        deleteToDoList={this.deleteToDoList}
                                        item={item}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TodoList;