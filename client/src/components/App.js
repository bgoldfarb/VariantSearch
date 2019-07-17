import React, { Component } from 'react';
import logo from '../dna.png';
import '../styles/App.css';
import CreateTable from './CreateTable';
import AutoComplete from './AutoComplete'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gene : '',
      nucChange: '', 
      proChange: '', 
      alias: '',
      region: '',
      repClass: '',
      lastEval: '',
      lastUpdated: '',
      moreInfo: ''
    }
  }

  //Need to pass this in to AutoComplete in order re-render child component, CreateTable
  childHandler = (gene, nucChange, proChange, alias, 
    region, repClass, lastEval, lastUpdated, moreInfo) => {
    this.setState({
      gene,
      nucChange, 
      proChange, 
      alias,
      region,
      repClass,
      lastEval,
      lastUpdated,
      moreInfo
    })
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Variant Search</h1>
          <div className="App-Component">
            <AutoComplete updateParent={this.childHandler}/>
          </div>
          <CreateTable {...this.state} />
      </div>
    );
  }
}

export default App;
