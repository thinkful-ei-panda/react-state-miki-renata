import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: []
    };

    constructor(props) {
        super(props)
        this.state = {
            currentSection: ""
        };
    };

    handleButtonClick(i) {
        this.setState({
            currentSection: this.props.sections[i].content
        });
    };


    renderContent(i) {
        return (
            <p key={i}>
                {this.state.currentSection}
            </p>
        );
    };

    renderButtons() {
        return this.props.sections.map((section, i) => (
            <li>
                 <button key={i} onClick={() => this.handleButtonClick(i)}>
                {section.title}
                </button>
                {this.state.currentSection === section.content? this.renderContent(i) : null}
            </li>
        ));
    };

    render() {
      return (
            <ul>
                {this.renderButtons()}
            </ul>
        );
    };
};

export default Accordion;