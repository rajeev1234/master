import React, { Component } from "react";
class Counter extends Component {
  state = {
    co: this.props.id,
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };
  render() {
    console.log("props", this.props);
    console.log("props id", this.props.realvalue);
    return (
      <div>
        <span styles={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.realvalue)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
