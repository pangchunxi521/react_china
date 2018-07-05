/**
 * Created by Administrator on 2018/4/19.
 */
import React from "react";
import ReactDOM from "react-dom";

let lists = [
    {
        id: 1,
        name: 'aaa',
        age: 19,
        job: 'teacher'
    },
    {
        id: 2,
        name: 'bbb',
        age: 20,
        job: 'student'
    },
    {
        id: 3,
        name: 'ccc',
        age: 21,
        job: 'programmer'
    }
];
let myStyle = {
    fontSize: 30
};
let myStyle1 = {
    color: 'green'
};
let myStyle2 = {
    color: 'pink'
};
let myStyle3 = {
    color: 'red'
};


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    render() {
        return (
            <div>
                {lists.map((event) => {
                    return (
                        <ol key={event.id} style={myStyle}>
                            <li >{event.id}</li>
                            <li style={myStyle1}>{event.name}</li>
                            <li style={myStyle2}>{event.age}</li>
                            <li style={myStyle3}>{event.job}</li>
                            <li><a href="">删除</a></li>
                        </ol>
                    )
                })}

            </div>
        )
    }
}
;
ReactDOM.render(
    <App/>,
    document.getElementById('app')
)