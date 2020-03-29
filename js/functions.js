//going to need to create
const createIntialPage = () => {
    //add pagination
    addPaginationBar();
    //adds search bar
    pageHeader.innerHTML = pageBase;
    //empties list
    list.innerHTML = '';
    //repopulates list 
    showPage(studentDataArray);
 }

 const addPaginationBar = () => {   
    //create a pagination bar
    pagination.className = 'pagination';
    //addOrRemovePageLinks(false,true,true)  
    page.appendChild(pagination);

}