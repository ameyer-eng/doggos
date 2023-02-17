/* async function fetchMoviesJSON() {
    const response = await fetch('https://dog.ceo/api/breed/hound/images');
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



console.log(dog_json.slice(1,10)); */

//get the images from the dog api
async function fetchimagesJSON(url_2_fetch) {
  const response = await fetch(url_2_fetch);
  const images = await response.json();
  return images.message;
}


let breed = 'affenpinscher';

fetch_url_str = `https://dog.ceo/api/breed/${breed}/images`;
fetchimagesJSON(fetch_url_str).then(images => {
    images; // fetched images
    //console.log(images)
    dog_json = images;
    image_list = dog_json.slice(1,10);
    console.log(image_list);

});
