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
  { name: "Français Authentique", url: "https://www.youtube.com/channel/UCQpM25U6iqaRSO-SZxd5oDw", description: "Great channel for intermediate levels and above with discussions about a variety of topics"},
  { name: "Français avec Pierre", url: "https://www.youtube.com/channel/UCVgW9ZQaGBk6fsiPgE2mYDg", description: "Great channel for grammar explanations in slow, clear french"},
  { name: "French Comprehensible Input", url: "https://www.youtube.com/channel/UC-XUpEBvcQcRqMdtLhoXmOA", description: "interesting and engaging videos for all levels, comprehensible input"},
  { name: "Inner French", url: "https://www.youtube.com/channel/UCI4xp8qHD1MDErkqxb1dPbA", description: "Slow, clear french with a variety of topics for intermediate students"},
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
    { name: "Claire et Arthur Les droners", url: "https://www.youtube.com/channel/UCSmifVtM_TtxUCRrPQ_yqKw", description: "Discusses travel, photography and the environment"},
    { name: "Mathias", url: "https://www.youtube.com/channel/UCOLk9tXeX8QI66ZYeW_vO-g", description: "Personal development, sport, willpower, challenges"},
    { name: "Kaizen Lane", url: "https://www.youtube.com/channel/UCCVy4FTw__pk6bvZsPyTSLg", description: "Personal development, study tips, productivity"},
    { name: "M4RCO", url: "https://www.youtube.com/channel/UCmYC3JFfcXEUNUUcJH4ZQRQ", description: "Well made, informative videos about Astronomy, Aerospace and Space"}

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