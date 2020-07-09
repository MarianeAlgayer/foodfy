const inputIng = document.querySelector('#switch-ingredients')
const recipeIng = document.querySelector('.recipe-ingredients')

const inputPrep = document.querySelector('#switch-preparation')
const recipePrep = document.querySelector('.recipe-preparation')

const inputTips = document.querySelector('#switch-tips')
const recipeTips = document.querySelector('.recipe-tips')

inputIng.addEventListener('click', function() {
    
    if (!inputIng.checked) {
        recipeIng.querySelector('ul').style.display = 'none'
    } else {
        recipeIng.querySelector('ul').style.display = 'block'
    }
})

inputPrep.addEventListener('click', function() {

    if(!inputPrep.checked) {
        recipePrep.querySelector('ol').style.display = 'none'
    } else {
        recipePrep.querySelector('ol').style.display = 'block'
    }
})

inputTips.addEventListener('click', function() {

    if(!inputTips.checked) {
        recipeTips.querySelector('p').style.display = 'none'
    } else {
        recipeTips.querySelector('p').style.display = 'block'
    }
})