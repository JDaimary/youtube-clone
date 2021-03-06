import { Avatar } from "@material-ui/core";
import React from "react";
import "../styles/VideoCard.css";

function VideoCard({
  thumbnail,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={thumbnail} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />

        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
