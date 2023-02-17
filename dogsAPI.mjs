async function fetchMoviesJSON() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const movies = await response.json();
    return movies.message;
  }
 
  let dog_json;
//   fetchMoviesJSON().then(movies => {
//     movies; // fetched movies
//     //console.log(movies);
//     dog_json = movies;
//     console.log(Object.keys(dog_json));
//   });

dog_json = await fetchMoviesJSON();



console.log(dog_json);