import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow,mount} from 'enzyme'
import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import AutoComplete from '../components/AutoComplete';
import { spy } from 'sinon'

const Adapter = require('enzyme-adapter-react-16')
chai.use(sinonChai)
Enzyme.configure({ adapter: new Adapter() })

it('renders the AutoComplete component', () => {
  const wrapper = shallow(<AutoComplete />);
  expect(wrapper).to.exist
});

it('renders the AutoComplete div', () => {
    const wrapper = shallow(<AutoComplete />);
    expect(wrapper.find('AutoComplete')).to.exist
  });


it('should call the updateTable function twice if button is clicked twice', () => {
    const wrapper = shallow(<AutoComplete/>);
    let mySpy = spy(wrapper.instance(), 'updateTable');
    wrapper.update()
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    expect(mySpy).to.have.been.calledTwice
});

  it('should only list suggestion when given suggestions', () => {
    const wrapper = shallow(<AutoComplete/>);
    wrapper.setState({suggestions: ["APOE4"]})
    expect(wrapper.find('li').hasClass('suggestion')).to.be.true
});

it('should call the renderSuggestion once', () => {
  const wrapper = shallow(<AutoComplete />);
  let mySpy = spy(wrapper.instance(), 'renderSuggestion')
  wrapper.setState({
    text: 'AP'
  })
  expect(mySpy).to.have.been.calledOnce
  mySpy.restore()
})


