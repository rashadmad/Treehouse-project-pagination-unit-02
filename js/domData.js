///here  all of the dom element varibles I will make changes to
//page element
/**
so I am going to need to create elements to populate the page
**/
const body = document.getElementsByTagName('body');
const pageHeader = document.querySelector('.page-header'); 
const page = document.querySelector('.page');
const studentAmount = studentData.length;

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

//our unordered list let list = document.querySelector('.student-list');  
let list = document.querySelector('.student-list') 

//through this varible I will handle paging
let currentPage = 0;
//amount of students to display on a page
const amountToDisplayOnPage = 10;
// title here will also hold a search bar also next to it would be an unordered list
const pageBase = '<div class="page-header cf"></div><h2>Students</h2><input type="text" placeholder="Search.."></div>'
