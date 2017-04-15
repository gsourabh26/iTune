import React from "react";
import {connect} from "react-redux";

import {searchKeyword} from "../redux/actions";

class Search extends React.Component {
    constructor(props){
        super(props);
        this.change = this.change.bind(this);
    }
    componentDidMount(){
        let {searchKeyword} = this.props;
        searchKeyword("");
    }
    change(value){
        let {searchKeyword} = this.props;
        searchKeyword(value);
    }
    render(){
        return (
            <div>
                <input type="text" id="searchbar" onChange={e=>{this.change(e.target.value)}} value={this.props.keyword} />
            </div>
        )
    }
}

Search = connect((state)=>{
    let keyword = state.dashboard && state.dashboard.keyword;
    return {keyword};
},{searchKeyword})(Search);

export default Search;
