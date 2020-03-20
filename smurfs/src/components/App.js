import React, { Component } from "react";
import { connect } from "react-redux"
import { getData, removeSmurf } from "../actions/smurfActions"
import Header from './Header'
import SmurfList from './SmurfList'
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div className="App">
        <Header getData={this.props.getData}/>
        <SmurfList smurfList={this.props.smurfList} removeSmurf={this.props.removeSmurf}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfList: state.smurfList,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getData, removeSmurf })(App);
