import React, { Component } from 'react';

import { TwitterTimelineEmbed } from 'react-twitter-embed';

fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=popovvioleta')
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });

class TwitterFeed extends Component {
  render(){
    return(
      <div className={"twitter-feed-border"}>
        <div style={{overflow:'scroll', width: '500px'}}>
          <a className="twitter-timeline custom-timeline" href="https://twitter.com/PopovVioleta?ref_src=twsrc%5Etfw">Tweets by PopovVioleta</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
         {/*<TwitterTimelineEmbed
                     sourceType="profile"
                     screenName="PopovVioleta"
                     options={{height: 500, width: 500, color: 'white'}}
                     noFooter
                     transparent
                  />*/}
        </div>
      </div>
    );
  }
}

export default TwitterFeed;
