const Api = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const seachApi = 'https://api.themoviedb.org/3/search/multi?query=&include_adult=true&language=en-US&page=1';

let image = "https://image.tmdb.org/t/p/w1280";
let searchbtn = document.querySelector(".search");
let navBar = document.querySelector(".flex");
let searchedMovies=document.querySelector(".searchedMovies");
let topmoviestext=document.querySelector(".topmoviestext");
let topMovies = document.querySelector(".topmovies");


  const showMovies = async () => {
  const response = await fetch(Api);
  const data = await response.json();

  // console.log(data);
  
  
  data.results.forEach(data => {
    
    let imgcontainer=document.createElement('div');
    imgcontainer.setAttribute("class","imgcontainer swiper-slide")
    let div = document.createElement("input");
    div.setAttribute("type", "image");
    div.setAttribute("class", "images");
    div.setAttribute("src", `${image}${data.poster_path}`);
    imgcontainer.innerHTML=`<p class="title">${data.original_title}</p>`;
    imgcontainer.prepend(div);
    topMovies.append(imgcontainer);
    
    // console.log(data);

    imgcontainer.addEventListener("click",()=>{
      console.log("click");
      redirect(data);
    })
  })
};
  const redirect=(data)=>{
  const poster2=`${image}${data.poster_path}`;
  const poster =`${image}${data.poster_path}`
  const title=`${data.original_title}`;
  const rating=`${data.vote_average}`;
  const releasedate=`${data.release_date}`;
  const lang=`${data.original_language}`;
  const overview=`${data.overview}`;
  const id=`${data.id}`;
    
    let arr=[title,poster,rating,releasedate,lang,overview,id,poster2];
    localStorage.setItem("Array", JSON.stringify(arr));
  console.log(poster,title);
  window.location.assign("redirect.html");
}



let click = 0;

searchbtn.addEventListener("click", () => {
  click++;
  let searchbar = document.querySelector(".searchBar");
  

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
    if(e.key === "Enter"){
    topmoviestext.innerText="Search Movies";
    searchbox = e.target.parentElement.querySelector(".searchBar");
    searchapi(searchbox);
    console.log(searchbox)
    let searchData = await searchapi(searchbox);

    document.querySelector(".topmoviestext").style.display="none";
    document.querySelectorAll(".mySwiper").forEach(slide => slide.style.display = "none");
    document.querySelectorAll(".dot").forEach(dot => dot.style.display = "none");
    document.querySelectorAll(".slider").forEach(imag=>imag.style.display="none");
    document.querySelectorAll(".buttons").forEach(btn=>btn.style.display="none");
    document.querySelectorAll(".Series").forEach(series=>series.style.display="none");
    document.querySelectorAll(".Hindi").forEach(hindi=>hindi.style.display="none");
    
    let img = document.querySelectorAll(".searchimgbox"); 
    img.forEach(img=>{img.remove()});
    
    searchData.results.forEach((searchData)=>{
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
        poster2=`${image}${searchData.poster_path}`;
        poster =`${image}${searchData.backdrop_path}`;
        title=`${searchData.original_title}`;
        rating=`${searchData.vote_average}`;
        releasedate=`${searchData.release_date}`;
        lang=`${searchData.original_language}`;
        overview=`${searchData.overview}`;
        id=`${searchData.id}`;

          let arr=[title,poster,rating,releasedate,lang,overview,id,poster2];
         localStorage.setItem("Array", JSON.stringify(arr));
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
let searchapi=async(searchbox)=>{
let response=await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchbox.value}&include_adult=true&language=en-US&page=1`, options);
  let searchData=await response.json();
  return searchData;
}

let topMoviesSwiper = new Swiper(".slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 3,
  // loop: false,
  // loopFillGroupWithBlank: false,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



showMovies();
