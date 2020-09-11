import React, { Component } from 'react';

class TwitterFeed extends Component {
  textSplitter = (text) => {
    const text_array = text.split(/(\S+\s+)/).filter(function(n) {return n});

    let p = text_array.map( (word) => {
      if (word.includes("@")) {
        let el = <span className={'mention-color'}>{word}</span>
        return(el)
      } else if (word.includes('https://')) {
        let el = <a href={word} className={'url-link-underline'}>{word}</a>
        return(el)
      } else {
        return(word)
      }
    })
    return p;
  }

  dateSplitter = (date) => {
    const date_array = date.split(" ");
    date_array.splice(0, 1)
    date_array.splice(2,1)
    date_array.splice(2,1)
    date_array[0] += " "
    date_array[1] += ", "
    return date_array.join("")
  }

  render(){
    return(
      <div className={"twitter-feed-border"}>
        <div className={"tweets-scroll"}>
          {this.props.tweets.statuses &&
            this.props.tweets.statuses.map( (tweet, index) => {
              return  <div key={index} className={'tweet-container'}>
                        {tweet.retweeted_status &&
                          <h1 className={'retweet-preheader'}><i>Violeta Popov, MD PHD Retweeted</i></h1>
                        }
                        {tweet.retweeted_status
                          ? <div className={"tweet-header"}>
                              <img src={tweet.retweeted_status.user.profile_image_url} className={'profile-photo'} alt=""/>
                              <div className={'user-name'}>
                                <h1><a href={"https://twitter.com/"+tweet.retweeted_status.user.screen_name}>{tweet.retweeted_status.user.name}</a></h1>
                                <h2>@{tweet.retweeted_status.user.screen_name}</h2>
                                <p className={'tweet-body'}>{this.textSplitter(tweet.text)}</p>
                              </div>
                            </div>

                          : <div className={"tweet-header"}>
                              <img src={tweet.user.profile_image_url} className={'profile-photo'} alt=""/>
                              <div className={'user-name'}>
                                <h1><a href={'https://twitter.com/'+tweet.user.screen_name}>{tweet.user.name}</a></h1>
                                <h2>@{tweet.user.screen_name}</h2>
                                <p className={'tweet-body'}>{this.textSplitter(tweet.text)}</p>
                              </div>
                            </div>
                        }
                        <div>
                          <p className={'date-tweeted'}>{this.dateSplitter(tweet.created_at)}</p>
                        </div>
                      </div>
          })}
          <div className={"see-more"}>
            <a href="https://www.twitter.com/popovvioleta" target="_blank" rel="noopener noreferrer">See more</a>
          </div>
        </div>
      </div>
    );
  }
}

export default TwitterFeed;
