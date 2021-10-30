let websites = [
    { name: "French Kwiziq", url: "https://french.kwiziq.com/learn/reading", description: "French reading practice, various levels, includes audio"},
    { name: "Lawless French", url: "https://www.lawlessfrench.com/faq/lessons-by-level/", description: "Also reading practice, any level, including videos/audios and also grammar tips/lessons"}
    
];
let websitesCode = ``;
websites.forEach(website => {
  websitesCode += `<tr><td class="table-link"><a href="${website.url}" target="_blank">${website.name}</a></td>
  <td><p>${website.description}</p></td></tr>`;
});

let learningChannels = [
  { name: "Alice Ayel", url: "https://www.youtube.com/channel/UCbC9Utt1c6UXRqWw2lOTCBg", description: "Amazing stories and comprehensible input for complete beginners and up, very useful"},
  { name: "French with Tony", url: "https://www.youtube.com/channel/UC-8POjZ30a3YD63Gys0wWNA", description: "Great channel with content for beginners and intermediate with stories and also authentic conversations"},
  { name: "Julie Alors", url: "https://www.youtube.com/channel/UCVJJy6MLOtSJQebC86L7SDw", description: "Great channel with videos for all levels of comprehensible input"},
  { name: "French Comprehensible Input", url: "https://www.youtube.com/channel/UC-XUpEBvcQcRqMdtLhoXmOA", description: "interesting and engaging videos for all levels, comprehensible input"},
  { name: "Français avec Pierre", url: "https://www.youtube.com/channel/UCVgW9ZQaGBk6fsiPgE2mYDg", description: "Great channel for grammar explanations in slow, clear french"},
  { name: "Inner French", url: "https://www.youtube.com/channel/UCI4xp8qHD1MDErkqxb1dPbA", description: "Slow, clear french with a variety of topics for intermediate students"},
  { name: "Français Authentique", url: "https://www.youtube.com/channel/UCQpM25U6iqaRSO-SZxd5oDw", description: "Great channel for intermediate levels and above with discussions about a variety of topics"},
  { name: "Guide to French Pronunciation", url: "https://www.youtube.com/channel/UCZ0FVpygzWPgtpWS_-ENTsg", description: "Explanations of how to pronounce french sounds with mouth positions etc - very useful! (videos in english)"},
  { name: "Elma dit", url: "https://www.youtube.com/c/Elmadit", description: "Explanations of pronunciation and some other topics, videos in french or portuguese"},
  { name: "Piece of French", url: "https://www.youtube.com/c/PieceofFrench", description: "Slow, clear french with subtitles, everyday topics"},
  { name: "François le français", url: "https://www.youtube.com/channel/UCvnjBpG2GikgvHB7qrRG5Yw", description: "Explanations of songs/videos, learn slang"},
  { name: "Extra en Français", url: "https://www.youtube.com/playlist?list=PLhAxKCm7GPvi1fmbLUbhYhQcLGTZ2Fqwq", description: "Program Made for students of French, so stupid its hilarious but also useful to learn from if you're a beginner"}
  
];
let learningChannelsCode = ``;
learningChannels.forEach(learningChannel => {
  learningChannelsCode += `<tr><td class="table-link"><a href="${learningChannel.url}" target="_blank">${learningChannel.name}</a></td>
  <td><p>${learningChannel.description}</p></td></tr>`;
});

let channels = [
    { name: "Le Monde des Langues", url: "https://www.youtube.com/channel/UC1ipKNAWcHhmcqKUEGg1RMg", description: "Content aimed at french speakers, discussing languages and other interesting topics"},
    { name: "Lauriane- Marathon des Langues", url: "https://www.youtube.com/channel/UCF6Z8cpFJke-s9mqsGkDK8Q", description: "Content aimed at french speakers, discussing languages and other interesting topics"},
    { name: "Linguisticae", url: "https://www.youtube.com/c/Linguisticae", description: "Very fun, speaks about linguistics, speaks fast"},
    { name: "Les langues de Cha", url: "https://www.youtube.com/c/LesLanguesdeCha", description: "Linguistics, informative and useful"},
    { name: "Apprendre une langue", url: "https://www.youtube.com/c/apprendreunelangue", description: "Speaks about language learning, particularly how to start quickly. Comprehensible videos"},
    { name: "Claire et Arthur Les droners", url: "https://www.youtube.com/channel/UCSmifVtM_TtxUCRrPQ_yqKw", description: "Discusses travel, photography and the environment"},
    { name: "Hugo Décrypte", url: "https://www.youtube.com/c/HugoD%C3%A9crypte", description: "Weekday short videos with news about France or international subjects"},
    { name: "France Culture", url: "https://www.youtube.com/user/FranceCulture", description: "Videos about various subjects related to France and the french language"},
    { name: "Kaizen Lane", url: "https://www.youtube.com/channel/UCCVy4FTw__pk6bvZsPyTSLg", description: "Personal development, study tips, productivity"},
    { name: "Mathias", url: "https://www.youtube.com/channel/UCOLk9tXeX8QI66ZYeW_vO-g", description: "Personal development, sport, willpower, challenges"},
    { name: "Cyrus North", url: "https://www.youtube.com/c/CyrusNorth", description: "Psychology, thoughts about tough topics"},
    { name: "Fabien Olicard", url: "https://www.youtube.com/c/FabienOlicard", description: "Mentalism (illusions, brain and mental biases etc)"},
    { name: "Science Etonnante", url: "https://www.youtube.com/c/ScienceEtonnante", description: "Scientific videos, mainly Physics, explained clearly and enjoyably"},
    { name: "Dr Nozman", url: "https://www.youtube.com/c/DrNozman", description: "Science and interesting subjects at an entry level"},
    { name: "Dirty Biology", url: "https://www.youtube.com/c/dirtybiology", description: "Science videos about biology or other interesting things"},
    { name: "Fouloscopie", url: "https://www.youtube.com/c/Fouloscopie", description: "une foule = a crowd, the science of crowds - very interesting and unique"},
    { name: "M4RCO", url: "https://www.youtube.com/channel/UCmYC3JFfcXEUNUUcJH4ZQRQ", description: "Well made, informative videos about Astronomy, Aerospace and Space"},
    { name: "Cyprien", url: "https://www.youtube.com/c/cyprien", description: "Short comedic videos and sketches about various topics"},
    { name: "Paul Taylor's Happy Hour", url: "https://www.youtube.com/c/PaulTaylorsHappyHourLive", description: "English comedian who speaks very good french talks to invitees casually and comically (in english and french)"}
    
  ];


  let channelsCode = ``;
  channels.forEach(channel => {
    channelsCode += `<tr><td class="table-link"><a href="${channel.url}" target="_blank">${channel.name}</a></td>
    <td><p>${channel.description}</p></td></tr>`;
  });
  
  let frenchCode = `<div class="content">
  <h2 class="subtitle">Websites</h2>
  <table class="maintext">${websitesCode}</table>
  <h2 class="subtitle">Youtube</h2>
  <p class="subtitle">Channels for Learning French</p>
  <table class="maintext">${learningChannelsCode}</table>
  <p class="subtitle">Interesting French Channels (Recommend for Upper intermediate+, or lower levels who prefer listening to content made for natives)</p>
  <table class="maintext">${channelsCode}</table>`;
  
  document.getElementById("innerBody").innerHTML = frenchCode;