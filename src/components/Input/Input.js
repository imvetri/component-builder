import React from 'react';
import PropTypes from 'prop-types';

/** Input component */
function Input({ input: { id, value, state }, onInputFocus }) {
    return (
        <div>
            <input id={id} type="text" value={value} onClick={() => onInputFocus(id)} />
        </div>
    );
}

Input.defaultProps = {
    value: "default text"
};

Input.propTypes = {
    /** Input value*/
    value: PropTypes.string,
    /** Input id*/
    id: PropTypes.string,
    /** On Input focus function call */
    onInputFocus: PropTypes.func
};

export default Input; 