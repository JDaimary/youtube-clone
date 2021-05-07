import React from "react";
import "../styles/Contents.css";
import VideoCard from "./VideoCard";
import ForeverImage from "../assets/images/thumbnails/forever.jpg";

function Contents() {
  return (
    <div className="contents">
      <h2>Recommended</h2>
      <div className="contents__videos">
        <VideoCard
          thumbnail={ForeverImage}
          title="Chris Brown - Forever"
          channel="Chris Brown"
          views="259M views"
          timestamp="3 days ago"
          channelImage="../assets/images/channel/water-bug.png"
        />
        <VideoCard
          thumbnail={ForeverImage}
          title="Chris Brown - Forever"
          channel="Chris Brown"
          views="259M views"
          timestamp="3 days ago"
          channelImage="../assets/images/channel/water-bug.png"
        />
        <VideoCard
          thumbnail={ForeverImage}
          title="Chris Brown - Forever"
          channel="Chris Brown"
          views="259M views"
          timestamp="3 days ago"
          channelImage="../assets/images/channel/water-bug.png"
        />
        <VideoCard
          thumbnail={ForeverImage}
          title="Chris Brown - Forever"
          channel="Chris Brown"
          views="259M views"
          timestamp="3 days ago"
          channelImage="../assets/images/channel/water-bug.png"
        />
      </div>
    </div>
  );
}

export default Contents;
