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
//Derived Attributes Section
var attrBrawn = document.getElementById('brawn');
var attrBrawnSpan = attrBrawn.getElementsByTagName('span')[0];
var attrAgil = document.getElementById('agility');
var attrAgilSpan = attrAgil.getElementsByTagName('span')[0];
var attrIntel = document.getElementById('intel');
var attrIntelSpan = attrIntel.getElementsByTagName('span')[0];
var attrCunn = document.getElementById('cunning');
var attrCunnSpan = attrCunn.getElementsByTagName('span')[0];
var attrWill = document.getElementById('will');
var attrWillSpan = attrWill.getElementsByTagName('span')[0];
var attrPres = document.getElementById('pres');
var attrPresSpan = attrPres.getElementsByTagName('span')[0];


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

//Motivations
var primeMotivation = document.getElementById("motivation");
var pmButton = primeMotivation.getElementsByTagName("button")[0];
var pmContent = primeMotivation.getElementsByClassName('primeMotivation')[0];


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
		var character = new Bothan(1,2,2,3,2,2);
		break;
	case "Droid":
		var character = new Droid(1,1,1,1,1,1);
		break;
	case "Gand":
		var character = new Gand(2,2,2,2,3,1);
		break;
	case "Human":
		var character = new Human(2,2,2,2,2,2);
		break;
	case "Rodian":
		var character = new Rodian(2,3,2,2,1,2);
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
	attrBrawnSpan.textContent = character.speciesBrawn;
	attrAgilSpan.textContent = character.speciesAgility;
	attrIntelSpan.textContent = character.speciesIntel;
	attrCunnSpan.textContent = character.speciesCunning;
	attrWillSpan.textContent = character.speciesWill;
	attrPresSpan.textContent = character.speciesPresense;
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

//
//Select Talents based on available XP
//Reduce XP based on "cost" as talents are selected
//Tiers 2-5 should be disabled until at least one tier1 item is selected. Then enable tier 2. Tiers 3-5 disabled... etc...
//
function talentTiers () {
	var tier1 = document.getElementById("teir1");
	var tier2 = document.getElementById("teir2");
	var tier3 = document.getElementById("teir3");
	var tier4 = document.getElementById("teir4");
	var tier5 = document.getElementById("teir5");
	
}

//
//Choose Motivations
//FYI: I'm listing Specific Motivations BEFORE the primary motivation because the functions are called inside the prime motivation function
//Also wondering if I can combine these three secondary motivations into a single function...
//
function ambitionMotivation() {
	diceRoll(100);
	if (diceResult <= 10 ) {
		myAmb = "Friendship";
	} else if (diceResult>=11 && diceResult<=20) {
		myAmb = "Love";
	} else if (diceResult>=21 && diceResult<=30) {
		myAmb = "Freedom";
	} else if (diceResult>=31 && diceResult<=40) {
		myAmb = "Fame";
	} else if (diceResult>=41 && diceResult<=50) {
		myAmb = "Greed";
	} else if (diceResult>=51 && diceResult<=60) {
		myAmb = "Status";
	} else if (diceResult>=61 && diceResult<=70) {
		myAmb = "Expertise";
	} else if (diceResult>=71 && diceResult<=80) {
		myAmb = "Wanderlust/Novelty";
	} else if (diceResult>=81 && diceResult<=90) {
		myAmb = "Power";
	} else {
		myAmb = "Religion/Spirituality";
	}
}
function causesMotivation() {
	diceRoll(100);
	if (diceResult <= 10 ) {
		myAmb = "Religion/Spirituality";
	} else if (diceResult>=11 && diceResult<=20) {
		myAmb = "The Weak/Charity";
	} else if (diceResult>=21 && diceResult<=30) {
		myAmb = "Non-Human Rights";
	} else if (diceResult>=31 && diceResult<=40) {
		myAmb = "Local Politics";
	} else if (diceResult>=41 && diceResult<=50) {
		myAmb = "Overthrow the Empire";
	} else if (diceResult>=51 && diceResult<=60) {
		myAmb = "Crime";
	} else if (diceResult>=61 && diceResult<=70) {
		myAmb = "Emancipation";
	} else if (diceResult>=71 && diceResult<=80) {
		myAmb = "Droid Rights";
	} else if (diceResult>=81 && diceResult<=90) {
		myAmb = "Capitalism";
	} else {
		myAmb = "Support the Empire";
	}
}
function relationshipMotivation() {
	diceRoll(100);
	if (diceResult <= 10 ) {
		myAmb = "Place of Origin";
	} else if (diceResult>=11 && diceResult<=20) {
		myAmb = "Pet";
	} else if (diceResult>=21 && diceResult<=30) {
		myAmb = "Childhood Friend";
	} else if (diceResult>=31 && diceResult<=40) {
		myAmb = "Comrades";
	} else if (diceResult>=41 && diceResult<=50) {
		myAmb = "Sibling(s)";
	} else if (diceResult>=51 && diceResult<=60) {
		myAmb = "Mentor";
	} else if (diceResult>=61 && diceResult<=70) {
		myAmb = "Parents";
	} else if (diceResult>=71 && diceResult<=80) {
		myAmb = "Extended Family/Clan";
	} else if (diceResult>=81 && diceResult<=90) {
		myAmb = "Droid Companion";
	} else {
		myAmb = "Former Nemesis";
	}
}
function getMotivations() {
	diceRoll(10);
	if (diceResult < 4) {
		myPrimeMot = "Ambition";
		ambitionMotivation();
	} else if (diceResult>3 && diceResult<7) {
		myPrimeMot = "Cause";
		causesMotivation();
	} else if (diceResult>6 && diceResult<10) {
		myPrimeMot = "Relationship";
		relationshipMotivation();
	} else if (diceResult==10) {
		getMotivations();
	}
	
	pmContent.textContent = myPrimeMot + ": " + myAmb;
	pmButton.style.display = "none";
}
pmButton.addEventListener("click", function(){getMotivations(10)},true);