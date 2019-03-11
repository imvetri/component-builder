import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import image from './index.png';

/** Product component */
function Product({ product: { id, title, price }, onAddToBag }) {
    const button = {
        id: "2",
        name:"Add To Bag",
        price: "$4.99"
    };

    return (
        <div>
            <h3>{title}</h3>
            <h4>{price}</h4>
            <img src={image} height='200px' width='210px' />
            <Button  button={{...button}} />
        </div>
    );
}

Product.propTypes = {
    /** task structure*/
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
    }),
    /** onArchive handler*/
    onAddToBag: PropTypes.func
};

export default Product; 