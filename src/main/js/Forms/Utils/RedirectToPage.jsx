import React from 'react';
import { withRouter } from 'react-router';

const RedirectToPage = (props) => {

    return(
        props.history.push("/Success")
    );

}
export default withRouter(RedirectToPage);