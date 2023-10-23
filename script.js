let jsondata = [];
let json = fetch('https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates.json');
json.then((response) => { 
  return response.json()
}).then((response) => {
   jsondata = response;
})
function getCountryByState(statename) {
  for (let i = 0; i<jsondata.length; i++) {
    const state = jsondata[i].states.find(s => s.name.toLowerCase().includes(statename.toLowerCase()));
    if (state) {
      return jsondata[i].name.toLowerCase();
    }
  }
  return null;
}


const mobile_nav = document.querySelector(".mobile-navbar-btn");

const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
document.getElementsByClassName("navbar-link").onclick = function() {
  document.getElementsByClassName("header").style.display="none";
}


let homebutton = document.getElementById("homebutton");
let jobbutton = document.getElementById("jobbutton");
let partnerbutton = document.getElementById("partnerbutton");
let joinbutton = document.getElementById("joinbutton");


const homefunction= ()=>{
  location.href=("#")
  nav_header.classList.toggle("active");
}
const jobfunction= ()=>{
  location.href=("#third-div")
  nav_header.classList.toggle("active");
}

const jobfunction1=()=>{
  location.href=('#third-div');
}
const partnerfunction= ()=>{
  location.href=("#our-partners")
  nav_header.classList.toggle("active");
}
const joinfunction= ()=>{
  location.href=("#")
  nav_header.classList.toggle("active");
}
// const textValue = document.getElementById("google-div").innerHTML;

// var button1= getElementById('search-btn1')
// button1.addEventListener("click", jobfunction1());



search1.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    event.preventDefault();

    document.getElementById("search-btn1").click();
  }
});
// var selectedValue;






var array = [
  {
    name: 'google',
    select: 'website developer, all',
    country: 'india',
    title: 'frontend development',
    skills: 'html,css, javascript, react js',
    image: "images/logo-google.svg",
    type:'fulltime, full-time'
  },
  {
    name: 'twitter',
    select: 'website developer, all',
    country: 'usa , united states of america' ,
    title: 'backend development',
    skills: 'dsa, php, sql, java',
    image: "images/logo-twitter.svg",
    type:'fulltime, full-time'
  },
  {
    name: 'facebook',
    select: 'application developer, all',
    country: 'india',
    title: 'application development',
    skills: 'c++, backend ,computing, iot',
    image: "images/logo-facebook.svg",
    type:'fulltime, full-time'
  },
  {
    name: 'apple',
    
    country: 'india',
    title: 'frontend development',
    select: 'website developer, all',
    skills: 'html,css, javascript, react js',
    image: "images/logo-apple.svg",
    type:'fulltime, full-time'
  },
  {
    name: 'microsoft',
    select: 'designer, all',
    country: 'australia',
    title: 'ui/ux designer',
    skills: 'prototyping,development, information architecture',
    image: "images/logo-windows (1).svg",
    type:'halftime, half-time'
  },
  {
    name: 'amazon',
    select: 'website developer, all',
    country: 'india',
    title: 'backend development',
    skills: 'dsa , php , sql , java',
    image:"images/logo-amazon.svg",
    type:'fulltime, full-time'
  },
]

const productContainerEl = document.getElementById("fourth-div");
const givejobs = (jobData) => {
  productContainerEl.innerHTML="";
  jobData.forEach(jobData=>{
    productContainerEl.innerHTML += generatejobs(jobData);
  });
};
const generatejobs = (jobData) =>{
  return ` <div class="first-fourth-div" id="${jobData.name}-div">
  <div class="random2">
  <div class="first-fourth-div-logo">
  <img src="${jobData.image}" alt="Google Logo" width="100%">
  </div>
  <span class="first-fourth-div-title">${jobData.title}</span>
  </div>
  <div class="below-random-2">
  <p>
  <span class="skills">Skills</span>
  -${jobData.skills}<br>
  
  <span class="type">
  Type
  </span>
  -${jobData.type}<br>
  <span class="location">Location </span>
  -${jobData.country}
  </p>
  </div>
  </div>`;
};

let jobData = [...array];
givejobs(jobData);
var newArray;

function getSelectedValue(){

  let searchInput1 = document.getElementById("search1");
  let searchInput2 = document.getElementById("search2");
  searchInput1.value = null;
  searchInput2.value = null;

//   var value1, value2;
//   var countrynamefromstate1, countrynamefromstate2;
//   searchInput1.addEventListener("input", e =>{
//     value1 = e.target.value.toLowerCase()
//     console.log(value1);
//     countrynamefromstate1 = getCountryByState(value1);
//   })
//   searchInput2.addEventListener("input", e =>{
//     value2 = e.target.value.toLowerCase()
//     console.log(value2);
//     countrynamefromstate2 = getCountryByState(value2);
//   })
 var selectedValue = document.getElementById('select').value.toLowerCase();
  console.log(selectedValue.toLowerCase());
//   if (value1 != ""||value2!=""){
//   newArray = array.filter((array)=>
//     {
//       return ((array.name.includes(value1)
//       || array.country.includes(countrynamefromstate1)||array.skills.includes(value1)||array.title.includes(value1)||array.type.includes(value1)||array.country.includes(value1)||array.name.includes(value2)
//       || array.country.includes(countrynamefromstate2)||array.skills.includes(value2)||array.title.includes(value2)||array.type.includes(value2)||array.country.includes(value2))&&array.select.includes(selectedValue.toLowerCase()))
//     })
//     givejobs(newArray);}
//     else
{
      newArray = array.filter((array)=>
    {
      return (array.select.includes(selectedValue))
    })
    givejobs(newArray);
  }
}


let searchInput1 = document.getElementById("search1");
// const value = searchInput1.value;
// const countryName1 = getCountryByState(searchInput1.value);
let searchInput2 = document.getElementById("search2");
// const countryName2 = getCountryByState(searchInput2.value);
searchInput1.addEventListener("input", e =>{
  const value = e.target.value.toLowerCase() 
  // searchInput2 = "";
  console.log(value);
  const countrynamefromstate = getCountryByState(value);
  newArray = array.filter((array)=>
  {
    var selectedValue = document.getElementById('select').value;
    return (((array.name.includes(value)
    || array.country.includes(countrynamefromstate)||array.skills.includes(value)||array.title.includes(value)||array.type.includes(value)||array.country.includes(value))&&array.select.includes(selectedValue.toLowerCase())))
  })
  givejobs(newArray);
  
} )
searchInput2.addEventListener("input", e =>{
  const value = e.target.value.toLowerCase() 
  console.log(value);
  // var noSearch = document.querySelector('.no-search').classList;
  // console.log(noSearch);
  const countrynamefromstate = getCountryByState(value);
  newArray = array.filter((array)=>
  {
    var selectedValue = document.getElementById('select').value;
    return ((array.name.includes(value)
    || array.country.includes(countrynamefromstate)||array.skills.includes(value)||array.title.includes(value)||array.type.includes(value)||array.country.includes(value))&& array.select.includes(selectedValue.toLowerCase()))
  })

  givejobs(newArray);
} )
