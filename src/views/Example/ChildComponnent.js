import React from 'react';
class ChildComponent extends React.Component {
    state = {
        showInfo: false
    }

    ShowInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })

    }

    handleDelete = (item) => {
        this.props.deletePerson(item);
    }
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let { personal } = this.props;
        let { showInfo } = this.state;
        return (
            <>
                {/* Use 3 operator*/}
                {!showInfo ?
                    <button onClick={() => this.ShowInfo()}>Show</button> :
                    <>
                        <button onClick={() => this.ShowInfo()}>Hide</button>
                        <div className='personal-list'>
                            {
                                personal.map((item, index) => {
                                    if (item.code !== '') {
                                        return (
                                            <ol key={item.code}>
                                                <li>{item.name}</li>
                                                <li>{item.age}</li>
                                                <li>{item.salary}</li>
                                                <li>{item.code}</li>
                                                <span onClick={() => this.handleDelete(item)}>Delete</span>
                                            </ol>
                                        )
                                    } else return (
                                        <div key={'null'}>
                                            Not found
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildComponent;
// find Js export default