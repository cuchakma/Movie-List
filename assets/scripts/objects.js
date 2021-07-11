//add movie button
const addMovieBtn = document.getElementById('add-movie-btn');

//array of movie details
const movie = [];

//Render Movie
const renderMovies = (filterValue = '') => {
    const movieList = document.getElementById('movie-list');
    if( movie.length > 0 ) {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    const filteredMovies = !filterValue ? movie : movie.filter(movie => movie.info.title.includes(filterValue));

    filteredMovies.forEach((movie)=>{
        const movieEl = document.createElement('li');
        let text = movie.info.title + ' - ';
        for (const key in movie.info) {
            if( key != 'title' ) {
                text = text + `${key}:${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
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
const searchMovieHandler = () => {
    const searchKeyword = document.getElementById('filter-title').value;
    renderMovies(searchKeyword);
}
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click',searchMovieHandler);