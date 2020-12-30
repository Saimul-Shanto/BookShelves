import React from "react";
import {Link} from "react-router-dom";
const Book=(props)=>{
    console.log(props);

    //https://www.googleapis.com/books/v1/volumes?callback=show_bookcover&q=isbn:' + isbn.value
    //const ImageURL="http://books.google.com/books/content/"+props.data.volumeInfo.thumbnail;
    const ImageURL= props.data.volumeInfo.imageLinks.thumbnail;
    return(
        
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">

            {(props.data.thumbnail != null ) ? <img src="https://picsum.photos/200/300" alt =""  style={{width:"100" ,height:"200"}}/>:
            <img src={ImageURL} alt="" style={{width:"100" ,height:"200"}}/>
            }
              <span className="card-title">{props.data.volumeInfo.title}</span>
            </div>
            <div className="card-content">
                {props.data.volumeInfo.publishedDate}
            </div>
            <div className="card-action">
              <Link to={{pathname:"/book/"+props.data.id, book_id:props.data.id,}}>See Details</Link>
            </div>
          </div>
        </div>
      
    );
};
//movie_id
export default Book;

