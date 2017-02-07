import React from 'react';
import ReactDOM from 'react-dom';


export class User extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

var elementExists = document.getElementById("root");

if(elementExists) {
    ReactDOM.render(
        <User />,
        document.getElementById('root')
    );
}

