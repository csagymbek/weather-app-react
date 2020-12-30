import { Link } from "react-router-dom";
export default function Track({
  track,
  track: { track_name, artist_name, album_name, track_id },
}) {
  //   console.log(track);
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play"> Track</i>
              {track_name}
            </strong>
            <br />
            <strong>
              <i className="fas fa-compact-disc"> Album</i>
              {album_name}
            </strong>
          </p>
          <Link
            to={`lyrics/track/${track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right"></i> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
}
