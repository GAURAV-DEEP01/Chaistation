let menuIcon = document.querySelector(".menu_icon")
let dropdownMenu = document.querySelector(".dropdown_menu")
let header = document.querySelector("header")
let copyBtns = document.querySelectorAll(".copy_icon")
let phoneNum = document.querySelectorAll(".the_number")
let stars = document.querySelectorAll(".stars i");
let dropdownMenue_isopen = false;

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
document.addEventListener('scroll', () => {
   dropdownMenu.style.display = "none";
   dropdownMenue_isopen = false;
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