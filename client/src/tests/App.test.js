import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow} from 'enzyme'
import {expect} from 'chai'
import App from '../components/App';
import AutoComplete from '../components/AutoComplete';
import CreateTable from '../components/CreateTable'
const Adapter = require('enzyme-adapter-react-16')


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a app logo', () => {
  const app = shallow(<App />);
  expect(app.find('.App-logo')).to.have.lengthOf(1);
});

it('renders both children components', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(AutoComplete)).to.have.lengthOf(1);
  expect(wrapper.find(CreateTable)).to.have.lengthOf(1);
});
