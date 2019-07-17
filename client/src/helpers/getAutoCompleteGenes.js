

export const getAutoCompleteGenes = (url, gene, updateParent) => {
    fetch(`${url+gene}/suggest`)
        .then(res => res.json())
        .then(res => updateParent(res))
        .catch(err => console.log(err))
}