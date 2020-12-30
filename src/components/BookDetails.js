import React,{useState,useEffect} from "react";
import { getBookDetails } from "../api/GB";
import { Link } from "react-router-dom";


const BookDetails=(props)=>{
  console.log(props);
    const [currentBook,setCurrentBook] = useState({});

    useEffect(()=>{
      getBookDetails(props.location.book_id,setCurrentBook);
    },[]);

    console.log(props);
        //const ImageURL="https://www.googleapis.com/books/v1/volumes/"+currentBook.thumbnail;
        const ImageURL="https://www.googleapis.com/books/"+currentBook.thumbnail;
    return(<div>
        <div className="row">
        
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">

            {(currentBook.thumbnail==undefined )? <img src={ImageURL} alt="" style={{width:"300" ,height:"600"}}/>:
            <img src="https://picsum.photos/300/600" alt =""  style={{width:"300" ,height:"600"}}/>
            
            }
              <span className="card-title">{currentBook.title}</span>
            </div>
            <div className="card-content">
              <p>  {currentBook.overview}</p>
            </div>
            <div className="card-action">
              <Link to="/">Go to search page!</Link>
            </div>
          </div>
        </div>
        </div></div>
      
    );
};

export default BookDetails;

// movie_id