import React from 'react';

class HelloWorld extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            current : 0
        }
    }

    hello(index) {
        this.setState({current : index})
    }

    button = this.props.who.map((item, index) => {
            return (
                <button key={index} onClick={() => this.hello(index)}>{item.who}</button>
            )
        }
    )
    
    render(){
        console.log(this.button)
        return (
            <div>
                {this.button}
                <p>Hello, {this.props.who[this.state.current]}</p>
            </div>
        )
    }
}

export default HelloWorld;