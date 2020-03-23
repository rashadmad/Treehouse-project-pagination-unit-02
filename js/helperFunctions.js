//so we are going to need to clear out our ul through out the project
// this function will take the contents of the ul and delete them
const emptyList = (myList) => {
    if(myList){myList.innerHTML = ''}
 }


/**
So I need to create a page of populated list elements
I need to break up the diffrent list of elements into list of 0 - 9 
but in some cases this list will be less then ten. our function populateList allows us to
create list and decide on the amount of 
**/
const breakDataIntoGroupsOfTen = (myArray, groupSize) =>{
    const arrayLength = myArray.length;
    let groupedArray = [];
    let myGroup = [];
    
    for (let i = 0; i < arrayLength; i += groupSize) {
        myGroup = myArray.slice(i, i + groupSize);
        groupedArray.push(myGroup);
    }
    return groupedArray;
 }
 
 //so this function takes in an array and num then takes that data and ceates a everything that the list item needs to create a student
 const student = (myArray,num) => '<div class="student-details"><img class="avatar" src=' + myArray[num].img + '><h3>' + myArray[num].name + '</h3><span class="email">' + myArray[num].email + '</span></div><div class="joined-details"><span class="date">' + myArray[num].dateJoined + '</span></div>'