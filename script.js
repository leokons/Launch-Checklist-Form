// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        //console.log(response)
        response.json().then( function(json) {
            const target = document.getElementById("missionTarget");
            let random = Math.floor(Math.random()*(5-0+1))+0;        //random 0-5
            let mission = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[random].name}</li>
               <li>Diameter: ${json[random].diameter}</li>
               <li>Star: ${json[random].star}</li>
               <li>Distance from Earth: ${json[random].distance}</li>
               <li>Number of Moons: ${json[random].moons}</li>
            </ol>
            <img src="${json[random].image}">`;
            target.innerHTML = mission;
         })
      })
   
   
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      
      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         
      }
      // if (isNaN(parseInt(pilotNameInput.value, 10))===false || isNaN(parseInt(copilotNameInput.value, 10))===false) {
      //    alert("Pilot and Co-pilot names should be strings");
      //    event.preventDefault();
      // }
      if (/[0-9]/.test(pilotNameInput.value) || /[0-9]/.test(copilotNameInput.value)) {
         alert("Pilot and Co-pilot names should be strings");
         event.preventDefault();
      }
      if (/[a-z]/i.test(fuelLevelInput.value) || /[a-z]/i.test(cargoMassInput.value)) {
         alert("Fuel Level and Cargo Mass should be numbers");
         event.preventDefault();
      }

      const div = document.getElementById("faultyItems");
      const status = document.getElementById("launchStatus");
      let temp;
   
   if (fuelLevelInput.value==="" || cargoMassInput.value==="") {
      div.style.visibility='hidden';

   } else if (fuelLevelInput.value < 10000) {
      div.style.visibility='visible';
      status.innerHTML = "Shuttle not ready for launch";
      status.style.color = "red";
      temp = `<div>
         <ol>
            <li id="pilotStatus">Pilot ${pilotNameInput.value} is ready for launch</li>
            <li id="copilotStatus">Co-pilot ${copilotNameInput.value} is ready for launch</li>
            <li id="fuelStatus">Fuel level too low for launch</li>
            <li id="cargoStatus">Cargo mass low enough for launch</li>
         </ol>
      </div>`
      div.innerHTML = temp;
   
   } else if (cargoMassInput.value > 10000) {
      div.style.visibility='visible';
      status.innerHTML = "Shuttle not ready for launch";
      status.style.color = "red";
      temp = `<div>
         <ol>
            <li id="pilotStatus">Pilot ${pilotNameInput.value} is ready for launch</li>
            <li id="copilotStatus">Co-pilot ${copilotNameInput.value} is ready for launch</li>
            <li id="fuelStatus">Fuel level high enough for launch</li>
            <li id="cargoStatus">Cargo mass too high for launch</li>
         </ol>
      </div>`
      div.innerHTML = temp;
   
   } else {
      div.style.visibility='visible';
      status.innerHTML = "Shuttle is ready for launch";
      status.style.color = "green";
      temp = `<div>
         <ol>
            <li id="pilotStatus">Pilot ${pilotNameInput.value} is ready for launch</li>
            <li id="copilotStatus">Co-pilot ${copilotNameInput.value} is ready for launch</li>
            <li id="fuelStatus">Fuel level high enough for launch</li>
            <li id="cargoStatus">Cargo mass low enough for launch</li>
         </ol>
      </div>`
   }
   
});
   
});