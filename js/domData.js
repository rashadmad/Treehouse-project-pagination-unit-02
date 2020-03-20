///here  all of the dom element varibles I will make changes to
//page element
/**
so I am going to need to create elements to populate the page
**/
const page = document.querySelector('.page'); 
//next page button
const nextPageButton = document.createElement("BUTTON");
nextPageButton.className = '.nextPageButton';
//prev page button
const prevPageButton = document.createElement("BUTTON");
prevPageButton.className = '.prevPageButton';
//student list
let unorderedList = document.querySelector("ul.student-list");

// title here will also hold a search bar also next to it would be an unordered list

const pageBase = '<div class="page-header cf"></div><h2>Students</h2><input type="text" placeholder="Search.."><ul class="student-list"></ul></div>'

//const listItem = '<li class="student-item cf"><div class="student-details"><img class="avatar" src=' + studentData + '><h3>' + studentData[1].name + '</h3><span class="email">' + studentData[1].email + '</span></div><div class="joined-details"><span class="date">' + studentData.dateJoined + '</span></div></li>'

const student = (num) => '<li class="student-item cf"><div class="student-details"><img class="avatar" src=' + studentData[num].img + '><h3>' + studentData[num].name + '</h3><span class="email">' + studentData[num].email + '</span></div><div class="joined-details"><span class="date">' + studentData[num].dateJoined + '</span></div></li>'
