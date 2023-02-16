const files = new Map([
  ["The Scuffed Series - A Clickers Nightmare", "ScuffedSeries_1_ClickersNightmare"],
]);

files.forEach(generateHTML);

function generateHTML(key, value) {
  document.getElementById("download-section").innerHTML = '\n<hr>\n\n<h2>' + key + '</h2><p>Hover over shapes and press the matching buttons to destroy them. Pressing the correct button awards points while pressing the wrong button costs a live. The goal is to break your highscore.</p><div class="download"><a href="' + value + '.zip' + '" download><button type="button" class="download-button">Download</button></a></div>'
}
