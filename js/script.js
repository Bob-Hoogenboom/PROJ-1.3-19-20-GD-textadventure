const divLocation = document.getElementById('location');
const myPossibilities = document.getElementById('possibilities');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');
const myDescription = document.getElementById('description');
const myInventory = document.getElementById('inventory');
const myItem = document.getElementById('item');

let currentLocation = 340;

let locations = [];
locations[110] = "";
locations[140] = "";
locations[150] = "";
locations[160] = "";
locations[210] = "";
locations[220] = "";
locations[230] = "";
locations[240] = "";
locations[250] = "";
locations[270] = "";
locations[320] = "";
locations[330] = "";
locations[340] = "";
locations[350] = "";
locations[360] = "";
locations[370] = "";
locations[420] = "";
locations[440] = "";
locations[450] = "";
locations[460] = "";
locations[520] = "";
locations[530] = "";
locations[560] = "";
locations[570] = "";

descriptions = [];
descriptions[340] = "B";
descriptions[110] = "YOU FOUND THE LANTERN!";

images = [];
images[110] = "A-5.jpg";      //dead_end_J
images[140] = "D-5.jpg";      //dead_end_M
images[150] = "E-5.jpg";      //
images[160] = "F-5.jpg";      //dead_end_U
images[210] = "A-4.jpg";      //
images[220] = "B-4.jpg";      //                  *****
images[230] = "C-4.jpg";      //dead_end_N
images[240] = "D-4.jpg";      //
images[250] = "E-4.jpg";      //
images[270] = "G-4.jpg";      //dead_end_X
images[320] = "B-3.jpg";      //
images[330] = "C-3.jpg";      //
images[340] = "D-3.jpg";      //start_B
images[350] = "E-3.jpg";      //
images[360] = "F-3.jpg";      //
images[370] = "G-3.jpg";      //
images[420] = "B-2.jpg";      //
images[440] = "D-2.jpg";      //Final_Door_K
images[450] = "E-2.jpg";      //                 ******
images[460] = "F-2.jpg";      //
images[520] = "B-1.jpg";      //
images[530] = "C-1.jpg";      //dead_end_G
images[560] = "F-1.jpg";      //
images[570] = "G-1.jpg";      //dead_end_R

directions = [];
directions[110] = ["North"];
directions[140] = ["North"];
directions[150] = ["North", "East"];
directions[160] = ["West"];
directions[210] = ["East", "South"];
directions[220] = ["North", "West"];
directions[230] = ["East"];
directions[240] = ["North", "South", "West"];
directions[250] = ["North", "South"];
directions[270] = ["North"];
directions[320] = ["North", "East", "South"];
directions[330] = ["East", "West"];
directions[340] = ["East", "South", "West"];            //start_B
directions[350] = ["North", "East", "South", "West"];
directions[360] = ["East", "West"];
directions[370] = ["South", "West"];
directions[420] = ["North", "South"];
directions[440] = ["South"];                            //Final_Door_K
directions[450] = ["East", "South"];
directions[460] = ["North", "West"];
directions[520] = ["East", "South"];
directions[530] = ["West"];
directions[560] = ["East", "South"];
directions[570] = ["West"];

itemImage = [];
itemImage[110] = "Lantern.jpg";                //dead_end_J

item = [];
item[110] = "LIGHT!";


myInput.addEventListener('keydown', getInput, false);

function getInput(evt) {
  if (evt.key == "Enter") {
    let inputArray = myInput.value.split(" ");

    if (inputArray[0] == "ga") {
      if (directions[currentLocation].indexOf(inputArray[1]) != -1) {
        switch (inputArray[1]) {
          case "North":
            currentLocation += 100;
            break;
          case "South":
            currentLocation -= 100;
            break;
          case "East":
            currentLocation += 10;
            break;
          case "West":
            currentLocation -= 10;
            break;
        }
      } else {
        feedback.innerHTML = "dat mag niet";
        setTimeout(removeFeedback, 2000);

      }
      giveLocation();
      myInput.value = "";
    }

    if (inputArray[0] == "pak") {
      console.log('ga wat pakken');
      myInput.value = "";
      directions[340] = ["North", "East", "South", "West"]  //start_B
    }

    if (inputArray[0] == "gebruik"){
      console.log('ga wat gebruiken');
      myInput.value = "";
    }

    if (inputArray[0] != "ga" && inputArray[0] != "pak" && inputArray[0] != "gebruik" ){
      feedback.innerHTML = "mogelijke commando's zijn: ga, pak, gebruik en help";
      myInput.value = "";
      setTimeout(removeFeedback, 4000);
    }

  }
}

function giveLocation() {
  divLocation.innerHTML = locations[currentLocation];
  myDescription.innerHTML = descriptions[currentLocation];
  imageLocation.src = "Dungeon image/" + images[currentLocation];
  myDirections = "mogelijke richtingen zijn: ";
  for (let i = 0; i < directions[currentLocation].length; i++) {
    myDirections += "<li>" + directions[currentLocation][i] + "</li>";
  }
  myPossibilities.innerHTML = myDirections;
  myInventory.innerHTML = "uw inventory is leeg";
showItem(currentLocation);
}


function removeFeedback() {
  feedback.innerHTML = "";
}

function showItem(currentLocation){
  if(typeof itemImage[currentLocation] != "undefined")
  {
    console.log(itemImage[currentLocation]);
    myItem.src ="Dungeon image/" + itemImage[currentLocation];
  }
}

giveLocation();
