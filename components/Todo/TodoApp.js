import React, {Component} from 'react';


class TodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentWillMount() {

        $.ajax({
            url: '/',
            method: 'post',
            success: function(data) {
                console.log(data);
                this.setState({ products: data});
            }.bind(this),
                error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }


    render() {

        let commentNodes = this.state.products.map(function (comment){
            return (
                <div>
                    ----------------
                    <h1>{comment.title}</h1>
                </div>
            );
        });
        return (
            <div className="App">
                {commentNodes}
            </div>
        );
    }
}

export default TodoApp;


