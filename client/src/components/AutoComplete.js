import React, {Component} from 'react'
import '../styles/autocomplete.css'
import { getVariantTraits } from '../helpers/getVariantTraits'
import { getAutoCompleteGenes } from '../helpers/getAutoCompleteGenes'

export default class AutoComplete extends Component {
    constructor(props){
        super(props)
        this.state = {
            suggestions: [],
            text: ''
        }
        this.renderSuggestion = this.renderSuggestion.bind(this)
    }

 
    onTextChanged = (e) => {
        let value = e.target.value.toUpperCase();
        let suggestions = []
        this.setState({
            suggestions,
            text : value
        },() => {
            this.fetchDataForAutoComplete()
        })
    }

    suggestionSelected = (value) => {
        this.setState(() =>({
            text: value,
            suggestions: []
        }))
    }

    updateParent = (res) => {
        this.setState({
            suggestions: res
        })
    }

    fetchDataForAutoComplete = () => {
        if(this.state.text.length >= 2){
            getAutoCompleteGenes('/api/v1/', this.state.text, this.updateParent)
        }
    }

    renderSuggestion = () => {
        const { suggestions } = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return(
            <ul>
                {suggestions.map((item,index) => <li className="suggestion" key={index} onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    updateTable = (event, updateParent) => {
        getVariantTraits('/api/v1/variants/', this.state.text, updateParent)
        this.setState({
            suggestions: []
        })
    }


    render(){
        return (
            <div>
                <div className="AutoComplete">
                    <input value = {this.state.text.toUpperCase()}  onChange={this.onTextChanged} type = "text" />
                    {this.renderSuggestion()}
                </div>
                <button onClick={(e) => this.updateTable(e, this.props.updateParent)}>Submit</button>
            </div>
        )
    }
}