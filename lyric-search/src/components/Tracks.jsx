import React, { Component } from "react";
import { Consumer } from "../context";
import Spinner from "./Spinner";
import Track from "./Track";

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {({ trackList, heading }) => {
          // console.log(trackList);
          // console.log(heading);
          return !trackList || !trackList?.length ? (
            <Spinner />
          ) : (
            <>
              <h3 className="text-center mb-4">{heading}</h3>
              <div className="row">
                {trackList?.map(({ track }) => (
                  <Track key={track?.track_id} track={track} />
                ))}
              </div>
            </>
          );
        }}
      </Consumer>
    );
  }
}
