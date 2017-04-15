import React from "react";

class FilterValueList extends React.Component {
    constructor(props){
        super(props);
        this.state = {select: []}
    }
    onClick(value){
        let oldSelect = this.state.select;
        let index = oldSelect.indexOf(value);
        if(index === -1){
            oldSelect.push(value);
        }else{
            oldSelect.splice(index, 1);    
        }
        this.props.filterClick(oldSelect);
        this.setState({
            select: oldSelect
        });
    }
    render(){
        var valueList = this.props.valueList || [];
        var valueView = valueList.map((value, i)=>{
            return (
                <div style={{display: "flex"}} key={i}>
                    <div id={this.state.select.indexOf(value) > -1 ? "selectedCheckbox": "checkbox"} onClick={e=>{this.onClick(value)}} />
                    {value}
                </div>
            )
        })
        return (
            <div>
                {valueView}
            </div>
        )
    }
}

export default FilterValueList;