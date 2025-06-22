import { Component } from "react";

export default class TodoItem extends Component {
  render() {
    return (
        <div className={`todoItem ${this.props.checked ? 'checked' : ''}`} key={this.props.index}>
            <label className="customCheckContain">
              <input 
                type="checkbox" 
                className="inputTodo" 
                onChange={(e) => this.props.approved(e.target.checked)}
                checked={this.props.checked || false}
              />
              <span className="checkText">
                {this.props.todo}
              </span>
              <span className="checkmark"></span>
            </label>
            <button className="btnFix med" onClick={this.props.onDelete}><span className="icon-delete"></span></button>
        </div>
    )
  }
}