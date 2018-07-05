/**
 * Created by Administrator on 2018/4/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);
        this.tick = this.tick.bind(this);
        this.state = {seconds:this.props.aa}
    };
    tick(){
        this.setState({seconds:Number(this.state.seconds + 1)})
    };
    componentDidMount(){
        this.interval = setInterval(this.tick,1000)
    };
    componentWillUnmount(){
        clearInterval(this.interval)
    };
    render(){
        return (
            <div>
                <p>现在过了{this.state.seconds}秒</p>
            </div>
        )
    }
};
ReactDOM.render(
    <App aa= '0'/>,
    document.getElementById('app')
)