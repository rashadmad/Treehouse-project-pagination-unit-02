//so we are going to need to clear out our ul through out the project
// this function will take the contents of the ul and delete them
const emptyList = (myList) => {
    myList.innerHTML = '';
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
 const student = (myArray,num) => '<div class="student-details"><img class="avatar" src=' + myArray[num].img + '><h3>' + myArray[num].name + '</h3><span class="email">' + myArray[num].email + '</span></div><div class="joined-details"><span class="date">' + myArray[num].dateJoined + '</span></div>'

 //paging fucntions that handle pagination button clicks
 //
 const goToPrevPage = () => {
    //deacreases the current page global varible
    currentPage-- 
    //emptys the ul
    emptyList(list);
    //repopulates the url bute with
    showPage(false);
    if(currentPage < 1){
       appendPageLinks(false,true)
       removeChild(prevPageButton);
    }
    else {appendPageLinks(true,true)}
 }
 const goToNextPage = () => {
    const studentsToDisplay = breakDataIntoGroupsOfTen(studentData,amountToDisplayOnPage)
    currentPage++ 
    emptyList(list);
    showPage(true);
    if(currentPage > studentsToDisplay - 1){
       appendPageLinks(true,false);
       
       removeChild(nextPageButton);
    }
    else {appendPageLinks(true,true)}
 }
 const removePageLinks = (prevPage,NextPage) => {
   //when you click the prev button the paginationClick function fires passing an prameter of true
   if (NextPage){
      pagination.removeChild(nextPageButton)
   }
   if (prevPage){
      pagination.removeChild(prevPageButton)
   }
}