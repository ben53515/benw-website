let learningChannels = [
    { name: "Deliberate English", url: "https://www.youtube.com/c/DeliberateEnglish", description: "Great channel for intermediate students that want quick progress in listening comprehension and speaking fluency"},
    { name: "English Pronunciation Roadmap", url: "https://www.youtube.com/channel/UCIeRsxgia3oNEuKAuXEPh0A", description: "For those who want to improve their pronunciation and sound very natural when speaking"},
    { name: "Closely Observed English", url: "https://www.youtube.com/c/CloselyObservedEnglish", description: "Focused on differences between formal and informal english, particularly in the written language"},
    { name: "Papa Teach Me", url: "https://www.youtube.com/c/papateachme", description: "Focused largely on pronunciation, with some expressions and vocabulary included too"},
    { name: "English with Benjamin", url: "https://www.youtube.com/c/EngvidBenjamin", description: "Covers wide range of topics, largely grammar and vocabulary"},
    { name: "Go Natural English", url: "https://www.youtube.com/c/GoNaturalEnglish", description: "American English, vocabulary and fluency tips"},
    { name: "ETJ English", url: "https://www.youtube.com/c/ETJEnglish", description: "focused on sounding more natural with pronunciation, intonation and expressions"}
    //{ name: "", url: "", description: ""},

  ];


  let learningChannelsCode = ``;
  learningChannels.forEach(learningChannel => {
    learningChannelsCode += `<tr><td class="table-link"><a href="${learningChannel.url}" target="_blank">${learningChannel.name}</a></td>
    <td><p>${learningChannel.description}</p></td></tr>`;
  });
  
  let englishCode = `<div class="content">
  <h2 class="subtitle">Youtube</h2>
  <p class="subtitle">Channels for Learning English</p>
  <table class="maintext">${learningChannelsCode}</table>`;
  
  document.getElementById("innerBody").innerHTML = englishCode;