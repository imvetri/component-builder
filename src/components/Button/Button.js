import React from 'react';
import PropTypes from 'prop-types';

/** Button component */
function Button({ button: { id, name, state }, onButtonClick }) {
    return (
        <div>
            <input id={id} type="button" value={name} onClick={() => onButtonClick(id)} />
        </div>
    );
}

Button.defaultProps = {
    name: "Submit"
};

Button.propTypes = {
    /** Button name*/
    name: PropTypes.string,
    /** Button id*/
    id: PropTypes.string,
    /** On button click function call */
    onButtonClick: PropTypes.func
};

export default Button; 