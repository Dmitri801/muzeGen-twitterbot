# Muzegen Twitter Bot

### Muzegen twitter bot will post every 5 hours promoting cool stuff 

## Installation

`git clone https://github.com/Dmitri801/muzeGen-twitterbot.git`

`cd muzeGen-twitterbot`

`npm install`

## Before Starting

- Create a file called config.js in the root and include your twitter API information following this [documentation](https://github.com/ttezel/twit)

```
module.exports = {
    consumer_key: '..',
    consumer_secret: '..',
    access_token: '..',
    access_token_secret: '..',
}

```

## Run it

`node bot.js`
