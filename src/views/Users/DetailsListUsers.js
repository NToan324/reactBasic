import axios from "axios";
import React from "react";
import ListUsersWrapper from "./ListUsersWrapper";
class DetailsListUsers extends React.Component {
    state = {
        userInfo: {}
    }
    async componentDidMount() {
        let idUser = this.props.params.id;
        let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${idUser}`);
        this.setState({
            userInfo: res.data ? res.data : {}
        })
    }

    backListUsers = () => {
        this.props.navigate('/user');
    }
    render() {
        let { userInfo } = this.state;
        let isEmtyUserInfo = Object.keys(userInfo).length === 0;
        return (
            <div className="Details-list-users-container">
                {userInfo && !isEmtyUserInfo ?
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>Website</td>
                                    <td>Company</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{userInfo.name}</td>
                                    <td>{userInfo.email}</td>
                                    <td>{userInfo.phone}</td>
                                    <td>{userInfo.website}</td>
                                    <td>{userInfo.company && userInfo.company.name}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={() => this.backListUsers()}>Back</button>
                    </>
                    : <h1>Not found user</h1>}
            </div>
        )
    }
}
export default ListUsersWrapper(DetailsListUsers);