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

let list = document.getElementsByTagName("ul");
let listStart = document.getElementsByTagName("ul")[0];

//through this varible I will handle paging
let currentPage = 0;

// title here will also hold a search bar also next to it would be an unordered list

const pageBase = '<div class="page-header cf"></div><h2>Students</h2><input type="text" placeholder="Search.."></div>'

const student = (myArray,num) => '<div class="student-details"><img class="avatar" src=' + myArray[num].img + '><h3>' + myArray[num].name + '</h3><span class="email">' + myArray[num].email + '</span></div><div class="joined-details"><span class="date">' + myArray[num].dateJoined + '</span></div>'
