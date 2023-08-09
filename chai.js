let menuIcon = document.querySelector(".menu_icon")
let menuwrapper = document.querySelector(".menuwrapper")
let dropdownMenu = document.querySelector(".dropdown_menu")
let dropdownCall = document.querySelector(".dropdown_call")
let callBtn = document.querySelector(".call_btn")
let header = document.querySelector("header")
let copyBtns = document.querySelectorAll(".copy_icon")
let phoneNum = document.querySelectorAll(".the_number")
let stars = document.querySelectorAll(".stars i");
let searchTxt = document.querySelector(".searchTxt")
let searchbtn = document.querySelector(".searchbtn")
let searchBarWrap = document.querySelector(".wrap")

let dropdownMenue_isopen = false;
let dropdownCall_isopen = false;

//dropdown menu
menuIcon.addEventListener('click', () => {
   if (dropdownMenue_isopen) {
      dropdownMenu.style.display = "none";
      dropdownMenue_isopen = false;
   }
   else {
      dropdownMenu.style.display = "block";
      dropdownMenue_isopen = true;
   }
})
let searchUlElement = document.createElement('ul')
searchBarWrap.appendChild(searchUlElement)
searchUlElement.style.display = "none"
searchUlElement.style.position = "absolute"
searchUlElement.style.padding = "0px 5px"
searchUlElement.setAttribute('class','list-group')

menuwrapper.addEventListener('click',()=>{
   searchUlElement.style.display = "none"
})

let tenEle = [];

searchTxt.addEventListener('input', () => {
   searchTxt.value.trim()
   UpdateDeleteSearch(tenEle)
   if (searchTxt.value != "") {
      let searchToLower = searchTxt.value.toLocaleLowerCase()
      let filteredList = data.menu.filter(e => {
         let theItemsName = e.item.toLocaleLowerCase()
         return theItemsName.includes(searchToLower)
      })
      tenEle = filteredList.slice(0, 10)
      displaySearchResult(tenEle)
   }
})

function UpdateDeleteSearch(tenEle) {
   if (tenEle.length != 0)
      searchUlElement.textContent = ''
}

function displaySearchResult(tenEle) {
   // UpdateDeleteSearch(tenEle)
   searchUlElement.style.display = "block"
   tenEle.forEach((e) => {
      let listElement = document.createElement('li')
      listElement.setAttribute('class','list-group-item bg-dark text-light')
      listElement.style.width="97vw"
      listElement.innerText = `${e.item}\u00A0\u00A0\u00A0\u00A0:\u00A0\u00A0\u00A0₹${e.price}`
      searchUlElement.appendChild(listElement)
   })
}

document.addEventListener('scroll', () => {
   dropdownMenu.style.display = "none";
   dropdownMenue_isopen = false;
   dropdownCall_isopen = false;
})

//copy button
copyBtns.forEach((copyBtn) => {
   copyBtn.addEventListener('click', () => {
      theNumber = copyBtn.parentNode.querySelector('.the_number');
      text = theNumber.innerText
      var textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      theNumber.style.backgroundColor = "#fed0181c"
      setTimeout(() => {
         theNumber.style.backgroundColor = "#fed0180f"
      }, 300);

   })
});