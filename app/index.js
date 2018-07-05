/**
 * Created by Administrator on 2018/4/19.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };
    render() {
        let myStyle = {
            width:2000,
            height:2000,
            color:'green',
            backgroundImage:'url('+'http://dl.bizhi.sogou.com/images/1440x900/2012/05/12/12825.jpg'+')',
            backgroundRepeat:'repeat-x'
        }
        return (
            <div style={myStyle}>
                <h1>Hello, World!</h1>
                <h2>你好啊</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
