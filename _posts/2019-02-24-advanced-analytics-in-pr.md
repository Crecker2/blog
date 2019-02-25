---
title: Advanced Analytics in PR
layout: post
categories: ["Analytics", "Tech", "Public Relations"]
img: ben.png
alt: A social graph of Twitter users.
preview: There's a true abundance of information PR practitioners can use to guide their social media campaigns. But in choosing what data to ignore, PR practitioners may be passing up some powerful insights
---
# Measurements and Insights

One of the prevailing challenges in the field of public relations is the matter of measuring our success. Today, this problem looks a lot different than it did, say, 15 years ago. Before, there simply wasn’t enough information to draw accurate conclusions about a particular campaign or effort. Nowadays, there’s often too much information to be able to take into account all of the relevant details for an evaluation. PR practitioners are often left with the compromise of only taking into account what’s convenient to collect, leaving out a ton of potentially relevant insights.

For example, take this tweet I recently posted to my account

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">My former classmates and I working on the <a href="https://twitter.com/CCRCA2016?ref_src=twsrc%5Etfw">@CCRCA2016</a> just made the front page of <a href="https://twitter.com/washingtonpost?ref_src=twsrc%5Etfw">@washingtonpost</a>. Thanks to <a href="https://twitter.com/TomJackmanWP?ref_src=twsrc%5Etfw">@TomJackmanWP</a> for his stellar piece, and to all my incredibly talented classmates for their boundless dedication <a href="https://twitter.com/hashtag/ColdCaseAct?src=hash&amp;ref_src=twsrc%5Etfw">#ColdCaseAct</a> <a href="https://twitter.com/hashtag/justice?src=hash&amp;ref_src=twsrc%5Etfw">#justice</a> <a href="https://twitter.com/hashtag/CivilRights?src=hash&amp;ref_src=twsrc%5Etfw">#CivilRights</a> <a href="https://t.co/Q0FeXGLOoO">https://t.co/Q0FeXGLOoO</a></p>&mdash; Joshua Fayer (@joshuafayer) <a href="https://twitter.com/joshuafayer/status/1099824337681596417?ref_src=twsrc%5Etfw">February 25, 2019</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Using the built-in Twitter Analytics suite after about four hours of this tweet being live on my feed, I was able to easily find out the following:
* I had 46 impressions
* I had 8 engagements—of which
  * 5 were detail expands
  * 2 were link clicks
  * and 1 was a retweet
* and my engagement percentage was 17.4%

If I want to see _who_ retweeted it, I’ve got to go to the tweet itself, and if I want any more information, I’m more or less out of luck.

Now, for a simple comparison (e.g. did this tweet receive more impressions than the last one I posted?) this is probably good enough. But what is left out of this examination? Intuitively, Twitter has to have more information than they give us in their Analytics panel, such as the list of people who liked or retweeted the tweet and other information they regularly display.

Unfortunately, Twitter doesn’t give us access to all of this information. But they do give us more information than the basic Analytics dashboard lets on.

## A step beyond Built-In

Enter the [Twitter API](https://developer.twitter.com/en/docs.html), or Application Programming Interface. An API, in this context, is a window developers can look through to see some of what goes on behind Twitter’s user interface. Think of it like this: when you look at a tweet, you’re looking at an attractive representation of computer code. For each tweet, there’s an “object” that stores the tweet’s information, such as how many likes it has and who has liked it. When you view a tweet, you make a request to Twitter’s servers, and this pile of computer code is served to you in a human-digestible way. API’s are a way to see more information, but in a less user-friendly way.

To ask Twitter for information about the tweet shown above using their API, I have to write a line of computer code that looks something like this:

`twitter_api.statuses.show(id=1099824337681596417)`

This code basically asks Twitter for details about a tweet with the unque ID 1099824337681596417. Note that this is the same ID you'd find in the URL, [twitter.com/joshuafayer/status/1099824337681596417](https://twitter.com/joshuafayer/status/1099824337681596417). On the website, Twitter converts the data stored on the backend into a webpage that displays the tweet. But what Twitter spits back out from the API request for the same tweet is an incredibly detailed object consisting of 122 lines of computer code:

```
{
 "favorited": false,
 "contributors": null,
 "truncated": true,
 "text": "My former classmates and I working on the @CCRCA2016 just made the front page of @washingtonpost. Thanks to\u2026 https://t.co/IUcPybcg3i",
 "possibly_sensitive": false,
 "is_quote_status": false,
 "in_reply_to_status_id": null,
 "user": {
  "follow_request_sent": false,
  "has_extended_profile": true,
  "profile_use_background_image": false,
  "default_profile_image": false,
  "id": 821445657990987777,
  "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
  "verified": false,
  "translator_type": "none",
  "profile_text_color": "000000",
  "profile_image_url_https": "https://pbs.twimg.com/profile_images/821463972926857217/bJWtIb1e_normal.jpg",
  "profile_sidebar_fill_color": "000000",
  "entities": {
   "url": {
    "urls": [
     {
      "url": "https://t.co/hiuveuCGuc",
      "indices": [
       0,
       23
      ],
      "expanded_url": "http://joshuafayer.com",
      "display_url": "joshuafayer.com"
     }
    ]
   },
   "description": {
    "urls": []
   }
  },
  "followers_count": 27,
  "profile_sidebar_border_color": "000000",
  "id_str": "821445657990987777",
  "profile_background_color": "000000",
  "listed_count": 0,
  "is_translation_enabled": false,
  "utc_offset": null,
  "statuses_count": 69,
  "description": "Syracuse University, S.I. Newhouse School of Public Communications. Communications, computer science, political science. Hit me up at jafayer@syr.edu",
  "friends_count": 46,
  "location": "Massachusetts, USA",
  "profile_link_color": "981CEB",
  "profile_image_url": "http://pbs.twimg.com/profile_images/821463972926857217/bJWtIb1e_normal.jpg",
  "following": false,
  "geo_enabled": false,
  "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
  "screen_name": "joshuafayer",
  "lang": "en",
  "profile_background_tile": false,
  "favourites_count": 120,
  "name": "Joshua Fayer",
  "notifications": false,
  "url": "https://t.co/hiuveuCGuc",
  "created_at": "Tue Jan 17 19:54:41 +0000 2017",
  "contributors_enabled": false,
  "time_zone": null,
  "protected": false,
  "default_profile": false,
  "is_translator": false
 },
 "geo": null,
 "id": 1099824337681596417,
 "favorite_count": 0,
 "possibly_sensitive_appealable": false,
 "lang": "en",
 "entities": {
  "symbols": [],
  "user_mentions": [
   {
    "id": 824430446515814401,
    "indices": [
     42,
     52
    ],
    "id_str": "824430446515814401",
    "screen_name": "CCRCA2016",
    "name": "Cold Case Act 2018"
   },
   {
    "id": 2467791,
    "indices": [
     81,
     96
    ],
    "id_str": "2467791",
    "screen_name": "washingtonpost",
    "name": "The Washington Post"
   }
  ],
  "hashtags": [],
  "urls": [
   {
    "url": "https://t.co/IUcPybcg3i",
    "indices": [
     109,
     132
    ],
    "expanded_url": "https://twitter.com/i/web/status/1099824337681596417",
    "display_url": "twitter.com/i/web/status/1\u2026"
   }
  ]
 },
 "created_at": "Mon Feb 25 00:12:10 +0000 2019",
 "retweeted": false,
 "coordinates": null,
 "in_reply_to_user_id_str": null,
 "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
 "in_reply_to_status_id_str": null,
 "in_reply_to_screen_name": null,
 "in_reply_to_user_id": null,
 "place": null,
 "retweet_count": 1,
 "id_str": "1099824337681596417"
}
```

Let’s dissect this a little bit. Among other things, I have fields here that enable me to see:
* The text of the tweet
* The users and accounts I’ve mentioned in the tweet
* Information about the account that posted the tweet, in this case my account, such as:
  * My name
  * My bio
  * The number of people who follow me
  * The number of people I follow
  * Where I have set as my home, in this case, “Massachusetts, USA”
  * A set of precise geotag data (which, for the purposes of this demo were disabled, but are enabled for some Twitter users)
  * Whether my account is verified
  * When my account was created
* An exact timestamp of when the tweet was posted
* Whether the tweet was in reply to or a retweet of another tweet

And a ton of other information about the tweet and the person who tweeted it. Using different requests for, say, information about my profile, I can get data such as my friends list and followers list.

# Data Mining

Now, the first question you might be asking is: why is any of this useful? That’s where data mining comes in. **Data Mining** is the practice of extracting new information from information you already have.

## A practical demonstration

The Twitter Ads app allows us to run targeted advertisements based on users similar to a list of custom users whom we can manually input.

Let’s say I saw a particular user, @jane_dough, who retweeted my post from earlier. I’m wondering if she might be a good model of the kind of person I want to advertise to. I decide a good way to evaluate this would be to check if she’s well-connected to the other users I already have in my list. if they’re all well-connected, they might have similar interests and might give Twitter’s algorithm a more complete picture of the sort of user I’m trying to target.

Essentially, I want to construct a **social graph** or **social network** of users that are all connected by friends and follower connections. _Social Media: How to Engage, Share, and Connect_ by  Regina Luttrell defines social networks as “groups of nodes and links formed by social entities.” In this case, the “social entities” are Twitter accounts, represented as nodes on a graph, and the links are formed when they follow or are followed by someone. Using the Twitter API and some clever logic and data arrangement, I am able to construct a social graph that ties users together by their friends lists.

Let’s say @john_dough and @jane_dough both follow @the_muffin_man. I’m able to connect @john_doe and @jane_dough by showing this mutual follow relationship with @the_muffin_man as so
![A simple social graph with three nodes, showing @john_dough and @jane_dough connected directionally to @jane_dough](/assets/images/graph.png)

In the simple graph above, I can tell that @jane_dough and @john_dough have no mutual followers, but they mutually follow @the_muffin_man. Not including themselves, @jane_dough and @john_dough are both connected in some way to 50% of the other people in the graph, and @the_muffin_man is connected to 100% of other people in the graph, making him a very important node. This isn’t a particularly interesting example, but as social graphs get more complex, such as the one below, the importance of a particular node can become very significant, allowing us to decide who is important enough to be included in our advertising model set.

![A much more complex social graph that's effectively an indecipherable mess of connected nodes](/assets/images/ben.png)

This is one example of an insight that can be derived from simple, freely-available data using the Twitter API. Another project I worked on in a social media data mining class analyzed the text of geotagged tweets to figure out if there’s a significant difference in the language used in different parts of the country (a topic spurred by the ever-present "soda" vs "pop" debate). Aside from basic academic intrigue, topics like this could be highly relevant to advertisers looking to find language that will resonate with different groups of people, or politicians traveling from state to state wanting to find language the local population will find most familiar.

Other students analyzed sentiments of tweets that mentioned certain companies and examined how social media sentiment could act as a predictor for stock performance in real-time. There are truly limitless insights that can be gleaned from the same pile of raw data.

# Is data science the new public relations?

So should we just scrap the Twitter Analytics dashboard in favor of a degree in data science? Of course not. This kind of deep insight is situationally useful, and takes a lot of time and infrastructure to support. Consider the amount of space and computing power it would take to process a million tweets or users rather than just a couple. When I ran my project in my social media data mining class, I had to run various programs almost around-the-clock for nearly _two weeks_ just to process somewhere in the range of 150,000 of the 925,000 tweets we collected. It is impractical for a public relations team to assume they can gather interesting, compelling, and detailed analyses for any given campaign in any timeline.

It’s important to know when to trust your gut, and when to defer to the data. Maybe you only need basic engagement percentages or an impression count. It depends highly on the goals set at the start of a campaign. But in the same way that any responsible PR practitioner should always keep data in the back of their minds, they should also consider what they’re ignoring, and how that can affect the detail with which they understand their social media activity.
