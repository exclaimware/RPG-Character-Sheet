var obl = document.getElementById("obligation");
var oblButton = obl.getElementsByTagName("button")[0];
var oblContent = obl.getElementsByClassName('myObl')[0];
var speciesSelector = document.getElementById('species');
var careerSelector = document.getElementById('career');
var specSelector = document.getElementById('specializtion');
var woundThreshold = document.getElementById('woundThresh');
var woundSpan = woundThreshold.getElementsByTagName('span')[0];
var strainThreshold = document.getElementById('strainThresh');
var strainSpan = strainThreshold.getElementsByTagName('span')[0];
var stXPThreshold = document.getElementById('startingXp');
var stXPSpan = stXPThreshold.getElementsByTagName('span')[0];


var finalCareer = null;
var finalSpec = null;
var finalWound = 0;
var finalStrain = 0;
var startingXP = 0;

//Specializations
var spec_BH = ['Select Sub-Category',"Assassin","Gadgeteer","Survivalist"];
var spec_Col = ['Select Sub-Category',"Doctor","Politico","Scholor"];
var spec_Expl = ['Select Sub-Category',"Fringer","Scout","Trader"];
var spec_HG = ['Select Sub-Category',"Bodyguard","Marauder","Mercenary"];
var spec_Smug = ['Select Sub-Category',"Pilot","Scoundrel","Thief"];
var spec_Tech = ['Select Sub-Category',"Mechanic","Outlaw Tech","Slicer"];


// Dice Rolling function based on number of sides of dice (d6, d8, etc...)
function diceRoll(diceSide) {
	this.diceResult = Math.floor(Math.random() * (diceSide - 1 + 1) + 1);
	return this.diceResult;
}

//
//Choose Obligation
//

function getObligation() {
	diceRoll(100);
	if (diceResult < 9) {
		myObl = "Addiction";
	} else if (diceResult>8 && diceResult<17) {
		myObl = "Betrayal";
	} else if (diceResult>16 && diceResult<25) {
		myObl = "Blackmail";
	} else if (diceResult>24 && diceResult<33) {
		myObl = "Bounty";
	} else if (diceResult>32 && diceResult<41) {
		myObl = "Criminal";
	} else if (diceResult>40 && diceResult<49) {
		myObl = "Debt";
	} else if (diceResult>48 && diceResult<57) {
		myObl = "Dutybound";
	} else if (diceResult>56 && diceResult<65) {
		myObl = "Family";
	} else if (diceResult>64 && diceResult<73) {
		myObl = "Favor";
	} else if (diceResult>72 && diceResult<81) {
		myObl = "Oath";
	} else if (diceResult>80 && diceResult<89) {
		myObl = "Obsession";
	} else if (diceResult>88 && diceResult<97) {
		myObl = "Responsibilty";
	} else if (diceResult>96) {
		getObligation();
	}
	
	oblContent.textContent = myObl;
	oblButton.style.display = "none";
}
oblButton.addEventListener("click", function(){getObligation(100)},true);

//
//Choose Species
//

function chooseSpecies() {
	var speciesChoice = speciesSelector.options[speciesSelector.selectedIndex].text;
	switch (speciesChoice) {
	case "Bothan":
		var character = new Bothan(3,1,2,2,2,2);
		var args = Array.prototype.slice.call(arguments);
		console.log(args) // now .join works
		break;
	case "Droid":
		var character = new Droid(1,2,2,2,2,3);
		break;
	case "Gand":
		var character = new Gand(3,2,2,2,1,2);
		break;
	case "Human":
		var character = new Human(3,1,2,2,2,2);
		break;
	case "Rodian":
		var character = new Rodian(1,2,2,2,2,3);
		break;
	case "Trandoshan":
		var character = new Trandoshan(3,1,2,2,2,2);
		break;
	case "Twi'lek":
		var character = new Twilek(1,2,2,2,2,3);
		break;
	case "Wookie":
		var character = new Wookie(3,2,2,2,1,2);
		break;
	default:
	}		
	
	woundSpan.textContent = character.woundThres;
	strainSpan.textContent = character.strainThres;
	stXPSpan.textContent = character.startXP;
}

function Species(brawn,agility,intel,cunning,will,pres) {
	this.speciesBrawn = brawn;
	this.speciesAgility = agility;
	this.speciesIntel = intel;
	this.speciesCunning = cunning;
	this.speciesWill = will;
	this.speciesPresense = pres;
}

//
//Choose Career and Specialization
//

function chooseCareer() {
	var careerChoice = careerSelector.options[careerSelector.selectedIndex].text;
	var specArray = new Array();
	switch (careerChoice) {
	case "Bounty Hunter":
		specArray = spec_BH;
		break;
	case "Colonist":
		specArray = spec_Col;
		break;
	case "Explorer":
		specArray = spec_Expl;
		break;
	case "Hired Gun":
		specArray = spec_HG;
		break;
	case "Smuggler":
		specArray = spec_Smug;
		break;
	case "Technician":
		specArray = spec_Tech;
		break;
	default:
		alert('No selection'); 
		specArray = ['Catagory missing'];
	}		
	//Populate Specialization dropdown
    specSelector.options.length = 0;
    for (i=0; i<specArray.length; i++) {
      if (i == 0) {
  	  specSelector.options[specSelector.options.length] = new Option(specArray[i],null);
      } else {
        specSelector.options[specSelector.options.length] = new Option(specArray[i],specArray[i]);	  
      }
    } 
	
}

speciesSelector.addEventListener("change", chooseSpecies, true);
careerSelector.addEventListener("change", chooseCareer, true);
