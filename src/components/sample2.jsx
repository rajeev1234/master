import React, { Component } from "react";
// import FontAwesome from "react-fontawesome";
class Timeline extends Component {
  // state = {  }
  render() {
    return (
      <div className="header">
        <div className="fa fa-more" />

        <span className="title">Timeline</span>

        <input type="text" className="searchInput" placeholder="Search ..." />

        <div className="fa fa-search searchIcon" />
      </div>
    );
  }
}

export default Timeline;
