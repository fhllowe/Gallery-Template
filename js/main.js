
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// document.getElementById('navDropdown').addEventListener('click', myFunction)
// function myFunction() {
//           document.getElementById("dropdown-content").classList.toggle("show");
//         }
        
//         // Close the dropdown menu if the user clicks outside of it
//         window.onclick = function(event) {
//           if (!event.target.matches('.dropbtn')) {
//             var dropdowns = document.getElementsByClassName("dropdown-content");
//             var i;
//             for (i = 0; i < dropdowns.length; i++) {
//               var openDropdown = dropdowns[i];
//               if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//               }
//             }
//           }
//         }


const btn = document.getElementById('dropbtn');
const dropdownContent = document.getElementById('dropdown-content')

btn.addEventListener('click', (e) => {
  dropdownContent.classList.toggle('dropdown-content')
})