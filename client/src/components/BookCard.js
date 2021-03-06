import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div class="col-lg-4 col-md-6 mx-auto card-box">
            <div className="card-container">
                {/* <img src="https://images-na.ssl-images-amazon.com/images/I/51rWU-+Ed1L._SY344_BO1,204,203,200_.jpg" alt="" /> */}
                <img src={book.book_img} alt="" className="book-card" />
                <div className="desc">
                    <h2>
                        <Link to={`/show-book/${book._id}`}>
                            { book.title }
                        </Link>
                    </h2>
                    <h3>{book.author}</h3>
                    <p>{book.description}</p>
                </div>
            </div>
        </div>
    )
};

export default BookCard;