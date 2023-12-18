let tools = [
    { name: "Italki", url: "https://www.italki.com/home", description: "Probably the best place on the internet to find online language teachers for range of prices and also language exchange partners"},
    { name: "Tandem", url: "https://www.tandem.net/", description: "Amazing app for finding Exchange Partners, and talking with a variety of people from around the world"},
    { name: "Hellotalk", url: "https://www.hellotalk.com/?lang=en", description: "Great app for finding language exchange partners and also communicating with wide range of people in target language to improve writing skills, natives to help correct you"},
    { name: "DeepL Translator", url: "https://www.deepl.com/en/translator", description: "Best translator, much more natural than Google Translate"},
    { name: "Linguee Dictionary", url: "https://www.linguee.com/", description: "finds wide range of example texts with searched word which have been translated by speakers of both languages so are very accurate. Very good to grasp meaning of a word/phrase"},
    { name: "Forvo - Pronunciation", url: "https://forvo.com/", description: "Helps you find the correct pronunciation of a word in a variety of accents"}
 
  ];
  let toolsCode = ``;
  tools.forEach(tool => {
    toolsCode += `<tr><td class="table-link"><a href="${tool.url}" target="_blank">${tool.name}</a></td>
    <td><p>${tool.description}</p></td></tr>`;
  });
  
  let finalCode = `<h2 class="subtitle">General Useful Language learning resources</h2>
  <table class="maintext">${toolsCode}</table>
  <h2 class="subtitle">My Youtube Playlist of Useful Language Learning Videos</h2>
  <a class="maintext" href="https://www.youtube.com/playlist?list=PLIZBk6JYalrlNJUuKT7cgK56IXfrrjB0P" target="_blank">https://www.youtube.com/playlist?list=PLIZBk6JYalrlNJUuKT7cgK56IXfrrjB0P</a>
  <div class="block"></div>`;
  
  document.getElementById("resources").innerHTML = finalCode;