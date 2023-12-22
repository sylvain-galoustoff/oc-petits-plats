import filteredRecipes from "../services/filteredRecipes.js"
import searchTerms from "../store/searchTerms.js"


export default function mainTerms(){

    const mainSearch = document.getElementById('search-recipe')
    const resetSearch = document.getElementById('search-reset')

    mainSearch.addEventListener('input', function(e){
        const term = e.target.value

        if (term.length > 2) {
            resetSearch.classList.add('active')
            searchTerms.main = term
            filteredRecipes()
        } else {
            resetSearch.classList.remove('active')
            searchTerms.main = ''
        }
        
    })

}