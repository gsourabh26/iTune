import React from "react";
import Search from "./search";
import ITuneList from "./songList";
import Filter from "./filter";
import {showHistory, logout} from "../redux/actions";
import History from "../history";
import {connect} from "react-redux";

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.showHistory = this.showHistory.bind(this);
        this.logout = this.logout.bind(this);
    }
    showHistory(){
        let {showHistory} = this.props;
        showHistory({showHistory: !this.props.openHistoryView})
    }
    logout(){
        let {logout} = this.props;
        logout();
    }
    render(){
        return (
            <div className="body">
                <div id="header">   
                    <p>Welome {this.props && this.props.user && this.props.user.name}</p>
                    <div>
                        <button style={{marginTop: "10px", marginRight: "5px"}} onClick={this.showHistory}> History</button>
                        <button style={{marginTop: "10px"}} onClick={this.logout}> Logout </button>
                    </div>
                </div>
                <Search />
                <br />
                <div style={{display:'flex'}}>
                    <ITuneList />
                    <Filter />
                </div>
                {this.props.openHistoryView ? <History showHistory={this.showHistory} /> : null}
            </div>
        )
    }
} 

Dashboard = connect((state)=>{
    let openHistoryView = state.dashboard && state.dashboard.openHistoryView || false;
    return {openHistoryView};
},{showHistory, logout})(Dashboard);

export default Dashboard;