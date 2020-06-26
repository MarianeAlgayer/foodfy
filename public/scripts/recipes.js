const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const recipes = document.querySelectorAll('.recipe')

for (let recipe of recipes) {
    recipe.addEventListener('click', function(){

        const recipeImg = recipe.querySelector('.recipe .recipe-image-container img').src
        const recipeName = recipe.querySelector('.recipe .recipe-info .recipe-name').innerHTML
        const chef = recipe.querySelector('.recipe .recipe-info .chef').innerHTML

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = recipeImg
        modalOverlay.querySelector('h1').innerHTML = recipeName
        modalOverlay.querySelector('p').innerHTML = chef 

    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ''
    modalOverlay.querySelector('h1').innerHTML = ''
    modalOverlay.querySelector('p').innerHTML = ''
})
