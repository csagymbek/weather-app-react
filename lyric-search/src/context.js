import React, { Component } from "react";
import axios from "axios";
export const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return { ...state, trackList: action.payload, heading: "Search Results" };
    default:
      return state;
  }
};

export default class Provider extends Component {
  state = {
    trackList: [],
    heading: "Top 10 Tracks",
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=uk&f_has_lyrics=1&apikey=${process?.env?.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        // console.log(res?.data);
        this.setState({
          trackList: res?.data?.message?.body?.track_list,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    // console.log(this.state.trackList);
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
