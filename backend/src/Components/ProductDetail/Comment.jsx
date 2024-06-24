import StarRating from "../StarRating/StarRating";
import "./Comment.css";

const Comment = ({user, stars, text, pending}) => {
    return ( 
        <div className="comment-card">
            <div className="comment-header">
                <p className="comment-username">{user}</p>
                <div className="comment-group">
                    <StarRating rating = {stars}/>
                    {pending && (
                        <div className="comment-actions">
                            <button className="action-button">Aceptar</button>
                            <p>|</p>
                            <button className="action-button">Bloquear</button>
                        </div>
                    )}
                </div>
            </div>
            <p className="comment-text">{text}</p>
        </div>

    );
}
 
export default Comment;