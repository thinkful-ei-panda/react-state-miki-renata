import React from 'react';

class RouletteGun extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            chamber : null,
            spinningTheChamber : false
        }
    }

    static defaultProps = {
        bulletInChamber : 8
    }

    handlePullTrigger(){
        this.setState({spinningTheChamber : true})
        this.timeout = setTimeout( () => {
            this.setState({chamber : Math.ceil(Math.random() * 8)})
            this.setState({spinningTheChamber : false})
            },
            2000) 
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    pulled(){
        if(this.state.spinningTheChamber){
            return <p>'spinning the chamber and pulling the trigger! ...'</p>
        }
        else if(this.state.chamber === this.props.bulletInChamber){
            return <p>BANG!!!!!!!!!!</p>
        }
        else {
            return <p>You're safe!</p>
        }
    }

    render(){
        return(
            <div>
                <button onClick={() => this.handlePullTrigger()}>Pull the Trigger</button>
                {this.pulled()}
            </div>
        )
    }

}

export default RouletteGun;