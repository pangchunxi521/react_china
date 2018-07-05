/**
 * Created by Administrator on 2018/4/19.
 */

import React from "react";
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    };
};
// App.propTypes = {
//     name:React.PropTypes.number
// };
App.defaultProps = {
    name:'sb'
};
ReactDOM.render(
    <App name="sanbao"/>,
    document.getElementById('app')
)
