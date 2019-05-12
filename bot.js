const Twit = require("twit");
const config = require("./config");

const Twitter = new Twit(config);

const messages = [
  "Reach the next level in album artwork - check out the new FREE tool http://muzegen.chosenmasters.com \n#AlbumDesign   #Mastering #SoundDesign #AudioProduction",
  "Master your track insantly on http://chosenmasters.com \n#AlbumDesign #chosen #OnlineMixing #LiveRecording #Mixing #Mastering #SoundDesign #AudioProduction",
  "Only settle for top notch artwork for your music - http://muzegen.chosenmasters.com",
  "Build dope album covers fast - check out the new tool http://muzegen.chosenmasters.com",
  "The true fight - https://www.youtube.com/watch?v=mbpWY7CUzyM",
  "mastering that is top notch at chosenmasters.com",
  "Design tool for non designers - but musicians http://muzegen.chosenmasters.com \n#albumgenerator #musicmastering",
  "industry mastering INSTANTLY - http://app.chosenmasters.com",
  "Dope beat to relax to - https://www.youtube.com/watch?v=mbpWY7CUzyM",
  "Muzegen is the next generation in album artwork - http://muzegen.chosenmasters.com"
];
let messageLocation = 0;
const writeTweet = () => {
  Twitter.post(
    "statuses/update",
    { status: messages[messageLocation] },
    (err, data, response) => {
      console.log(data);
    }
  );
  if (messageLocation < messages.length - 1) {
    messageLocation += 1;
  } else {
    messageLocation = 0;
  }
};

console.log("Bot activated..");

// Post on twitter every 5 hours
setInterval(writeTweet, 9000000);
