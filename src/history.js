import React from "react";
import {connect} from "react-redux";

class History extends React.Component {
    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyDown.bind(this));
    }
    handleKeyDown(event){
        if(event.keyCode === 27){
            this.props.showHistory();
        }
    }
    render(){
        var searchHistory = this.props.history;
        return (
            <div id="historyContainer">
                <div id="historyView">
                    <div id="heading">Search History </div>
                    {searchHistory.map((h,i)=><div className="historyLog" key={i}>{h}</div>)}
                </div>
            </div>
        )
    }
    componentWilUnmount(){
        document.removeEventListener("keydown");
    }
}

History = connect((state)=>{
    let history = state.history && state.history.history || [];
    return {history};
},{})(History);

export default History;