/**
first things first with the search to be interactive upon selecting it
second we need action on a letter being added to the search
then an action when the search bar is emptied
**/

//compare the names value from the inputfield to the studentdata obj to the input value of the search
let searched = (myArray,inputValue) => {
    let i = 0
    let matchingObjects = []
    matchingObjects = myArray.filter(student => student.name === inputValue)

    return matchingObjects
}


const submitButton = () => {
let searchBarValue = document.getElementById('searchBar').value;
    emptyList(list);
    showSearch(searched(studentData,searchBarValue));
}


// expected output: Array ["exuberant", "destruction", "present"]


//searchBar.addEventListener('input', updateValue);

// const search = () => { 

// const removeIt = () => list.removeChild(student[i]);

//     const student = list.querySelectorAll(".student-item");
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < student.length; i++) {
//         removeIt()
//     }
//   }

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