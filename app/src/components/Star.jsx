import React, { useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Star = (props) => {

    const [rating, setRating] = useState(1);

    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue);
    }
    useEffect(() => {
        setRating(rating);
    }, [rating])

    return (
        <div>
            {/* <h2>Rating from state: {rating}</h2> */}
            <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={onStarClick}
            />
        </div>
    );
}
export default Star;
