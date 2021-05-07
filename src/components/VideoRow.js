import React from "react";
import "../styles/VideoRow.css";

function VideoRow({
  thumbnail,
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
}) {
  return (
    <div className="videoRow">
      <img src={thumbnail} alt="" />
      <div className="videoRow__Text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel} .{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>{" "}
          {views} views . {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
