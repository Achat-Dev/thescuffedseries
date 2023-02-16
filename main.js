const files = [
  "ScuffedSeries_1_ClickersNightmare"
];

files.forEach(generateHTML);

function generateHTML(item) {
  document.getElementById("download-section").innerHTML = '\n<hr>\n\n<h2>The Scuffed Series - A Clickers Nightmare</h3><p>Hover over shapes and press the matching buttons to destroy them. Pressing the correct button awards points while pressing the wrong button costs a live. The goal is to break your highscore.</p><div class="download"><a href="' + item + '.zip' + '" download><button type="button" class="download-button">Download</button></a></div>'
}
