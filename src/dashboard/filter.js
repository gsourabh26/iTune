import React from "react";
import {connect} from "react-redux";
import FilterValueList from "./filterValueList";
import {applyFilter} from "../redux/actions";
import RangeFilter from "./rangeFilter";

var keyMap ={
    artistName: "Artist",
    primaryGenreName: "Genre",
    trackPrice: "Price"
}

class Filter extends React.Component {
    filterClick(filterType){
        let {applyFilter} = this.props;
        return (selectedValue)=>{
            applyFilter({[filterType]: selectedValue});
        }
    }
    render(){
        var filters = this.props.filters || {};
        var filterKeys = Object.keys(filters);
        var filterView = filterKeys.map((filterKey, i)=>{
            return (
                <div id="filterContainer" key={i}>
                    <div id="filterType">{keyMap[filterKey]}</div>
                    <div id="filterValue">
                    {
                        filterKey !== "trackPrice" ?
                        <FilterValueList filterClick={this.filterClick.call(this, filterKey)} valueList={filters[filterKey]}/> :
                        <RangeFilter filterClick={this.filterClick.call(this, filterKey)}/>
                    }
                    </div>
                </div>
                );    
        })
        return (
            <div id="filterView">
                {filterView}    
            </div>
        )
    }
}

Filter = connect((state)=>{
    let filters = state.dashboard && state.dashboard.filters;
    return {filters};
},{
    applyFilter
})(Filter);

export default Filter;