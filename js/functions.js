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

//creates a group od list items to be displayed in 
const pageNumbers = () => {
    const buttonAmount = studentDataArray.length;
    let i = 0
    const numberClick = (number) => {
        currentPage = number
    }
    while (i < buttonAmount) {
        const numberButton = document.createElement("li");
        //const presentedNum = i + 1
        numberButton.innerHTML += '<a>' + i + '</a>';
        numberedButtonsContainer.appendChild(numberButton);
        const myNumber = i;
        numberButton.addEventListener("click", function(){
            emptyList()
            currentPage = myNumber;
            showPage(studentDataArray);
        });    
        i++
    }
 }