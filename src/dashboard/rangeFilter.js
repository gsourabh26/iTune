import React from "react";

class RangeFilter extends React.Component {
    constructor(props){
        super(props);
        this.state={};
        this.onClick = this.onClick.bind(this); 
        this.onChange = this.onChange.bind(this);
    }
    onChange(key,value){
        this.setState({
            [key]: value
        })
    }
    onClick(){
        this.props.filterClick(this.state);
    }
    render(){
        return (
            <div>
                <div>From: <input type="number" onChange={e=>this.onChange("from", parseInt(e.target.value))} value={this.state.from}/></div>
                <div>To: <input type="number" onChange={e=>this.onChange("to", parseInt(e.target.value))} value={this.state.to}/></div>
                <button onClick={this.onClick} >filter</button>
            </div>
        )
    }
}

export default RangeFilter;