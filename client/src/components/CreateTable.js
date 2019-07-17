import React, { Component } from 'react'
import '../styles/table.css'

class CreateTable extends Component {
   constructor(props) {
      super(props) 
      this.state = {
         geneInfo: [
            { gene: '', 
              nucChange: '', 
              proChange: '', 
              alias: '',
              region: '',
              repClass: '',
              lastEval: '',
              lastUpdated: '',
              moreInfo: ''
            }
         ]
      }
   }

   renderTableHeader = () => {
    let header = ['Gene', 'Nucleotide Change', 'Protein Change',
     'Alias', 'Region', 'Reported Classification', 'Last Evaluated',
      'Last Updated', 'More Info']
       return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 renderTableData = () => {
    return this.state.geneInfo.map((geneInfo, index) => {
       return (
          <tr key={index}>
             <td>{this.props.gene}</td>
             <td>{this.props.nucChange}</td>
             <td>{this.props.proChange}</td>
             <td>{this.props.alias}</td>
             <td>{this.props.region}</td>
             <td>{this.props.repClass}</td>
             <td>{this.props.lastEval}</td>
             <td>{this.props.lastUpdated}</td>
             <td>{this.props.moreInfo}</td>
          </tr>
       )
    })
 }

 render() {
      return (
         <div className="table-variants">
            <table id='variants'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default CreateTable