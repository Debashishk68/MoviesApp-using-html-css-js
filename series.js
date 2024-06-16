const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGRmMmM3MzViZWQ4OGYxNTgzMTdkYjRkYWExZjU2ZSIsInN1YiI6IjY2MTYwNzQxY2U1ZDgyMDE3YzhmZDljMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m_BfJTSHCPKhnplzaqlVgRgzXzgQL15dNwYn6brYYRg'
  }
};
let image2 = "https://image.tmdb.org/t/p/w1280";

let topSeries=document.querySelector(".topseries");
let leftbtn2=document.querySelector(".left2");
let righttbtn2=document.querySelector(".right2");



const getData=async()=>{
  let response= await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options2);
  let data=await response.json();
  data.results.forEach(data=>{
    let seriesContainer=document.createElement('div');
    seriesContainer.setAttribute("class","seriesContainer swiper-slide")
    let div2 = document.createElement("input");
    div2.setAttribute("type", "image");
    div2.setAttribute("class", "series");
    div2.setAttribute("src", `${image2}${data.poster_path}`);
    seriesContainer.innerHTML=`<p class="title">${data.name}</p>`;
    seriesContainer.prepend(div2);
    topSeries.append(seriesContainer);
    // console.log(data);

    seriesContainer.addEventListener("click",()=>{
    console.log("click");
    redirect2(data);
    })
  })
}

const redirect2=(data)=>{
  const poster2=`${image}${data.poster_path}`;
  const poster =`${image}${data.backdrop_path}`;
  const title=`${data.name}`;
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


let topSeriesSwiper = new Swiper(".seriesslider", {
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
getData();
// fetch
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


