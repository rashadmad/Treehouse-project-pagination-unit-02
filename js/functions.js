//going to need to create
const createIntialPage = (myArray) => {
    //add pagination
    addPaginationBar();
    //adds search bar
    pageHeader.innerHTML = pageBase;
    //empties list
    list.innerHTML = '';
    //repopulates list 
    showPage(myArray);
    currentPageIndicator();
 }

 const addPaginationBar = () => {   
    //create a pagination bar
    pagination.className = 'pagination';
    //addOrRemovePageLinks(false,true,true)  
    page.appendChild(pagination);
    pageNumbers();
}

//creates a group of list items to be displayed in the pagination div
//these buttons when clicked take you to the coresponding page
const pageNumbers = () => {
    const buttonAmount = studentDataArray.length;
    let i = 0
    while (i < buttonAmount) {
        let presentedNum = i + 1;
        const numberButton = document.createElement("li");
        numberButton.innerHTML += '<a class= "page_button button_' + presentedNum + '">' + presentedNum + '</a>';
        numberedButtonsContainer.appendChild(numberButton);
        const holdExactNumber = i;
            numberButton.addEventListener("click", function(){
                emptyList()
                currentPage = holdExactNumber;
                showPage(studentDataArray);
                currentPageIndicator();
            });    
        i++
    }
 }
