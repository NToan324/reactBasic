import React from 'react';
// Use function components
const SecondChildComponent = (props) => {
    let {personal} = props;
    return (
        <div className='personal-list'>
            {
                personal.map((item, index) => {
                    return (
                        <ol key={item.id}>
                            <h3>This is a part of Second Child</h3>
                            <h3>{item.id}</h3>
                            <li>{item.street}</li>
                            <li>{item.city}</li>
                            <li>{item.state}</li>
                            <li>{item.zip}</li>
                        </ol>
                    )
                })
            }
            {console.log(SecondChildComponent)}
        </div>
    )
}

export default SecondChildComponent;