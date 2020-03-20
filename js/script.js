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
   page.innerHTML = pageBase;
   let unorderedList = document.createElement('ul');
   
}

const populatePage = (min,max) => {
   for (let i = min; i <= max; i++){ 
      let unorderedList = document.getElementById('my-student-list');
      let listItem = document.createElement('li');
      listItem.className = 'student-item cf';
      listItem.innerHTML = student(i);
      unorderedList.appendChild(listItem);
   }
}

populatePage(1,10);













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