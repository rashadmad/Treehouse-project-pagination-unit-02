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
    pageNumbers();
}

const pageNumbers = () => {
    const buttonAmount = studentDataArray.length;
    let i = 1
    while (i < buttonAmount + 1) {
        const numberButton = document.createElement("li");
        numberButton.innerHTML += '<a>' + i + '</a>';
        numberedButtonsContainer.appendChild(numberButton);
        i++
    }
 }