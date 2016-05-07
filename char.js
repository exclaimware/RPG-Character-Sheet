var speciesSelector = document.getElementById('species');
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





// Dice Rolling function based on number of sides of dice (d6, d8, etc...)
function diceRoll(diceSide) {
    this.diceResult = Math.floor(Math.random() * (diceSide - 1 + 1) + 1);
    return this.diceResult;
}

//
//Choose Obligation
//

const Obligations = {

    init: function() {
        this.obl = document.getElementById("obligation");
        this.oblButton = this.obl.getElementsByTagName("button")[0];
        this.oblContent = this.obl.getElementsByClassName('myObl')[0];
        this.bindEvents();
    },

    bindEvents: function() {
        var self = this;
        self.oblButton.addEventListener("click", function() {
            self.getObligation(100)
        }, true);
    },

    getObligation: function() {
        diceRoll(100);
        if (diceResult < 9) {
            myObl = "Addiction";
        } else if (diceResult > 8 && diceResult < 17) {
            myObl = "Betrayal";
        } else if (diceResult > 16 && diceResult < 25) {
            myObl = "Blackmail";
        } else if (diceResult > 24 && diceResult < 33) {
            myObl = "Bounty";
        } else if (diceResult > 32 && diceResult < 41) {
            myObl = "Criminal";
        } else if (diceResult > 40 && diceResult < 49) {
            myObl = "Debt";
        } else if (diceResult > 48 && diceResult < 57) {
            myObl = "Dutybound";
        } else if (diceResult > 56 && diceResult < 65) {
            myObl = "Family";
        } else if (diceResult > 64 && diceResult < 73) {
            myObl = "Favor";
        } else if (diceResult > 72 && diceResult < 81) {
            myObl = "Oath";
        } else if (diceResult > 80 && diceResult < 89) {
            myObl = "Obsession";
        } else if (diceResult > 88 && diceResult < 97) {
            myObl = "Responsibilty";
        } else if (diceResult > 96) {
            var ob1 = getObligation();
            var ob2 = getObligation();
            myObl = ob1 + " " + ob2;
        }

        this.oblContent.textContent = myObl;
        this.oblButton.style.display = "none";
    }
};

//
//Choose Species
//

// const NewSpecies = {

//     init: function() {
//         this.speciesSelector = document.getElementById('species');
//         this.woundThreshold = document.getElementById('woundThresh');
//         this.woundSpan = this.woundThreshold.getElementsByTagName('span')[0];
//         this.strainThreshold = document.getElementById('strainThresh');
//         this.strainSpan = this.strainThreshold.getElementsByTagName('span')[0];
//         this.stXPThreshold = document.getElementById('startingXp');
//         this.stXPSpan = this.stXPThreshold.getElementsByTagName('span')[0];        

//         this.bindEvents();
//     },

//     bindEvents: function() {
//         var self = this;

//         self.speciesSelector.addEventListener("change", function() {
//         	self.speciesChoice = self.speciesSelector.options[self.speciesSelector.selectedIndex].text;
//             self.chooseSpecies();
//         }, true);
//     },

//     chooseSpecies: function() {
//     	var self = this;
//     	console.log(self.Species());
//         switch (self.speciesChoice) {
//             case "Bothan":
// 	            this.Bothan.prototype = new self.Species;
// 	            this.Bothan.prototype.constructor = self.Bothan;
//                 console.log(self.Bothan);
//                 var character = new self.Bothan(1, 2, 2, 3, 2, 2);
//                 break;
//             case "Droid":
//                 var character = new Droid(1, 1, 1, 1, 1, 1);
//                 break;
//             case "Gand":
//                 var character = new Gand(2, 2, 2, 2, 3, 1);
//                 break;
//             case "Human":
//                 var character = new Human(2, 2, 2, 2, 2, 2);
//                 break;
//             case "Rodian":
//                 var character = new Rodian(2, 3, 2, 2, 1, 2);
//                 break;
//             case "Trandoshan":
//                 var character = new Trandoshan(3, 1, 2, 2, 2, 2);
//                 break;
//             case "Twi'lek":
//                 var character = new Twilek(1, 2, 2, 2, 2, 3);
//                 break;
//             case "Wookie":
//                 var character = new Wookie(3, 2, 2, 2, 1, 2);
//                 break;
//             default:
//         }

//         this.woundSpan.textContent = character.woundThres;
//         this.strainSpan.textContent = character.strainThres;
//         this.stXPSpan.textContent = character.startXP;
//         this.attrBrawnSpan.textContent = character.speciesBrawn;
//         this.attrAgilSpan.textContent = character.speciesAgility;
//         this.attrIntelSpan.textContent = character.speciesIntel;
//         this.attrCunnSpan.textContent = character.speciesCunning;
//         this.attrWillSpan.textContent = character.speciesWill;
//         this.attrPresSpan.textContent = character.speciesPresense;
//     },

//     Species: function(brawn, agility, intel, cunning, will, pres) {
//     	var self = this;
//         self.speciesBrawn = brawn;
//         self.speciesAgility = agility;
//         self.speciesIntel = intel;
//         self.speciesCunning = cunning;
//         self.speciesWill = will;
//         self.speciesPresense = pres;
//     },

//     Bothan: function(brawn, agility, intel, cunning, will, pres, species) {
//     	var self = this;
//         self.Species.call(self, brawn, agility, intel, cunning, will, pres);
//         this.woundThres = 10 + this.speciesBrawn;
//         this.strainThres = 11 + this.speciesWill;
//         this.startXP = 100;
//     },

//     Droid: function(brawn, agility, intel, cunning, will, pres, species) {
//         Species.call(this, brawn, agility, intel, cunning, will, pres);
//         this.woundThres = 10 + this.speciesBrawn;
//         this.strainThres = 10 + this.speciesWill;
//         this.startXP = 175;
//     },

//     Gand: function(brawn, agility, intel, cunning, will, pres, species) {
//         Species.call(this, brawn, agility, intel, cunning, will, pres);
//         this.woundThres = 10 + this.speciesBrawn;
//         this.strainThres = 10 + this.speciesWill;
//         this.startXP = 100;
//     },

//     Human: function(brawn, agility, intel, cunning, will, pres, species) {
//         Species.call(this, brawn, agility, intel, cunning, will, pres);
//         this.woundThres = 10 + this.speciesBrawn;
//         this.strainThres = 10 + this.speciesWill;
//         this.startXP = 110;
//     },

//     Rodian: function(brawn, agility, intel, cunning, will, pres, species) {
//         Species.call(this, brawn, agility, intel, cunning, will, pres);
//         this.woundThres = 10 + this.speciesBrawn;
//         this.strainThres = 10 + this.speciesWill;
//         this.startXP = 100;
//     },

//     Trandoshan: function(brawn, agility, intel, cunning, will, pres, species) {
//         Species.call(this, brawn, agility, intel, cunning, will, pres);
//         this.woundThres = 12 + this.speciesBrawn;
//         this.strainThres = 9 + this.speciesWill;
//         this.startXP = 90;
//     },

//     Twilek: function(brawn, agility, intel, cunning, will, pres, species) {
//         Species.call(this, brawn, agility, intel, cunning, will, pres);
//         this.woundThres = 10 + this.speciesBrawn;
//         this.strainThres = 11 + this.speciesWill;
//         this.startXP = 100;
//     },

//     Wookie: function(brawn, agility, intel, cunning, will, pres, species) {
//         Species.call(this, brawn, agility, intel, cunning, will, pres);
//         this.woundThres = 14 + this.speciesBrawn;
//         this.strainThres = 8 + this.speciesWill;
//         this.startXP = 90;
//     }

// };

function chooseSpecies() {
    var speciesChoice = speciesSelector.options[speciesSelector.selectedIndex].text;
    switch (speciesChoice) {
        case "Bothan":
            var character = new Bothan(1, 2, 2, 3, 2, 2);
            break;
        case "Droid":
            var character = new Droid(1, 1, 1, 1, 1, 1);
            break;
        case "Gand":
            var character = new Gand(2, 2, 2, 2, 3, 1);
            break;
        case "Human":
            var character = new Human(2, 2, 2, 2, 2, 2);
            break;
        case "Rodian":
            var character = new Rodian(2, 3, 2, 2, 1, 2);
            break;
        case "Trandoshan":
            var character = new Trandoshan(3, 1, 2, 2, 2, 2);
            break;
        case "Twi'lek":
            var character = new Twilek(1, 2, 2, 2, 2, 3);
            break;
        case "Wookie":
            var character = new Wookie(3, 2, 2, 2, 1, 2);
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

function Species(brawn, agility, intel, cunning, will, pres) {
    this.speciesBrawn = brawn;
    this.speciesAgility = agility;
    this.speciesIntel = intel;
    this.speciesCunning = cunning;
    this.speciesWill = will;
    this.speciesPresense = pres;
}
speciesSelector.addEventListener("change", chooseSpecies, true);




//
//Choose Career and Specialization
//

const Careers = {
    init: function() {
        this.careerSelector = document.getElementById('career');
        this.specSelector = document.getElementById('specializtion');

        //Specializations
        this.spec_BH = ['Select Sub-Category', "Assassin", "Gadgeteer", "Survivalist"];
        this.spec_Col = ['Select Sub-Category', "Doctor", "Politico", "Scholor"];
        this.spec_Expl = ['Select Sub-Category', "Fringer", "Scout", "Trader"];
        this.spec_HG = ['Select Sub-Category', "Bodyguard", "Marauder", "Mercenary"];
        this.spec_Smug = ['Select Sub-Category', "Pilot", "Scoundrel", "Thief"];
        this.spec_Tech = ['Select Sub-Category', "Mechanic", "Outlaw Tech", "Slicer"];

        this.bindEvents();
    },

    bindEvents: function() {
        var self = this;

        self.careerSelector.addEventListener("change", function() {
            self.chooseCareer();
        }, true);
    },

    chooseCareer: function() {
        var self = this;
        var careerChoice = self.careerSelector.options[self.careerSelector.selectedIndex].text;
        var specArray = [];
        switch (careerChoice) {
            case "Bounty Hunter":
                specArray = self.spec_BH;
                break;
            case "Colonist":
                specArray = self.spec_Col;
                break;
            case "Explorer":
                specArray = self.spec_Expl;
                break;
            case "Hired Gun":
                specArray = self.spec_HG;
                break;
            case "Smuggler":
                specArray = self.spec_Smug;
                break;
            case "Technician":
                specArray = self.spec_Tech;
                break;
            default:
                alert('No selection');
                specArray = [];
        }
        //Populate Specialization dropdown
        self.specSelector.options.length = 0;
        for (i = 0; i < specArray.length; i++) {
            if (i === 0) {
                self.specSelector.options[self.specSelector.options.length] = new Option(specArray[i], null);
            } else {
                self.specSelector.options[self.specSelector.options.length] = new Option(specArray[i], specArray[i]);
            }
        }

    }
};

//
//Select Talents based on available XP
//Reduce XP based on "cost" as talents are selected
//Tiers 2-5 should be disabled until at least one tier1 item is selected. Then enable tier 2. Tiers 3-5 disabled... etc...
//
const Talents = {

    init: function() {
        this.tier1 = document.getElementById("teir1");
        this.tier2 = document.getElementById("teir2");
        this.tier3 = document.getElementById("teir3");
        this.tier4 = document.getElementById("teir4");
        this.tier5 = document.getElementById("teir5");

    }
};

//
//Choose Motivations
//FYI: I'm listing Specific Motivations BEFORE the primary motivation because the functions are called inside the prime motivation function
//Also wondering if I can combine these three secondary motivations into a single function...
//
const Motivations = {

    init: function() {

        //Motivations
        this.primeMotivation = document.getElementById("motivation");
        this.pmButton = this.primeMotivation.getElementsByTagName("button")[0];
        this.pmContent = this.primeMotivation.getElementsByClassName('primeMotivation')[0];

        this.bindEvents();

    },

    bindEvents: function() {
        var self = this;

        self.pmButton.addEventListener("click", function() { 
        	self.getMotivations(10) 
        }, true);
    },

    ambitionMotivation: function() {
        diceRoll(100);
        if (diceResult <= 10) {
            myAmb = "Friendship";
        } else if (diceResult >= 11 && diceResult <= 20) {
            myAmb = "Love";
        } else if (diceResult >= 21 && diceResult <= 30) {
            myAmb = "Freedom";
        } else if (diceResult >= 31 && diceResult <= 40) {
            myAmb = "Fame";
        } else if (diceResult >= 41 && diceResult <= 50) {
            myAmb = "Greed";
        } else if (diceResult >= 51 && diceResult <= 60) {
            myAmb = "Status";
        } else if (diceResult >= 61 && diceResult <= 70) {
            myAmb = "Expertise";
        } else if (diceResult >= 71 && diceResult <= 80) {
            myAmb = "Wanderlust/Novelty";
        } else if (diceResult >= 81 && diceResult <= 90) {
            myAmb = "Power";
        } else {
            myAmb = "Religion/Spirituality";
        }
    },

    causesMotivation: function() {
        diceRoll(100);
        if (diceResult <= 10) {
            myAmb = "Religion/Spirituality";
        } else if (diceResult >= 11 && diceResult <= 20) {
            myAmb = "The Weak/Charity";
        } else if (diceResult >= 21 && diceResult <= 30) {
            myAmb = "Non-Human Rights";
        } else if (diceResult >= 31 && diceResult <= 40) {
            myAmb = "Local Politics";
        } else if (diceResult >= 41 && diceResult <= 50) {
            myAmb = "Overthrow the Empire";
        } else if (diceResult >= 51 && diceResult <= 60) {
            myAmb = "Crime";
        } else if (diceResult >= 61 && diceResult <= 70) {
            myAmb = "Emancipation";
        } else if (diceResult >= 71 && diceResult <= 80) {
            myAmb = "Droid Rights";
        } else if (diceResult >= 81 && diceResult <= 90) {
            myAmb = "Capitalism";
        } else {
            myAmb = "Support the Empire";
        }
    },

    relationshipMotivation: function() {
        diceRoll(100);
        if (diceResult <= 10) {
            myAmb = "Place of Origin";
        } else if (diceResult >= 11 && diceResult <= 20) {
            myAmb = "Pet";
        } else if (diceResult >= 21 && diceResult <= 30) {
            myAmb = "Childhood Friend";
        } else if (diceResult >= 31 && diceResult <= 40) {
            myAmb = "Comrades";
        } else if (diceResult >= 41 && diceResult <= 50) {
            myAmb = "Sibling(s)";
        } else if (diceResult >= 51 && diceResult <= 60) {
            myAmb = "Mentor";
        } else if (diceResult >= 61 && diceResult <= 70) {
            myAmb = "Parents";
        } else if (diceResult >= 71 && diceResult <= 80) {
            myAmb = "Extended Family/Clan";
        } else if (diceResult >= 81 && diceResult <= 90) {
            myAmb = "Droid Companion";
        } else {
            myAmb = "Former Nemesis";
        }
    },

    getMotivations: function() {
    	var self = this;
        diceRoll(10);
        if (diceResult < 4) {
            myPrimeMot = "Ambition";
            self.ambitionMotivation();
        } else if (diceResult > 3 && diceResult < 7) {
            myPrimeMot = "Cause";
            self.causesMotivation();
        } else if (diceResult > 6 && diceResult < 10) {
            myPrimeMot = "Relationship";
            self.relationshipMotivation();
        } else if (diceResult == 10) {
            self.getMotivations();
        }

        self.pmContent.textContent = myPrimeMot + ": " + myAmb;
        self.pmButton.style.display = "none";
    }

};



//
// Gear - (Coming Soon) 
// this is just a small sample - I have no intention of including the entire selection of weapons, armor, etc..
// need to add section for starting money
// Need to reduce amount of money based on gear selected
//


Obligations.init();
// NewSpecies.init();
Careers.init();
Talents.init();
Motivations.init();