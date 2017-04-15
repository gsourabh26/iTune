import React from "react";
import {connect} from "react-redux";
import ITune from "./songDetail";

class ITuneList extends React.Component {
    render(){
        var ituneList = this.props.itunes || [];
        var list = ituneList.map((itune, i)=><ITune key={i} itune={itune} />)
        return (
            <div id="ituneList">
                {list}    
            </div>
        )
    }
}

ITuneList = connect((state)=>{
    let itunes = state.dashboard && state.dashboard.itunes;
    return {itunes};
},{})(ITuneList);

export default ITuneList;