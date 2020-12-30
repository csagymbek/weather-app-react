import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../context";

export default class Search extends Component {
  state = {
    trackTitle: "",
  };

  onChange = (e) => {
    this.setState({ trackTitle: e.target.value });
  };

  findTrack = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process?.env?.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        // console.log(res?.data);
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res?.data?.message?.body?.track_list,
        });
        this.setState({ trackTitle: "" });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Consumer>
        {({ dispatch }) => {
          //   console.log(value);
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i>Search For A Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.findTrack.bind(this, dispatch)}>
                <div className="form-group" style={{ display: "flex" }}>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                  <button
                    style={{ width: "25%", padding: "10px 0" }}
                    className="btn btn-primary btn-md btn-block m-1"
                    type="submit"
                  >
                    Get Track Lyrics
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
