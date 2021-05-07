import React from 'react';
import "../styles/SearchPage.css";
import ChannelRow from "./ChannelRow";
import { TuneOutlined } from '@material-ui/icons';
import VideoRow from './VideoRow';
import ForeverImage from '../assets/images/thumbnails/forever.jpg';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
              image=""
              channel="Chris Brown"
              verified
              subs="20.9M"
              noOfVideos={200}
              description="Watch the official music videos of Chris Brown"
            />
            <hr />

            <VideoRow 
              thumbnail={ForeverImage}
              views="259M views"
              subs="20.9M"
              description="Watch the official music video for the Forever by Chris Brown"
              timestamp="3 days ago"
              title="Chris Brown - Forever"
              channel="Chris Brown"
            />
            <VideoRow 
              thumbnail={ForeverImage}
              views="259M views"
              subs="20.9M"
              description="Watch the official music video for the Forever by Chris Brown"
              timestamp="3 days ago"
              title="Chris Brown - Forever"
              channel="Chris Brown"
            />
            <VideoRow 
              thumbnail={ForeverImage}
              views="259M views"
              subs="20.9M"
              description="Watch the official music video for the Forever by Chris Brown"
              timestamp="3 days ago"
              title="Chris Brown - Forever"
              channel="Chris Brown"
            />
            <VideoRow 
              thumbnail={ForeverImage}
              views="259M views"
              subs="20.9M"
              description="Watch the official music video for the Forever by Chris Brown"
              timestamp="3 days ago"
              title="Chris Brown - Forever"
              channel="Chris Brown"
            />

        </div>
    )
}

export default SearchPage
