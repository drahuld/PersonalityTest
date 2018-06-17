import React from 'react';

/**
 * Error Page Component to show Error page after in case of any error while submission.
 *
 * This is stateless component.
 *
 * @returns {*}
 * @constructor
 */
const ErrorPage = () => {

    return(
        <div>

            <h1 style={{color: 'RED'}}>Some error occurred while saving your answers. Please resubmit again !!! </h1>

        </div>
    );
};

export default ErrorPage;