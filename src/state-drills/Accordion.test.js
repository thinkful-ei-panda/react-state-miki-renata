import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]

describe('Accordion component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Accordion sections={sections} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
          .create(<Accordion sections={sections} />)
          .toJSON();
        expect(tree).toMatchSnapshot();  
    });

    // Create wrapper instance
    // Transform wrapper into JSON object
    // Compare with snapshot

    it('renders empty given no sections', () => {
        // The wrapper allows us to find nodes within the component and to simulate events
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    
    it('renders no sections by default', () => {
        const wrapper = shallow(<Accordion sections={sections} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    // Test for clicking the button
    // Create wrapper instance
    // Traverse to button
    
    it('closes the first tab and opens any clicked tab', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        // .debug() lets you see the HTML for selected node
        console.log('>>> WRAPPER <<<');
        console.log(wrapper.debug());
        console.log('>>> FIND(BUTTON) <<<');
        console.log(wrapper.find('button').at(1).debug());
        // .find() to traverse to a node specified by selector
        // .at(index) lets you select a specific selector (of many similar ones)
        // .simulate('event') to simulate some event
        wrapper.find('button').at(1).simulate('click');
        // Expected output as a result of event
        expect(toJson(wrapper)).toMatchSnapshot();
    });





})