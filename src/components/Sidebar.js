import React from 'react';
import "../styles/Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LikedVideosIcon from '@material-ui/icons/ThumbUpAltOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <hr />
            <SidebarRow Icon={LibraryIcon} title="Library" />
            <SidebarRow Icon={HistoryIcon} title="History" />
            <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarRow Icon={LikedVideosIcon} title="Liked Videos" />
            <hr />
        </div>
    )
}

export default Sidebar
