import { Component } from "react";

export default class ThemeSwitch extends Component{
    render(){
        return(
            <label className="switch themeChange">
                <input type="checkbox" onChange={e => this.props.themeSetMode(e.target.checked)} value="themeSubmit" checked={this.props.themeMode} />
                <span className="slider"></span>
            </label>
        );
    }
}