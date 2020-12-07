import React, { useState, useEffect, useContext } from 'react';
import StarRatingComponent from 'react-star-rating-component';

import Context from "../context/Context";

const Star = (props) => {

    const context = useContext(Context);

    const [rating, setRating] = useState(props.valor);

    const onStarClick = (nextValue, prevValue, name) => {
        setRating(nextValue);
    }
    useEffect(() => {
        setRating(rating);
    }, [rating])
    context.setRating(rating);

    return (
        <>
            {/* <h2>Rating from state: {rating}</h2> */}
            <StarRatingComponent
                name="rate1"
                starCount={5}
                value={rating}
                onStarClick={onStarClick}
            />
        </>
    );
}

export default Star;
