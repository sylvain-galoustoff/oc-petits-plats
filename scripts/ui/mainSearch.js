import searchTermsProxy from "../store/searchTerms.js"

export default function mainTerms(){

    const mainSearch = document.getElementById('search-recipe')
    const resetSearch = document.getElementById('search-reset')

    mainSearch.addEventListener('input', function(e){
        const term = e.target.value

        if (term.length > 2) {
            resetSearch.classList.add('active')
            searchTermsProxy.main = term
        } else {
            resetSearch.classList.remove('active')
        }
        
    })

}