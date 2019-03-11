import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product/Product';

export function PureProductList({ products }) {
    return (
        <div className="list-items">
            {products.map(product => <Product key={product.id} product={product} />)}
        </div>
    );
}

PureProductList.propTypes = {
    /** List of products */
    tasks: PropTypes.arrayOf(Product.propTypes.product).isRequired,
};


export default PureProductList;