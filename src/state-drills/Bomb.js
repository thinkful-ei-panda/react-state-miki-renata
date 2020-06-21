import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            string: ""
        }
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.timer(), 1000);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    timer() {
        const countUp = this.state.count + 1;
        this.setState({
            count: countUp
        })

        if (this.state.count > 8) {
            this.setState({count:0});
        } else if (this.state.count === 8) {
            this.setState({string: "BOOM!!!!!"});
        } else if (this.state.count%2) {
            this.setState({string: "tick"});
        } else {
            this.setState({string: "tock"});
        }
    }

    render () {
        return (
            <div>
                <p>{this.state.string}</p>
            </div>
        )
    } 
}

export default Bomb;