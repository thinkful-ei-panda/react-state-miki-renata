import React from 'react';

class RouletteGun extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false,
        };
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    handleTriggerPull() {
       this.setState({spinningTheChamber: true});
       this.timeout = setTimeout(() => {
           const randomChamber = Math.ceil(Math.random() * 8);
           this.setState({
               chamber: randomChamber,
               spinningTheChamber: false
           });
       }, 2000);
    }

    displayText() {
        if (this.state.spinningTheChamber) {
            return "Spinning the chamber and pulling the trigger...";
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return "BANG!!!";
        } else {
            return "You're safe!!!"
        }
    }
    

    render() {
        return (
            <div>
                <p>{this.displayText()}</p>
                <button onClick={() => this.handleTriggerPull()}>Pull the trigger!</button>
            </div>
        )
    }

    static defaultProps = {
        bulletInChamber: 8
    }
}

export default RouletteGun;