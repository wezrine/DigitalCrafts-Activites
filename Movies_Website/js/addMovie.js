const addMovieButton = document.getElementById("addMovieButton");
const addMovieButton_container = document.getElementById("addMovieButton_container")

addMovieButton.addEventListener('click', function() {
    addMovieButton_container.innerHTML = `
        <form id="addMovieForm" method="POST" action="/movies/create-movie">
            <input type="text" placeholder="Enter title" name="title" />       
                    <input type="text" placeholder="Enter description" name="description" />       
                    <select name="genre">
                        <option selected disabled>Genre</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="animation">Animation</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="drama">Drama</option>
                        <option value="fantasy">fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="kids">Kids</option>
                        <option value="mystery">Mystery</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="superhero">Superhero</option>
                        <option value="thriller">Thriller</option>
                    </select>
                    <input type="text" placeholder="Enter image URL" name="imgURL" />     
            <button>Add</button>
        </form>
    `
})

const genreSelectDropdown = document.getElementById("genreSelectDropdown")

genreSelectDropdown.addEventListener('change', function() {
    window.location = `/movies/genre/${this.value}`
})


// onchange="this.form.submit()"
