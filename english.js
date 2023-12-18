let englishResources = [
    { name: "Deliberate English", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/DeliberateEnglish", description: "Great channel for intermediate students that want quick progress in listening comprehension and speaking fluency"},
    { name: "English Pronunciation Roadmap", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCIeRsxgia3oNEuKAuXEPh0A", description: "For those who want to improve their pronunciation and sound very natural when speaking"},
    { name: "Closely Observed English", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/CloselyObservedEnglish", description: "Focused on differences between formal and informal english, particularly in the written language"},
    { name: "Papa Teach Me", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/papateachme", description: "Focused largely on pronunciation, with some expressions and vocabulary included too"},
    { name: "English with Benjamin", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/EngvidBenjamin", description: "Covers wide range of topics, largely grammar and vocabulary"},
    { name: "Go Natural English", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/GoNaturalEnglish", description: "American English, vocabulary and fluency tips"},
    { name: "ETJ English", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/ETJEnglish", description: "focused on sounding more natural with pronunciation, intonation and expressions"},
    { name: "English for ESL Beginners", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCSW8FB6e8tUGEaDsoe7SlWw", description: "Great channel with content for beginners, comprehensible input"}

  ];


  let resourcesCode = `<tr><td class="table-link"><a>Name</a></td><td><a>Type</a></td><td><a>Level</a></td><td><a>Description</a></td></tr>`;
englishResources.forEach(resource => {
  resourcesCode += `<tr><td class="table-link"><a href="${resource.url}" target="_blank">${resource.name}</a></td>
  <td class="table-type"><a>${resource.type}</a></td>
  <td class="table-level"><a>${resource.level}</a></td>
  <td><p>${resource.description}</p></td></tr>`;
});
  
  let englishCode = `<h2 class="subtitle">Resources</h2>
  <table class="maintext">${resourcesCode}</table>`;
  
  document.getElementById("innerBody").innerHTML = englishCode;