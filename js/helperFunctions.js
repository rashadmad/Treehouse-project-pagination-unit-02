


//so we are going to need to clear out our ul through out the project
// this function will take the contents of the ul and delete them
const emptyList = () => {
    list.innerHTML = '';
 }


/**
So I need to create a page of populated list elements
I need to break up the diffrent list of elements into list of 0 - 9 
but in some cases this list will be less then ten. our function populateList allows us to
create list and decide on the amount of 
**/
const breakDataIntoGroupsOfTen = (myArray, groupSize) =>{
    let groupedArray = [];
    let myGroup = [];
    
    for (let i = 0; i < myArray.length; i += groupSize) {
        myGroup = myArray.slice(i, i + groupSize);
        groupedArray.push(myGroup);
    }
    return groupedArray;
 }
 
 //so this function takes in an array and num then takes that data and ceates a everything that the list item needs to create a student
 const student = (myArray,num) => {
    let studentLisItem = "";
    if(myArray[num].img) {
        studentLisItem = '<div class="student-details"><img class="avatar" src=' + myArray[num].img + '><h3>' + myArray[num].name + '</h3><span class="email">' + myArray[num].email + '</span></div><div class="joined-details"><span class="date">' + myArray[num].dateJoined + '</span></div>'
    }
    return studentLisItem
 }
 //paging fucntions that handle pagination button clicks
 //
 const goToPrevPage = () => {
    //deacreases the current page global varible
    currentPage-- 
    //emptys the ul
    emptyList(list);
    //repopulates the url bute with
    showPage(studentDataArray);
    currentPageIndicator();
 }
 const goToNextPage = () => {
    currentPage++ 
    emptyList(list);
    showPage(studentDataArray);
    currentPageIndicator();
 }

/**
when you click the prev button the paginationClick function fires passing an prameter of true
I know that there are cases when you want both prev and next page buttons
Ther may be situations where you dont need any buttons
**/
 const addOrRemovePageLinks = (prevPage,NextPage,add) => {
    
    const prevContainer = document.querySelector('.prevContainer')
    const nextContainer = document.querySelector('.nextContainer')

   //when you click the prev button the paginationClick function fires passing an prameter of true
   if (prevPage){
      if (add) {
        prevContainer.appendChild(prevPageButton)
        prevPageButton.addEventListener("click", goToPrevPage);
      } else {
        prevContainer.removeChild(prevPageButton) 
      }
   } 
   if (NextPage){
       if (add) {
        nextContainer.appendChild(nextPageButton)
        nextPageButton.addEventListener("click", goToNextPage);
      } else {
        nextContainer.removeChild(nextPageButton)
      } 
   }   
}

