import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme'
import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import { spy } from 'sinon'
import CreateTable from '../components/CreateTable';
import { wrap } from 'module';

const Adapter = require('enzyme-adapter-react-16')
chai.use(sinonChai)
Enzyme.configure({ adapter: new Adapter() })
let wrapper;

const mockedData = {
  gene : 'stuff',
  nucChange: 'nucChange'
}

beforeEach(() => {
  wrapper = shallow(<CreateTable {...mockedData}/>);
})


it('renders the CreateTable component', () => {
  expect(wrapper).to.exist
});

it('should render all children nodes correctly on start', () => {
  expect(wrapper.find('div.table-variants').children()).to.have.lengthOf(1)
})

it('should render the table header correctly with Capitalization', () => {
  expect(wrapper.find('th').at(0).text()).to.equal('GENE')
  expect(wrapper.find('th').children()).to.have.lengthOf(9)
})

it('should render the correct table data when passed in as props', () => {
  expect(wrapper.find('td').at(0).text()).to.equal('stuff')
  expect(wrapper.find('td').at(1).text()).to.equal('nucChange')
})
