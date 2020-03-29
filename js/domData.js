///here  all of the dom element varibles I will make changes to
//page element
/**
so I am going to need to create elements to populate the page
**/
const body = document.getElementsByTagName('body');
const pageHeader = document.querySelector('.page-header'); 
const page = document.querySelector('.page');
const studentAmount = studentData.length;
//pagination
const pagination = document.createElement("div");

//next page button
const nextPageButton = document.createElement("BUTTON");
nextPageButton.className = 'nextPageButton pagination li a';
nextPageButton.innerHTML = 'next';

//prev page button
const prevPageButton = document.createElement("BUTTON");
prevPageButton.className = 'prevPageButton pagination li a';
prevPageButton.innerHTML = 'prev';

//our unordered list let list = document.querySelector('.student-list');  
let list = document.querySelector('.student-list') 

//through this varible I will handle paging
let currentPage = 0;
//amount of students to display on a page
const amountToDisplayOnPage = 10;
// title here will also hold a search bar also next to it would be an unordered list
const pageBase = '<div class="page-header cf"></div><h2>Students</h2><input type="text" placeholder="Search.."></div>'

const pageNumberButton = '<li></li>'

//pagination bar data
const containerForPrevButton = document.createElement("li");
containerForPrevButton.className = 'prevContainer pagination'

pagination.appendChild(containerForPrevButton);

let numberedButtonsContainer = document.createElement("li");
numberedButtonsContainer.className = 'numberedButtonsContainer' 

pagination.appendChild(numberedButtonsContainer);

const containerForNextContainer = document.createElement("li");
containerForNextContainer.className = 'nextContainer pagination' 

pagination.appendChild(containerForNextContainer);