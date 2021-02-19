let websites = [
    { name: "Learning Chinese through Stories", url: "http://learningchinesethroughstories.com/", description: "Provides a lot of Listening resources for beginner and intermediate levels"},
    { name: "Mandarin Zone", url: "http://www.mandarinzone.com/100-frequently-chinese-character/", description: "Link is to list of 100 most frequent Chinese characters, useful for starting to learn to read"},
    { name: "Mandarin Corner", url: "https://mandarincorner.org/videos-by-student-level-and-subjects/", description: "Many useful audios for listening practice, largely for intermediate but some for beginner"},
    { name: "Chinese Dictionary", url: "https://chinese.yabla.com/chinese-english-pinyin-dictionary.php", description: "Very useful dictionary to find Chinese, English and Pinyin of words"}
    
];
let websitesCode = ``;
websites.forEach(website => {
  websitesCode += `<tr><td class="table-link"><a href="${website.url}" target="_blank">${website.name}</a></td>
  <td><p>${website.description}</p></td></tr>`;
});

let learningChannels = [
    { name: "Hit Chinese", url: "https://www.youtube.com/channel/UCv33mxPEDfd_Ee1pz1y8KLw", description: "Comprehensible input videos and Chinese explanations, lots of useful and enjoyable content"},
    { name: "Unconventional Chinese with Keren", url: "https://www.youtube.com/channel/UCxqLWT3swHvP9_4bv7Qssxw", description: "TPRS Comprehensible Input Listening practice in Chinese, already a lot of useful content and more being added consistently"},
    { name: "Shianguu Hsieh", url: "https://www.youtube.com/channel/UCNP3dWNYlGL7iX9HSmXMCtA", description: "Some amazing Comprehensible input videos for beginners, highly recommend to start"},
    { name: "SyS Mandarin", url: "https://www.youtube.com/channel/UCUjFsQAUUS1IFM7oyUXeB1g", description: "Uses authentic content and explains it thoroughly such as Stories, Speeches, Movies, giving lots of useful listening practice and vocabulary"}

];
let learningChannelsCode = ``;
learningChannels.forEach(learningChannel => {
  learningChannelsCode += `<tr><td class="table-link"><a href="${learningChannel.url}" target="_blank">${learningChannel.name}</a></td>
  <td><p>${learningChannel.description}</p></td></tr>`;
});

let channels = [
    { name: "XiaomaNYC", url: "https://www.youtube.com/channel/UCLNoXf8gq6vhwsrYp-l0J-Q", description: "Talks in Mandarin with a variety of people on the street"},
    { name: "口语老炮儿马思瑞Chris", url: "https://www.youtube.com/channel/UC8FnQA_ZSeHwxAX9igzyeCg", description: "Teaches Chinese students English but useful tips and listening practice"}

];
let channelsCode = ``;
channels.forEach(channel => {
channelsCode += `<tr><td class="table-link"><a href="${channel.url}" target="_blank">${channel.name}</a></td>
<td><p>${channel.description}</p></td></tr>`;
});

let mandarinCode = `<div class="content">
<h2 class="subtitle">Websites</h2>
<table class="maintext">${websitesCode}</table>
<h2 class="subtitle">Youtube</h2>
<p class="subtitle">Channels for Learning Mandarin</p>
<table class="maintext">${learningChannelsCode}</table>
<p class="subtitle">Interesting Mandarin Channels (Recommend for Upper intermediate+, or lower levels who prefer listening to content made for natives)</p>
<table class="maintext">${channelsCode}</table>`;

document.getElementById("innerBody").innerHTML = mandarinCode;