/**
first things first with the search to be interactive upon selecting it
second we need action on a letter being added to the search
then an action when the search bar is emptied
**/

const searchBar = document.getElementsByTagName('input');
const value = () => searchBar.value = "";

const listItems = list.getElementsByTagName('li');
let txtValue = "";

//searchBar.addEventListener('input', updateValue);

const search = () => { 

    const student = list.querySelectorAll(".student-item");
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < student.length; i++) {
        list.removeChild(student[i]);
    }
  }

//I need a way to listen for changes in a an input field
/* event listener */



// function updateValue(e) {
//   log.textContent = e.target.value;
// }

// // when a letter is typed in the search bar
// const searchBarPopulated = () => {
//     console.log(searchBar.value);
// }

// //when the search bar is emptied
// const searchBarEmptied = () {
//     console.log("search bar populated")
// }