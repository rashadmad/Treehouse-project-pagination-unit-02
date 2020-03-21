/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
"use strict" 
/**
first off I want to remove the elements as they are in html
I will leave them physically in the html as this site is meant
to work with out javaScript. I am doing this so I can dynamically 
create diffrent list items using json like data
**/
//


///then we will need to show our data with the showPage
// const showPage = () => {
//    //add an ul to the page
//    page.appendChild(unorderedList);  
// }
//this triggers on page load allowing us to 
window.onload = () => {
   //addeds a title and search bar to the page and gets rid all contents of the ul element
   pageHeader.innerHTML = pageBase;
   const AltList = document.querySelector('ul');
   page.removeChild(AltList);
}

///this nifty function here creates as many list items as you want 
const populateList = (groupedArray) => {

   page.appendChild(list); 
   
   groupedArray.forEach((studentItem) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = studentItem;
      listItem.className = 'student-item cf';
      list.appendChild(listItem); 
   })
   page.appendChild(pagination);
}

//I know that there are cases when you want both prev and next page buttons
//Ther may be situations where you dont need any
const appendPageLinks = (prevPage,NextPage) => {
   if (prevPage){pagination.appendChild(prevPageButton)};
   if (NextPage){pagination.appendChild(nextPageButton)};
}

 /**
I am going to need to chart which elements are being displayed 
therefore only displaying every item once at most one time furthermore the idea 
here i
**/


 /**
 So I need to create a page of populated list elements
 I need to break up the diffrent list of elements into list of 0 - 9 
 but in some cases this list will be less then ten. our function populateList allows us to
 create list and decide on the amount of 
 **/

//I want to display only ten students at a time 
const breakDataIntoGroupsOfTen = (myArray, groupSize) =>{
   var arrayLength = myArray.length;
   var groupedArray = [];
   
   for (let i = 0; i < arrayLength; i += groupSize) {
       myGroup = myArray.slice(i, i + groupSize);
       // Do something if you want with the group
       groupedArray.push(myGroup);
   }

   return groupedArray;
}

 const showPage = () => {
   //amount to display
   const groupSize = 10;
   breakDataIntoGroupsOfTen(studentData,groupSize);
   populateList(listStart,groupSize);
 }

//  document.querySelector('.nextPageButton').addEventListener("click", prevPageButtonClicked, false);










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