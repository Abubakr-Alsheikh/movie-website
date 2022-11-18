const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&page=1';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI='https://api.themoviedb.org/3/search/movie?ort_by=popularity.desc&api_key=41ee980e4b5f05f6693fda00eb7c4fd4&query=';

const main = document.querySelector("#section");
const form = document.querySelector("#form");
const search = document.querySelector("#searchNav");

returnMovies(APILINK);
function returnMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
        console.log(data);
        data.results.forEach(element => {
            const div_card= document.createElement("div");
            const div_row= document.createElement("div");
            const div_column= document.createElement("div");
            const center= document.createElement("center");
            const image= document.createElement("img");
            const textTitle= document.createElement("h3");

            textTitle.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;

            div_card.setAttribute("class","card");
            div_column.setAttribute("class","column");
            div_row.setAttribute("class","row");
            image.setAttribute("class","imageMovie");
            textTitle.setAttribute("class","titleMovie");

            center.appendChild(image);
            div_card.appendChild(center);
            div_card.appendChild(textTitle);
            div_column.appendChild(div_card);
            div_row.appendChild(div_column);
            main.appendChild(div_row);
        });
    });
}

document.addEventListener("submit",(e)=>{
    e.preventDefault();
    main.innerHTML = '';

    const searchResult = search.value;
    if(searchResult){
        returnMovies(SEARCHAPI+searchResult);
        search.value="";
    }
});