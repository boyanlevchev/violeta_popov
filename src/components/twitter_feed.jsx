import React, { Component } from 'react';

import { TwitterTimelineEmbed, TwitterFollowButton } from 'react-twitter-embed';

class TwitterFeed extends Component {
  render(){
    return(
      <div>
        <div className="mb-2">
          <TwitterFollowButton
            screenName={'PopovVioleta'}
            options={{size: 'large'}}
          />
        </div>
        <div>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="PopovVioleta"
            options={{height: 500, width: 400}}
            noFooter
          />
        </div>
      </div>
    );
  }
}

export default TwitterFeed;
