import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, realvalue: 1, value: 4 },
      { id: 2, realvalue: 2, value: 0 },
      { id: 3, realvalue: 3, value: 0 },
      { id: 4, realvalue: 4, value: 0 }
    ]
  };
  handleDelete = counterId => {
    console.log("event handle delete", counterId);
    const counters = this.state.counters.filter(c => c.realvalue !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    // console.log("counters props", this.props);
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            realvalue={counter.realvalue}
            value={counter.value}
            selected={true}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
