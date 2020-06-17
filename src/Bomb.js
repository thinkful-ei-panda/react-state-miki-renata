import React from 'react';

class Bomb extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count : 0
        };
    }

    componentDidMount(){
        this.interval = setInterval( () => {
                this.setState({
                    count : this.state.count + 1
                }
            )}, 1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    timer() {
        if(this.state.count >= 8){
            return <p>BOOOOOOOOOOOOOOMMMMMMM!!!!!!!!!!!</p>
        } 
        else if (this.state.count % 2 !== 0){
            return <p>tock</p>
        } 
        else if (this.state.count % 2 === 0){
            return <p>tick</p>
        }
    }

    render() {
        return(
            <div>
                {this.timer()}
            </div>
        )
    }

}

export default Bomb;