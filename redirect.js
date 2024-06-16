const Array = JSON.parse(localStorage.getItem("Array"));
const title=document.querySelector(".selectedtitle");
const poster=document.querySelector(".poster");
const overview=document.querySelector(".plot");
const container2=document.querySelector(".container2");
const outof=document.querySelector(".outof");
const date=document.querySelector(".date");
const lang=document.querySelector(".lang");
title.innerHTML=Array[0];
let link=Array[1];

container2.style.backgroundImage = `url(${link})`;
poster.setAttribute("src",Array[7]);
overview.innerText=Array[5];
outof.innerText=`${Array[2]}/10`;
date.innerText=`${Array[3]}`
let id=Array[6];
lang.inerText=`${Array[4]}`;
console.log(Array)

// const Array2 = JSON.parse(localStorage.getItem("Array1"));
// title.innerHTML=Array2[0];
// poster.setAttribute("src",Array2[1]);
// overview.innerText=Array2[5];
// console.log(Array2);
let searchbtn = document.querySelector(".search");
let navBar = document.querySelector(".navbar");
let topmoviestext=document.querySelector(".topmoviestext");
let searchedMovies=document.querySelector(".searchedMovies");
const seachApi = 'https://api.themoviedb.org/3/search/multi?query=&include_adult=true&language=en-US&page=1';

let image = "https://image.tmdb.org/t/p/w1280";
let click = 0;

searchbtn.addEventListener("click", () => {
  click++;
  let searchbar = navBar.querySelector(".searchBar");
  

  searchbtn.setAttribute("src", "cross.svg");
  if (click % 2 != 0) {
    let searchbar = document.createElement("input");
    searchbar.setAttribute("class", "searchBar");
    navBar.append(searchbar);

  }

  else {
    if (searchbar && searchbar.parentNode) {
      searchbar.parentNode.removeChild(searchbar);
      searchbtn.setAttribute("src", "search.svg");
    }

  }



  let contie = document.querySelector(".searchBar");
  contie.addEventListener("keydown", async(e) => {
    if(e.key==="Enter"){
    topmoviestext.innerText="Search Movies";
    searchbox = e.target.parentElement.querySelector(".searchBar");
    searchapi(searchbox);

    let searchData2 = await searchapi(searchbox);

    document.querySelectorAll(".main").forEach(main => main.style.display = "none");
    document.querySelectorAll(".overview").forEach(overview => overview.style.display = "none");
     container2.style.backgroundImage = `none`;


    let img = document.querySelectorAll(".searchimgbox"); 
    img.forEach(img=>{img.remove()});

    searchData2.results.forEach((searchData)=>{
    let searchimgbox=document.createElement("div");
      searchimgbox.setAttribute("class","searchimgbox")
     let img = document.createElement("input");
      img.setAttribute("type", "image");
      img.setAttribute("class", "searchimg");
      img.setAttribute("src", `${image}${searchData.poster_path}`);
      searchimgbox.innerHTML=`<p class="searchboxtxt">${searchData.original_title}</p>`
      searchimgbox.prepend(img);
      searchedMovies.append(searchimgbox);
      console.log(searchData.poster_path);

      img.addEventListener("click",()=>{
        console.log(searchData);
        let poster2=`${image}${searchData.poster_path}`;
        let poster =`${image}${searchData.backdrop_path}`;
        let title=`${searchData.original_title}`;
        let rating=`${searchData.vote_average}`;
        let releasedate=`${searchData.release_date}`;
        let lang=`${searchData.original_language}`;
        let overview=`${searchData.overview}`;
        id=`${searchData.id}`;

          let arr=[title,poster,rating,releasedate,lang,overview,id,poster2];
         localStorage.setItem("Array", JSON.stringify(arr));
          // localStorage.setItem("title",`${data.original_title}` );
        // console.log(poster1,title1);
        window.location.assign("redirect.html");

      })
    
    })
    }

  })

})

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGRmMmM3MzViZWQ4OGYxNTgzMTdkYjRkYWExZjU2ZSIsInN1YiI6IjY2MTYwNzQxY2U1ZDgyMDE3YzhmZDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_BfJTSHCPKhnplzaqlVgRgzXzgQL15dNwYn6brYYRg'
  }
};
let searchapi=async(searchData2)=>{
let response=await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchData2.value}&include_adult=true&language=en-US&page=1`, options)
  let searchData=await response.json();
  return searchData;
}

let yt=document.querySelector(".yt")
const option = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGRmMmM3MzViZWQ4OGYxNTgzMTdkYjRkYWExZjU2ZSIsInN1YiI6IjY2MTYwNzQxY2U1ZDgyMDE3YzhmZDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_BfJTSHCPKhnplzaqlVgRgzXzgQL15dNwYn6brYYRg'
  }
};
const ytvideos=async(arr)=>{
  let response=await fetch(`https://api.themoviedb.org/3/movie/${arr}/videos?language=en-US%2Chi-IN`, option);
  let reqdata=await response.json();
  console.log(reqdata.results);
  yt.setAttribute("src",`https://www.youtube.com/embed/${reqdata.results[0].key}`)
  
}
ytvideos(id);