const recipes = document.querySelectorAll('.recipe')

for (let pos in recipes) {
    recipes[pos].addEventListener('click', function(){
        
        window.location.href = `/recipes/${pos}`  
    })
}
