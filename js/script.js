/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
"use strict" 

/**
first off on page load I want to remove the elements as they are in html
I will leave them physically in the html as this site is meant
to work with out javaScript. I am doing this so I can dynamically 
repopulate the ul directlly after allso need to add a search bar dynamically
**/
window.onload = () => {
   let list = document.querySelector('ul');
   //adds search bar
   pageHeader.innerHTML = pageBase;
   //empties list
   list = emptyList(list);
   //repopulates list 
   showPage(currentPage);
}

/**
this functino brings everything together here it 
**/
const showPage = (pageNum) => {
   /**
   this point here can get confusing but what happens is you take our student data object
   then take that object break it up into chunks of ten then take one of those chunks
   and run it through our populate function which prints out that data to the list
   **/
   const amountToDisplayOnPage = 10;
   const listToDisplay = breakDataIntoGroupsOfTen(studentData,amountToDisplayOnPage);
   populateList(listToDisplay[pageNum]);
   //if we are on the first page then...
   if(pageNum === 0){
      appendPageLinks(false,true);
      if(pagination.childNodes.length === 2){pagination.removeChild(prevPageButton)}
   //if we are on the last page but the is a prev button present
   } else if(pageNum === listToDisplay.length){
      appendPageLinks(true,false);
   //here us the usual case not first or last pages
   } else {
      appendPageLinks(true,true);
   }


}

/**
this nifty function here adds list items to our unordered list 
this argument takes in an array and from that array populates our unordered list
**/
const populateList = (groupedArray) => {
   //create a list item to add data to
   let list = document.querySelector('ul'); 

   for (let i = 0; i < groupedArray.length; i++) { 
      let listItem = document.createElement("li"); 
      listItem.className = 'student-item cf'; 
      listItem.innerHTML = student(groupedArray,i);
      list.appendChild(listItem);
   }
}

/**
I know that there are cases when you want both prev and next page buttons
Ther may be situations where you dont need any buttons
**/
const appendPageLinks = (prevPage,NextPage) => {
   let list = document.querySelector('ul');
   page.appendChild(pagination);
   if (prevPage){
      pagination.appendChild(prevPageButton)
      
      prevPageButton.addEventListener("click", event => {
         //empties list
         list = emptyList(list);
         currentPage = currentPage - 1;
         showPage(currentPage);
      });
   } 
   if (NextPage){
      pagination.appendChild(nextPageButton)

      nextPageButton.addEventListener("click", event => {
         //empties list
         list = emptyList(list);
         currentPage = currentPage + 1;
         showPage(currentPage);
      });
   } 
}


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