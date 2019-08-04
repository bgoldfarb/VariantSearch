import React, { Component } from 'react'
import '../styles/table.css'

export default function CreateTable(props){
   const geneInfo = [{ gene: '', 
   nucChange: '', 
   proChange: '', 
   alias: '',
   region: '',
   repClass: '',
   lastEval: '',
   lastUpdated: '',
   moreInfo: ''
 }]

   const renderTableHeader = () => {
    let header = ['Gene', 'Nucleotide Change', 'Protein Change',
     'Alias', 'Region', 'Reported Classification', 'Last Evaluated',
      'Last Updated', 'More Info']
       return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
    })
 }

 const renderTableData = () => {
    return geneInfo.map((geneInfo, index) => {
       return (
          <tr key={index}>
             <td>{ props.gene}</td>
             <td>{ props.nucChange}</td>
             <td>{ props.proChange}</td>
             <td>{ props.alias}</td>
             <td>{ props.region}</td>
             <td>{ props.repClass}</td>
             <td>{ props.lastEval}</td>
             <td>{ props.lastUpdated}</td>
             <td>{ props.moreInfo}</td>
          </tr>
       )
    })
 }
      return (
         <div className="table-variants">
            <table id='variants'>
               <tbody>
                  <tr>{renderTableHeader()}</tr>
                  {renderTableData()}
               </tbody>
            </table>
         </div>
      )
}

