import React from 'react';
import PropTypes from 'prop-types';

/** Input component */
function Input({ input: { id, value, state }, onInputFocus }) {
    return (
        <div>
            <input id={id} type="text" value={value} onClick={() => onInputFocus(id)} style={{border: '1px solid black', textTransform: 'uppercase', display: 'inline-block', padding: '0.5rem 2rem', textDecoration: 'none', boxSizing: 'border-box', lineHeight: '21px', letterSpacing: '0.15em', textAlign: 'center', fontWeight: 'bold', margin: '0'}}/>
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