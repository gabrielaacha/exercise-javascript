const addMovieBtn = document.getElementById("add-movie-btn"); // target the add button
const searchBtm = document.getElementById("search-btn"); // target the search button

const movies = [];

const renderMovies = (filter) => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = ""; // this is clearing the list so its rendering every time there is new item / not ideal

  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // if ("info" in movie) {
    // in operator to check if the property is there
    // }

    const { info, ...otherProps } = movie;
    console.log(otherProps);
    // const { title: movieTitle } = info;
    // const { getFormattedTitle } = movie;
    let text = movie.getFormattedTitle() + " && ";
    for (const key in info) {
      if (key !== "title") {
        text = text + `${key}:${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    // movieEl.textContent = movie.info.title;
    // access the properties of that object, chaining multiple property requests
    movieList.append(movieEl);
    // append that movie to the movie list
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]: extraValue,
    },
    id: Math.random(),
    getFormattedTitle() {
      return this.info.title.toUpperCase(); // this tells js to look inside the current scope and not just everywhere
    },
  };
  movies.push(newMovie); // sends the new object to the array movies
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
