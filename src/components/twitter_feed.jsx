import React, { Component } from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

class TwitterFeed extends Component {
  render(){
    return(
      <div className={"twitter-feed-border"}>
        <div>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="PopovVioleta"
            options={{height: 500, width: 500, color: 'white'}}
            noFooter
            transparent
          />
        </div>
      </div>
    );
  }
}

export default TwitterFeed;
