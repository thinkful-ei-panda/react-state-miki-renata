import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    }

    handleButtonClick = (string) => {
        this.setState({
            who: string
        })
    }

    render() {
        return(
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={(event) => this.handleButtonClick('world')}>world</button>
                <button onClick={(event) => this.handleButtonClick('friend')}>friend</button>
                <button onClick={(event) => this.handleButtonClick('react')}>react</button>
            </div>
        );
    };
};

export default HelloWorld;