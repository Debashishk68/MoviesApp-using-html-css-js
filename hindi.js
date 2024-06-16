const options3 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGRmMmM3MzViZWQ4OGYxNTgzMTdkYjRkYWExZjU2ZSIsInN1YiI6IjY2MTYwNzQxY2U1ZDgyMDE3YzhmZDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_BfJTSHCPKhnplzaqlVgRgzXzgQL15dNwYn6brYYRg'
  }
};

let image3 = "https://image.tmdb.org/t/p/w1280";

let tophindiSeries=document.querySelector(".tophindiseries");
let leftbtn3=document.querySelector(".left3");
let righttbtn3=document.querySelector(".right3");

const gethindiData=async()=>{
  let response= await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-IN&page=1&primary_release_year=2024&sort_by=popularity.desc&with_origin_country=IN', options3);
  let data=await response.json();
  console.log(data);
  data.results.forEach(data=>{
    let hindiContainer=document.createElement('div');
    hindiContainer.setAttribute("class","hindiContainer swiper-slide")
    let div3 = document.createElement("input");
    div3.setAttribute("type", "image");
    div3.setAttribute("class", "hindi");
    div3.setAttribute("src", `${image3}${data.poster_path}`);
    hindiContainer.innerHTML=`<p class="title">${data.title}</p>`;
    hindiContainer.prepend(div3);
    tophindiSeries.append(hindiContainer);
    // console.log(data);

    hindiContainer.addEventListener("click",()=>{
    console.log("click");
    redirect3(data);
    })
  })
}

const redirect3=(data)=>{
  const poster2=`${image}${data.poster_path}`;
  const poster =`${image}${data.backdrop_path}`
  const title=`${data.title}`;
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
let topHindiSwiper = new Swiper(".hindislider", {
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

gethindiData()