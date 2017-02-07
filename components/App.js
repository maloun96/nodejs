import React from 'react';
import ReactDOM from 'react-dom';


export class App extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>App List for</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}



var elementExists = document.getElementById("home");

if(elementExists) {
    ReactDOM.render(
        <App />,
        document.getElementById('home')
    );
}

