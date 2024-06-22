import React from 'react';
import axios from 'axios';
import './ListUsers.scss';
import { toast } from 'react-toastify';
import ListUsersWrapper from './ListUsersWrapper';
class ListUsers extends React.Component {

    state = {
        users: []
    }

    async componentDidMount() {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users')
        this.setState({
            users: res.data.length > 0 ? res.data : []
        })
    }

    deleteUsers = (item) => {
        let { users } = this.state;
        users = users.filter(users => users.id !== item.id);
        this.setState({
            users: users
        })
        toast.success(`Delete ${item.name} success`);
    }

    viewUsers = (id) => {
        this.props.navigate(`/user/${id}`);
    }

    render() {
        let { users } = this.state;
        return (
            <div className='list-users-container'>
                <h1>List Users</h1>
                <table>
                    <thead>
                        <tr>
                            <td>Number</td>
                            <td>Name</td>
                            <td>Details</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.length > 0 && users.map((item, index) => {
                            return (
                                <tr key={item.id} >
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td className='btn-action'>
                                        <button onClick={() => this.viewUsers(item.id)}>View</button>
                                        <button onClick={() => this.deleteUsers(item)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default ListUsersWrapper(ListUsers);