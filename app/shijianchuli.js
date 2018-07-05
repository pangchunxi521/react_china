/**
 * Created by Administrator on 2018/4/19.
 */
import React from "react";
import ReactDOM from "react-dom";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.onClic = this.onClic.bind(this);
        this.onJian = this.onJian.bind(this);
        this.state = {seconds: 0}
    };

    onClic() {
        let e = this.state.seconds;
        this.setState({seconds: Number(e + 1)})
    };
    onJian() {
        let e = this.state.seconds;
        if (e <= 0) {
            return false;
        }
        this.setState({seconds: e - 1});
    }

    render() {
        return (
            <div>
                <input type="button" value="-" onClick={this.onJian}/>
                {this.state.seconds}
                <input type="button" value="+" onClick={this.onClic}/>
            </div>
        )
    }
}
;
ReactDOM.render(
    <App/>,
    document.getElementById('app')
)