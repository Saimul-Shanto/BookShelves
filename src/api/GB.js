import axios from "axios";

const GB=axios.create({
    baseURL:"https://www.googleapis.com/books/v1",
});
//https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyADsBOvGnMSGhJup0djetFOMVP4plR96rc
const getBooksByTerm=(SearchTerm, setBooks, page_number,setTotalPages)=>{
    GB.get("volumes",{
        params:{
            q:SearchTerm,
            startIndex:page_number,
            maxResults:12,
           // orderBy: sortTerm,
            
            
        },
    }).then((response)=>{
        console.log(response);
        setBooks(response.data.items);
        // setTotalPages(response.data.count);
        setTotalPages(Math.ceil(response.data.totalItems/18));
    });
};



const getBookDetails=(BookID,setCurrentBook)=>{
    GB.get("/book"+BookID,{
        params:{
            api_key:"AIzaSyADsBOvGnMSGhJup0djetFOMVP4plR96rc",
        },
    }).then((response)=>{
        console.log(response.data);
        setCurrentBook(response.data);
       
    });
};

export {getBooksByTerm,getBookDetails};

