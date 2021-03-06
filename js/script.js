/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
"use strict" 

/**
first off on page load I want to remove the elements as they are i html
I will leave them physically in the html as this site is meant
to work with out javaScript. I am doing this so I can dynamically 
repopulate the ul directlly after allso need to add a search bar dynamically
**/
window.onload = () => {
   //check the functions.js for this function
   createIntialPage(studentDataArray);
   // const getValue = () => document.getElementById('searchBar').value;
}
/** 
this array takes in all of our student data breaks it up in to segments that can be
displayed on different pages
**/
let studentDataArray = breakDataIntoGroupsOfTen(studentData,amountToDisplayOnPage);

/**
this nifty function here adds list items to our unordered list 
this argument takes in an array and from that array populates our unordered list
**/
const showPage = (myArray) => {
   //this function check to see if either the prev or next buttons need to be removed every time the show page function is invoked
   prevAndNextButtonRemoval();
   let i = 0;  
   //get the length of the part of the array that we are
      //create a list item to be printed later
      while (i < myArray[currentPage].length) { 
         let listItem = document.createElement("li");
         //add a classname to a list item so we can get proper styling
         listItem.className = 'student-item cf'; 
         //add a list item to the ul 
         //the student function takes in an array and number that prints out specific data to a list item
         listItem.innerHTML = student(myArray[currentPage],i);
         list.appendChild(listItem);
         i++
      }
}

const showSearch = (myArray) => {
   let i = 0
   while (i < myArray.length) { 
      let listItem = document.createElement("li");
      listItem.className = 'student-item cf'; 
      listItem.innerHTML = '<div class="student-details"><img class="avatar" src=' + myArray[i].img + '><h3>' + myArray[i].name + '</h3><span class="email">' + myArray[i].email + '</span></div><div class="joined-details"><span class="date">' + myArray[i].dateJoined + '</span></div>';
      list.appendChild(listItem);
      i++
   }   
}

 //paging fucntions that handle pagination button clicks
 //
 const goToPrevPage = () => {
   //deacreases the current page global varible
   if(currentPage > 0){currentPage-- }
   //emptys the ul
   emptyList(list);
   //repopulates the url bute with
   showPage(studentDataArray);
   currentPageIndicator();
}
const goToNextPage = () => {
  if(currentPage < studentDataArray.length - 1){currentPage++ }
   emptyList(list);
   showPage(studentDataArray);
   currentPageIndicator();
}

const prevAndNextButtonRemoval = () => {
   
   //handling first page
   if(currentPage === 0){
      addOrRemovePageLinks(false,true,true); 
      addOrRemovePageLinks(true,false),false;
   } else if(currentPage > studentDataArray.length - 2){
      addOrRemovePageLinks(false,true)
      addOrRemovePageLinks(true,false,true)
   } else {
      addOrRemovePageLinks(true,true,true); 
   }
}

const currentPageIndicator = () => {
const currentPagePlusOne = currentPage + 1; 
let presentedCurrentPage = ".button_" + currentPagePlusOne;
   
let name = document.querySelector(presentedCurrentPage);
let allButtons = document.getElementsByClassName("page_button");

if (allButtons) {
   [].forEach.call(allButtons, function(buttons) {
      buttons.classList.remove('clicked')
   });
}
   name.classList.add('clicked');
}

// const pageHighLight = () =>{
//    const 
// }

// if(increase){currentPage++}else{currentPage--};
// console.log("hello");
// //empties list
// list.innerHTML = '';
// showPage();

 /**
I am going to need to chart which elements are being displayed 
therefore only displaying every item once at most one time furthermore the idea 
here i
**/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/


// Remember to delete the comments that came with this file, and replace them with your own code comments.