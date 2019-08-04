import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme'
import {expect} from 'chai'
import App from '../components/App';
import AutoComplete from '../components/AutoComplete';
import CreateTable from '../components/CreateTable'
const Adapter = require('enzyme-adapter-react-16')


Enzyme.configure({ adapter: new Adapter() })
let wrapper;
beforeEach(() => {
wrapper = shallow(<App />);
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a app logo', () => {
  expect(wrapper.find('.App-logo')).to.have.lengthOf(1);
});

it('renders both children components', () => {
  expect(wrapper.find(AutoComplete)).to.have.lengthOf(1);
  expect(wrapper.find(CreateTable)).to.have.lengthOf(1);
});

it('renders one class component with name App-Component', () => {
  expect(wrapper.find('div.App-Component')).to.have.length(1)
})

it('renders text properly', () => {
  expect(wrapper.find('h1.App-title').text()).to.be.equal("Variant Search")
})

it('returns all the children nodes', () => {
    expect((wrapper.find('div.App').children())).to.have.lengthOf(4)
})