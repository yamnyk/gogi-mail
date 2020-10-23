import React, {Component} from 'react';
import './Page404.scss';

class Page404 extends Component {
    render() {
        return (
            <div className='page-404'>
                <h2>404</h2>
                <h3>Page not found</h3>
                <div><button>Go back to home page</button></div>
            </div>
        );
    }
}

export default Page404;