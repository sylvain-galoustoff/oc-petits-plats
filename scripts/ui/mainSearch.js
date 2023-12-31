import searchTermsProxy from "../store/searchTerms.js"

export default function mainTerms(){

    const mainSearch = document.getElementById('search-recipe')
    const resetSearch = document.getElementById('search-reset')

    mainSearch.addEventListener('input', function(e){
        const term = e.target.value

        if (term.length > 0) {
            resetSearch.classList.add('active')
        } else {
            resetSearch.classList.remove('active')
        }

        searchTermsProxy.main = term.toLowerCase()
        
    })

}