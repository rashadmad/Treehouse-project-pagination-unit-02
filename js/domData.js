///here  all of the dom element varibles I will make changes to
//page element
/**
so I am going to need to create elements to populate the page
**/
const body = document.getElementsByTagName('body');
const pageHeader = document.querySelector('.page-header'); 
const page = document.querySelector('.page');
//next page button
const nextPageButton = document.createElement("BUTTON");
nextPageButton.className = '.nextPageButton';
nextPageButton.innerHTML = 'next';
//prev page button
const prevPageButton = document.createElement("BUTTON");
prevPageButton.className = '.prevPageButton';
prevPageButton.innerHTML = 'prev';
//pagination
const pagination = document.createElement("div");
pagination.className = 'pagination';


let list = document.createElement("ul");
list.className = 'student-list';



// title here will also hold a search bar also next to it would be an unordered list

const pageBase = '<div class="page-header cf"></div><h2>Students</h2><input type="text" placeholder="Search.."></div>'

const student = (num) => '<div class="student-details"><img class="avatar" src=' + studentData[num].img + '><h3>' + studentData[num].name + '</h3><span class="email">' + studentData[num].email + '</span></div><div class="joined-details"><span class="date">' + studentData[num].dateJoined + '</span></div>'
