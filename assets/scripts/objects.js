//add movie button
const addMovieBtn = document.getElementById('add-movie-btn');

//array of movie details
const movie = [];

//Render Movie
const renderMovies = () => {
    const movieList = document.getElementById('movie-list');
    if( movie.length > 0 ) {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    movie.forEach((movie)=>{
        const movieEl = document.createElement('li');
        movieEl.textContent = movie.info.title;
        movieList.append(movieEl);
    });
};

//search button
const searchBtn = document.getElementById('search-btn');

//add movie event listener
const addMovieHandler = () => {
    const title            = document.getElementById('title').value;
    const extraName        = document.getElementById('extra-name').value;
    const extraValue       = document.getElementById('extra-value').value;

    if( title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovie = {
        info : {
            title,
            [extraName]:extraValue
        },
        id:Math.random(),
    };
    movie.push(newMovie);
    renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);