let spanishResources = [
  { name: "itsnachotime.com", type: "Website", level: "B2/C1", url: "https://itsnachotime.com/", description: "Amazing course for intermediate levels+ and community aspect is very valuable. Amazing methodical tips for learning Spanish"},
  { name: "Spanishpodcast.net", type: "Website", level: "B1", url: "https://spanishpodcast.net", description: "Podcast for learners (A2/B1 level minimum in my opinion), gives great tips for learning, natural listening comprehension, grammar explanations and colloquial phrases (Spain)"},
  { name: "NoHayTos podcast", type: "Website", level: "B2+", url: "https://nohaytospodcast.com", description: "Another great podcast, great for intermediate levels+, includes clear grammatical explanations and listening comprehension (Mexico)"},
  { name: "RTVE", type: "Website", level: "B2+", url: "https://www.rtve.es/television/", description: "Contains a large variety of interesting programs made for natives (Spanish TV)"},
  { name: "Muyinteresante.es", type: "Website", level: "B2+", url: "https://www.muyinteresante.es/", description: "Great Website with articles on a range of topics for reading practice, aimed at natives so recommend for higher levels"},

  { name: "Dreaming Spanish", type: "YouTube", level: "A1-B2", url: "https://www.youtube.com/channel/UCouyFdE9-Lrjo3M_2idKq1A", description: "Probably the best Channel out there currently for Spanish Listening Comprehension Complete Beginner-Upper Intermediate -- HIGHLY Recommend"},
  { name: "NachoTime Spanish", type: "YouTube", level: "B2/C1", url: "https://www.youtube.com/channel/UCzr7FsXkETYaaHTySIeJsjQ", description: "Also an Amazing Channel, related to Website as mentioned but also provides challenging interactive videos for intermediate level+ that really help you to improve"},
  { name: "Bilingüe Blogs", type: "YouTube", level: "B1+", url: "https://www.youtube.com/channel/UCa57CLZlqhFtn1m-e-tWhpg", description: "Very different kind of Spanish spoken here with Dominican Spanish, gives out great tips and I recommend the Listening Podcast-style Videos, recommend for all levels, listening for intermediate+"},
  { name: "Español con Juan", type: "YouTube", level: "A2/B1", url: "https://www.youtube.com/channel/UCoHJ7PkM6T92LwgJgrnDhWA", description: "Amazing grammar explanations, very entertaining the whole time, explanations with full context so if you're looking for something explained come here, recommend for upper-beginners and intermediate+"},
  { name: "Linguriosa", type: "YouTube", level: "B1+", url: "https://www.youtube.com/c/Linguriosa", description: "Fun videos to learn difficult concepts or learn about culture and sometimes etymology etc"},
  { name: "SpanishPodcast.net", type: "YouTube", level: "B1", url: "https://www.youtube.com/channel/UCpfjMrPcCxl6aP7qIkN8Jpg", description: "Linked to aforementioned website, videos with awesome tips for learning and explanations, recommend for intermediate+"},
  { name: "Why Not Spanish?", type: "YouTube", level: "A1-B1", url: "https://www.youtube.com/channel/UCIdFcLCIJQ_YMrormG_nU8w", description: "Another different accent here (Colombian), very clear explanations and well formatted videos to help you learn vocab, for all levels, recommend the listening activity videos especially"},
  { name: "Extra en Español", type: "YouTube", level: "A2/B1", url: "https://www.youtube.com/watch?v=Dfb9-ZTCA-E&list=PLLVULqsElvki_riI1ld0QhZJx1wom5Ply&index=1", description: "Program Made for students of spanish, so stupid its hilarious but also useful to learn from if you're a beginner"},

  { name: "Kike Arnaiz", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCV__GhTQCk6sfTwmKQ5ahxg", description: "Makes Travel Videos, large range of countries, amazing quality photography and videos"},
  { name: "VAGABOOM", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCPgrd83e1TOKFs46JdFu4Gg", description: "Also travel videos, Mexican Spanish and generally very interesting"},
  { name: "Lethal Crysis", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/lethalcrysischannel", description: "Extreme travel ie to everywhere you want to see but don't dare go"},
  { name: "Beyond Words", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/beyondwords", description: "Personal development, casual conversations, relax"},
  { name: "El Jardín de Martín", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCpOwrlKnpgfpqzr294zy-ow", description: "Peruvian living in Germany, interesting language learning tips"},
  { name: "Mr Salas", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/MrSalas", description: "Mexican who teaches english, great ideas for learning techniques"},
  { name: "Blog de Lengua", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/BlogdeLengua", description: "Spanish grammar, vocabulary etc but made for natives, advanced topics"},
  { name: "Hemisferio Derecho", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCo6CWGOfDeNTmpATA-k2tSA", description: "Also makes Personal Development Videos and makes great animations"},
  { name: "La Gata de Schrödinger", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCoXtmmnLCbXDiSo8GxsmOzA", description: "Videos about science and other interesting topics such as debunking conspiracy theories and false beliefs"},
  { name: "Quantum Fracture", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCbdSYaPD-lr1kW27UJuk8Pw", description: "Talks about scientific topics mainly Physics and Engineering related in an engaging format"},
  { name: "Píldoras de Psicología", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCKJNeVvjAI25bHQUYFuNVwQ", description: "Talks about Psychology and other scientific topics, very informative"},
  { name: "Date un Vlog", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCQX_MZRCaluNKxkywkLEgfA", description: "Great channel about all things scientific, very clear spoken and great explanations"},
  { name: "Jaime Altozano", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/JaimeAltozano", description: "Musician who shares interesting things related to music"},
  { name: "Hora del coto", type: "YouTube", level: "N/A", url: "https://www.youtube.com/c/HoraDelcoto", description: "Mexican spanish, reactions to spanish comedians and more"},
  { name: "La Resistencia", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCvosUrZ7hXpzAyobhfztg4w", description: "Clips from a Spanish Talk show/Podcast-style videos where many celebrities are interviewed, very natural conversational spanish"},
  { name: "The Wild Project", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UCBYyJBCtCvgqA4NwtoPMwpQ", description: "Spanish Podcast with informative videos about a range of topics whilst interviewing experts in different fields"},
  { name: "Fortfast WTF", type: "YouTube", level: "N/A", url: "https://www.youtube.com/channel/UChN3MPAc_4Qa-xkM0ZQiVbg", description: "Natural Spanish with a variety of accents talking about relevant topics and sharing interesting information"}
];

/* let websites = [
    { name: "itsnachotime.com", url: "https://itsnachotime.com/", description: "Amazing course for intermediate levels+ and community aspect is very valuable. Amazing methodical tips for learning Spanish"},
    { name: "Spanishpodcast.net", url: "https://spanishpodcast.net", description: "Podcast for learners (A2/B1 level minimum in my opinion), gives great tips for learning, natural listening comprehension, grammar explanations and colloquial phrases (Spain)"},
    { name: "NoHayTos podcast", url: "https://nohaytospodcast.com", description: "Another great podcast, great for intermediate levels+, includes clear grammatical explanations and listening comprehension (Mexico)"},
    { name: "RTVE", url: "https://www.rtve.es/television/", description: "Contains a large variety of interesting programs made for natives (Spanish TV)"},
    { name: "Muyinteresante.es", url: "https://www.muyinteresante.es/", description: "Great Website with articles on a range of topics for reading practice, aimed at natives so recommend for higher levels"}
    
];
let websitesCode = `<tr><td class="table-link"><a>Name</a></td><td><a>Description</a></td></tr>`;
websites.forEach(website => {
  websitesCode += `<tr><td class="table-link"><a href="${website.url}" target="_blank">${website.name}</a></td>
  <td><p>${website.description}</p></td></tr>`;
});

let learningChannels = [
  { name: "Dreaming Spanish", url: "https://www.youtube.com/channel/UCouyFdE9-Lrjo3M_2idKq1A", description: "Probably the best Channel out there currently for Spanish Listening Comprehension Complete Beginner-Upper Intermediate -- HIGHLY Recommend"},
  { name: "NachoTime Spanish", url: "https://www.youtube.com/channel/UCzr7FsXkETYaaHTySIeJsjQ", description: "Also an Amazing Channel, related to Website as mentioned but also provides challenging interactive videos for intermediate level+ that really help you to improve"},
  { name: "Bilingüe Blogs", url: "https://www.youtube.com/channel/UCa57CLZlqhFtn1m-e-tWhpg", description: "Very different kind of Spanish spoken here with Dominican Spanish, gives out great tips and I recommend the Listening Podcast-style Videos, recommend for all levels, listening for intermediate+"},
  { name: "Español con Juan", url: "https://www.youtube.com/channel/UCoHJ7PkM6T92LwgJgrnDhWA", description: "Amazing grammar explanations, very entertaining the whole time, explanations with full context so if you're looking for something explained come here, recommend for upper-beginners and intermediate+"},
  { name: "Linguriosa", url: "https://www.youtube.com/c/Linguriosa", description: "Fun videos to learn difficult concepts or learn about culture and sometimes etymology etc"},
  { name: "SpanishPodcast.net", url: "https://www.youtube.com/channel/UCpfjMrPcCxl6aP7qIkN8Jpg", description: "Linked to aforementioned website, videos with awesome tips for learning and explanations, recommend for intermediate+"},
  { name: "Why Not Spanish?", url: "https://www.youtube.com/channel/UCIdFcLCIJQ_YMrormG_nU8w", description: "Another different accent here (Colombian), very clear explanations and well formatted videos to help you learn vocab, for all levels, recommend the listening activity videos especially"},
  { name: "Extra en Español", url: "https://www.youtube.com/watch?v=Dfb9-ZTCA-E&list=PLLVULqsElvki_riI1ld0QhZJx1wom5Ply&index=1", description: "Program Made for students of spanish, so stupid its hilarious but also useful to learn from if you're a beginner"}

];
let learningChannelsCode = ``;
learningChannels.forEach(learningChannel => {
  learningChannelsCode += `<tr><td class="table-link"><a href="${learningChannel.url}" target="_blank">${learningChannel.name}</a></td>
  <td><p>${learningChannel.description}</p></td></tr>`;
});

let channels = [
  { name: "Kike Arnaiz", url: "https://www.youtube.com/channel/UCV__GhTQCk6sfTwmKQ5ahxg", description: "Makes Travel Videos, large range of countries, amazing quality photography and videos"},
  { name: "VAGABOOM", url: "https://www.youtube.com/channel/UCPgrd83e1TOKFs46JdFu4Gg", description: "Also travel videos, Mexican Spanish and generally very interesting"},
  { name: "Lethal Crysis", url: "https://www.youtube.com/c/lethalcrysischannel", description: "Extreme travel ie to everywhere you want to see but don't dare go"},
  { name: "Beyond Words", url: "https://www.youtube.com/c/beyondwords", description: "Personal development, casual conversations, relax"},
  { name: "El Jardín de Martín", url: "https://www.youtube.com/channel/UCpOwrlKnpgfpqzr294zy-ow", description: "Peruvian living in Germany, interesting language learning tips"},
  { name: "Mr Salas", url: "https://www.youtube.com/c/MrSalas", description: "Mexican who teaches english, great ideas for learning techniques"},
  { name: "Blog de Lengua", url: "https://www.youtube.com/c/BlogdeLengua", description: "Spanish grammar, vocabulary etc but made for natives, advanced topics"},
  { name: "Hemisferio Derecho", url: "https://www.youtube.com/channel/UCo6CWGOfDeNTmpATA-k2tSA", description: "Also makes Personal Development Videos and makes great animations"},
  { name: "La Gata de Schrödinger", url: "https://www.youtube.com/channel/UCoXtmmnLCbXDiSo8GxsmOzA", description: "Videos about science and other interesting topics such as debunking conspiracy theories and false beliefs"},
  { name: "Quantum Fracture", url: "https://www.youtube.com/channel/UCbdSYaPD-lr1kW27UJuk8Pw", description: "Talks about scientific topics mainly Physics and Engineering related in an engaging format"},
  { name: "Píldoras de Psicología", url: "https://www.youtube.com/channel/UCKJNeVvjAI25bHQUYFuNVwQ", description: "Talks about Psychology and other scientific topics, very informative"},
  { name: "Date un Vlog", url: "https://www.youtube.com/channel/UCQX_MZRCaluNKxkywkLEgfA", description: "Great channel about all things scientific, very clear spoken and great explanations"},
  { name: "Jaime Altozano", url: "https://www.youtube.com/c/JaimeAltozano", description: "Musician who shares interesting things related to music"},
  { name: "Hora del coto", url: "https://www.youtube.com/c/HoraDelcoto", description: "Mexican spanish, reactions to spanish comedians and more"},
  { name: "La Resistencia", url: "https://www.youtube.com/channel/UCvosUrZ7hXpzAyobhfztg4w", description: "Clips from a Spanish Talk show/Podcast-style videos where many celebrities are interviewed, very natural conversational spanish"},
  { name: "The Wild Project", url: "https://www.youtube.com/channel/UCBYyJBCtCvgqA4NwtoPMwpQ", description: "Spanish Podcast with informative videos about a range of topics whilst interviewing experts in different fields"},
  { name: "Fortfast WTF", url: "https://www.youtube.com/channel/UChN3MPAc_4Qa-xkM0ZQiVbg", description: "Natural Spanish with a variety of accents talking about relevant topics and sharing interesting information"}
  
];
let channelsCode = ``;
channels.forEach(channel => {
  channelsCode += `<tr><td class="table-link"><a href="${channel.url}" target="_blank">${channel.name}</a></td>
  <td><p>${channel.description}</p></td></tr>`;
}); */

let resourcesCode = `<tr><td class="table-link"><a>Name</a></td><td><a>Type</a></td><td><a>Level</a></td><td><a>Description</a></td></tr>`;
spanishResources.forEach(resource => {
  resourcesCode += `<tr><td class="table-link"><a href="${resource.url}" target="_blank">${resource.name}</a></td>
  <td class="table-type"><a>${resource.type}</a></td>
  <td class="table-level"><a>${resource.level}</a></td>
  <td><p>${resource.description}</p></td></tr>`;
});

let spanishCode = `<h2 class="subtitle">Resources</h2>
<table class="maintext">${resourcesCode}</table>`;

document.getElementById("innerBody").innerHTML = spanishCode;