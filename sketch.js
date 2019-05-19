var regexp = 'GA ROADWAY FATALITIES'
var des
var newNum, num, outputNum = 0

//load our data
function preload() {
  json = loadJSON('data.json');
}

function setup() {
  //latest version
  console.log(json.rss.channel.pubDate);
  //search through the first 1000 items to see if there is any new data
  for (i = 0; i < 1000; i++) {
    try { // grab number if one is present
      if (match(json.rss.channel.item[i].description, regexp)) {
        des = json.rss.channel.item[i].description
        var s2 = splitTokens(des, ["<br>", " "]);
        newNum = int(s2[5]);
        break;
      }
    } catch (err) { //print no new data if no new data
      //console.log("no new data");
    }
  }
  if (newNum != num) {
    outputNum = newNum;
  }
  console.log(outputNum);
}

function draw() {

}