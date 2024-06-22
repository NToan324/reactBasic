import React from 'react';
import HomeWrapper from './HomeWrapper';

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.navigate('/todo');
    //     }, 2000)
    // }

    render() {
        return (
            <div>
                <h1>Hello, I'm Home</h1>
            </div>
        )
    }
}

export default HomeWrapper(Home);