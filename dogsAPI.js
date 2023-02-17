

async function get_dog_breeds(){

    fetch('https://dog.ceo/api/breeds/list/all')
    .then((response) => response.json())
    .then((data) => {
        //console.log(data.message);
        return data.message;
    });

}
sd


console.log(get_dog_breeds());