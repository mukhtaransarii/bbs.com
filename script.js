//infoScreen Lesson List 2)
let array = [
    { Lnum : "Lesson 01" , Lname : "Web designing on Mobile" , Ldes : "Latest premium version Acode.apk" , Lsrc : "https://drive.google.com/file/d/1jwtFf7OWyDcwOxBfXvAm4iL3Oo4K4dEK/view?usp=drivesdk"},
    { Lnum : "Lesson 02" , Lname : "Multiple Page Switch" , Ldes : "Using JavaScript Doms and addEventListener" , Lsrc : "https://drive.google.com/file/d/1jzN3ap_5lcDoIt8bGEx483qivri3U1S8/view?usp=drivesdk"},
   
  
  ]


 //homeScreen PROJECT LIST 1)
 let arr = [
      { Pnum : "Project 01", Pname : "LoginPage-V2 ", Preview : "https://mukhtaransarii.github.io/LoginPage-V2/", SourceCode : "https://drive.google.com/file/d/1aX7EV_JppozK6w9GLKzoarEqxwiTEK96/view?usp=drivesdk"},
      { Pnum : "Project 02", Pname : "Google Search Clone", Preview : "https://mukhtaransarii.github.io/google-clone/", SourceCode : "https://drive.google.com/file/d/1booFa8RGNCCiN0q-V6h3wcHgIfsjxCTi/view?usp=drivesdk"},
      { Pnum : "Project 03", Pname : "Dark Gradient Calculator v1", Preview : "https://mukhtaransarii.github.io/Calculator-V1/", SourceCode : "https://t.me/webdesign_bbs/3"},
      { Pnum : "Project 04", Pname : "LoginPage-V1", Preview : "https://mukhtaransarii.github.io/LoginPage-V1", SourceCode : "https://drive.google.com/file/d/1blep9PPPzYWOFDFcYu8EUoOztQTM5f1O/view?usp=drivesdk"},
      { Pnum : "Project 06", Pname : "Portfolio Website Responsive++", Preview : "https://mukhtaransarii.github.io/Portfolio-v1/", SourceCode : "https://t.me/webdesign_bbs/3"},
      { Pnum : "Project 07", Pname : "Google Store Clone", Preview : "https://mukhtaransarii.github.io/GoogleStore-clone/", SourceCode : "https://t.me/webdesign_bbs/3"},
      { Pnum : "Project 08", Pname : "Responsive Nav Bar", Preview : "", SourceCode : "https://drive.google.com/file/d/1dTq8leF6K4_P34pR-z-pKgiHF6TLPt7Y/view?usp=drivesdk"},
      { Pnum : "Project 09", Pname : "Instagram Profile Clone V1", Preview : "https://mukhtaransarii.github.io/insta.clone", SourceCode : "https://drive.google.com/file/d/1dMFpUacqusLhk60khF_dCz-fUonX-GK0/view?usp=drivesdk"},
      { Pnum : "Project 10", Pname : "Instagram Completed Clone V2", Preview : "https://mukhtaransarii.github.io/insta.clonev2", SourceCode : "https://t.me/webdesign_bbs/3"},
      { Pnum : "Project 11", Pname : "Digital Clock", Preview : "https://mukhtaransarii.github.io/digital.clock/", SourceCode : "https://drive.google.com/file/d/1ewB9WZbj_3IyJIQYfjeD_l94_75AVb1A/view?usp=drivesdk"},
      { Pnum : "Project 12", Pname : "Todo List", Preview : "https://mukhtaransarii.github.io/todo.list/", SourceCode : "https://drive.google.com/file/d/1fNBCXMM8QuWbkX0m26LIn9HPmeoi1Izk/view?usp=drivesdk"},
      { Pnum : "Project 13", Pname : "Nike Store Redesign", Preview : "https://mukhtaransarii.github.io/nike.store/", SourceCode : "https://t.me/webdesign_bbs/3"},
      { Pnum : "Project 14", Pname : "WhatsApp Redesign", Preview : "https://mukhtaransarii.github.io/whatsapp.clone/", SourceCode : "https://t.me/webdesign_bbs/3"},
      { Pnum : "Project 15", Pname : "Restaurant Menu List with Search", Preview : "https://mukhtaransarii.github.io/restaurant.menulist/", SourceCode : "https://drive.google.com/file/d/1iB6mrd2JAsaX-o-8_VACHOIwtcyyMxqi/view?usp=drivesdk"},
      { Pnum : "Project 16", Pname : "BBS.COM", Preview : "https://mukhtaransarii.github.io/bbs.com/", SourceCode : "https://t.me/webdesign_bbs/3"},
   ]

//Project List projectScreen FUNCTION 1)
var clutter = ""
arr.forEach(function(elem,idx){
	   clutter += `<li>
              <h2 id= "hh">${elem.Pnum}</h2>
              <h5>${elem.Pname}</h5>
              <p>Responsive for all Device</p>
              <a href="${elem.Preview}"><i class="fa-solid fa-paperclip"></i> Preview website</a> 
              <span>and</span> 
              <a href="${elem.SourceCode}"><i class="fa-regular fa-file-lines"></i> Source Code</a> 
            </li>`
})
document.querySelector(".projectScreen ul").innerHTML = clutter



//Lesson List infoScreen FUNCTION 2)
var plutter = ""
  array.forEach(function(elem,idx){
	   plutter += `<li>
              <h2>${elem.Lnum}</h2>
              <h5>${elem.Lname}</h5>
              <p>${elem.Ldes}</p>
              <a href="${elem.Lsrc}"><i class="fa-regular fa-file-lines"></i> Source Code</a> 
            </li>`
})
document.querySelector(".infoScreen ul").innerHTML = plutter






//declaration of variable 
let srcBtn = document.querySelector(".fa-magnifying-glass")
let cnlBtn = document.querySelector(".searchBar .fa-xmark")
let searchBar = document.querySelector(".searchBar")
let searchInput = document.querySelector(".searchBar input")


//searchBar Block and none through search Icon and cancel btn
  srcBtn.addEventListener("click", function(){
  searchBar.style.display = "block"
})

cnlBtn.addEventListener("click", function(){
  searchBar.style.display = "none"
})


//CODE OF SEARCH PROJECT 
document.getElementById('searchInput').addEventListener('keyup', function() {
  const filter = this.value.toUpperCase();
  const names = document.querySelector(".namesList").getElementsByTagName('li');
  
  for (let i = 0; i < names.length; i++) {
    const name = names[i].textContent.toUpperCase();
    if (name.indexOf(filter) > -1) {
      names[i].style.display = '';
    } else {
      names[i].style.display = 'none';
    }
  }
});


//BOTTOM NAV BAAR CLICK FUNCTION
let profileBtn = document.querySelector(".fa-user")
let projectBtn = document.querySelector(".fa-file-code")
let infoBtn = document.querySelector(".fa-gear")
let bottomBarBtn = document.querySelector(".bottomNav2 .fa-bars")

profileBtn.addEventListener("click", function(){
  document.querySelector(".profileScreen").style.display = "block" 
  document.querySelector(".projectScreen").style.display = "none" 
  document.querySelector(".infoScreen").style.display = "none" 
 })

projectBtn.addEventListener("click", function(){
  document.querySelector(".profileScreen").style.display = "none" 
  document.querySelector(".projectScreen").style.display = "block" 
  document.querySelector(".infoScreen").style.display = "none" 
})
infoBtn.addEventListener("click", function(){
  document.querySelector(".profileScreen").style.display = "none" 
  document.querySelector(".projectScreen").style.display = "none" 
  document.querySelector(".infoScreen").style.display = "block" 
})

//NAV BAAR 2 CLICK EVENT 
let changeIcon = function(icon){
  icon.classList.toggle("fa-xmark")
}

let click = "0"
bottomBarBtn.addEventListener("click", function(icon){
   if(click == 0){
    document.querySelector(".bottomPopupMenu").style.display = "block"
    click = 1
   }else{
    document.querySelector(".bottomPopupMenu").style.display = "none"
    click = 0
   }
   
})  




