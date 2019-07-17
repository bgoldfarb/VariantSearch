
export const getVariantTraits = (url, gene, updateParent) => {
    fetch(url+gene)
      .then(res => res.json())
      .then(res => updateParent(
        res["Gene"], 
        res["Nucleotide Change"], 
        res["Protein Change"], 
        res["Alias"],
        res["Region"],
        res["Reported Classification"],
        res["Last Evaludated"],
        res["Last Updated"],
        res["URL"]))
    .catch(error => alert("Variant Not Found"));
}