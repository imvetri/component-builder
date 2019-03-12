import React from 'react';
import PropTypes from 'prop-types';

/** Button component */
function Button({ button: { id, name, state }, onButtonClick }) {
    return (
        <div>
            <input id={id} type="button" value={name} style={{backgroundColor: 'grey', border: '1px solid black', textTransform: 'uppercase', display: 'inline-block', padding: '0.5rem 2rem', textDecoration: 'none', boxSizing: 'border-box', lineHeight: '21px', letterSpacing: '0.15em', textAlign: 'center', fontWeight: 'bold', margin: '0'}} onClick={() => onButtonClick(id)} />
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