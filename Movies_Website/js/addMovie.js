const addMovieButton = document.getElementById("addMovieButton");
const addMovieButton_container = document.getElementById("addMovieButton_container")

addMovieButton.addEventListener('click', function() {
    addMovieButton_container.innerHTML = `
        <form id="addMovieForm" method="POST" action="/movies/create-movie">
            <input type="text" placeholder="Enter title" name="title" />       
                    <input type="text" placeholder="Enter description" name="description" />       
                    <input type="text" placeholder="Enter genre" name="genre" />
                    <input type="text" placeholder="Enter image URL" name="imgURL" />     
            <button>Add</button>
        </form>
    `
})