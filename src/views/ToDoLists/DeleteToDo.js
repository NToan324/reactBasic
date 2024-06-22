import React from 'react';
import {toast} from 'react-toastify';

class DeleteToDo extends React.Component {

    deleteToDoList = () => {
        let {item} = this.props;
        this.props.deleteToDoList(item);
        toast.success(`Delete ${item.todo} success`);
    }
    
    render() {
        return (
            <button className='delete' onClick={() => this.deleteToDoList()}>Delete</button>
        )
    }
}

export default DeleteToDo;