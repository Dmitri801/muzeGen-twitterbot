const Twit = require("twit");
const config = require("./config");

const Twitter = new Twit(config);

const messages = ["Build beautiful, fast album covers - check out the new tool http://muzegen.chosenmasters.com #AlbumDesign   #Mastering #SoundDesign #AudioProduction",
    "Master your track insantly on chosenmasters.com - #AlbumDesign #chosen #OnlineMixing #LiveRecording #Mixing #Mastering #SoundDesign #AudioProduction",
    "Only settle for top notch artwork for your music - muzegen.chosenmasters.com",
    'Build dope album covers fast - check out the new tool http://muzegen.chosenmasters.com',
    "The true fight - https://www.youtube.com/watch?v=mbpWY7CUzyM",
    "mastering that is top notch at chosenmasters.com", "Design tool for non designers - but musicians muzegen.chosenmasters.com #albumgenerator #musicmastering",
    "industry mastering INSTANTLY - app.chosenmasters.com",
    "Dope beat to relax to - https://www.youtube.com/watch?v=mbpWY7CUzyM",
    "Muzegen is the next generation in album artwork - muzegen.chosenmasters.com"
]
let messageLocation = 0;
const writeTweet = () => {
    Twitter.post('statuses/update', { status: messages[messageLocation] }, (err, data, response) => {
        console.log(data)
    })
    if (messageLocation < messages.length - 1) {
        messageLocation += 1;
    } else {
        messageLocation = 0;
    }
}

console.log("Bot activated..");



// Post on twitter every 5 hours
setInterval(writeTweet, 9000000);
