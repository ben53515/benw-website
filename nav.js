let languageNames = ['english','spanish','french','mandarin'];
let dropdownInner = ``;
languageNames.forEach(language => {
    dropdownInner += `<li><a href="${language}.html" class="clickable"><img class="dropflag" src="img/${language}-flag.jpg">${language}</a></li>`;
});

let navCode = `
<div style="display: inline-block">
<!-- <h1 class="name">Ben Winfield</h1> -->
</div>
<div style="display: inline-block; width: 100%">
</div>
<div style="display: inline-block">
<nav role=navigation>
<ul>
<li><a class="navi clickable" href="index.html">Home</a></li>
<li class="dropdown">
    <a class="navi">Resources</a>
    <ul class="dropdown-content">
        <li class ="dropdown-inner">
          <a>Languages</a>
          <ul class="dropdown-content-inner">${dropdownInner}</ul>
        </li>
        <li><a class="clickable" href="tools.html">Tools</a></li>
    </ul>
</li>
<li><a class="navi clickable" href="about.html">About</a></li>
</ul>
</nav>
</div>
`;

document.getElementById("nav").innerHTML = navCode;

