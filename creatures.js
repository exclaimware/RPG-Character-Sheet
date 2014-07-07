function Bothan(brawn,agility,intel,cunning,will,pres,species) {
	Species.call(this,brawn,agility,intel,cunning,will,pres);
	this.woundThres = 10 + this.speciesBrawn;
	this.strainThres = 11 + this.speciesWill;
	this.startXP = 100;
}
Bothan.prototype = new Species();
Bothan.prototype.constructor = Bothan;

function Droid(brawn,agility,intel,cunning,will,pres,species) {
	Species.call(this,brawn,agility,intel,cunning,will,pres);
	this.woundThres = 10 + this.speciesBrawn;
	this.strainThres = 10 + this.speciesWill;
	this.startXP = 175;
}
Droid.prototype = new Species();
Droid.prototype.constructor = Droid;

function Gand(brawn,agility,intel,cunning,will,pres,species) {
	Species.call(this,brawn,agility,intel,cunning,will,pres);
	this.woundThres = 10 + this.speciesBrawn;
	this.strainThres = 10 + this.speciesWill;
	this.startXP = 100;
}
Gand.prototype = new Species();
Gand.prototype.constructor = Gand;

function Human(brawn,agility,intel,cunning,will,pres,species) {
	Species.call(this,brawn,agility,intel,cunning,will,pres);
	this.woundThres = 10 + this.speciesBrawn;
	this.strainThres = 10 + this.speciesWill;
	this.startXP = 110;
}
Human.prototype = new Species();
Human.prototype.constructor = Human;

function Rodian(brawn,agility,intel,cunning,will,pres,species) {
	Species.call(this,brawn,agility,intel,cunning,will,pres);
	this.woundThres = 10 + this.speciesBrawn;
	this.strainThres = 10 + this.speciesWill;
	this.startXP = 100;
}
Rodian.prototype = new Species();
Rodian.prototype.constructor = Rodian;

function Trandoshan(brawn,agility,intel,cunning,will,pres,species) {
	Species.call(this,brawn,agility,intel,cunning,will,pres);
	this.woundThres = 12 + this.speciesBrawn;
	this.strainThres = 9 + this.speciesWill;
	this.startXP = 90;
}
Trandoshan.prototype = new Species();
Trandoshan.prototype.constructor = Trandoshan;

function Twilek(brawn,agility,intel,cunning,will,pres,species) {
	Species.call(this,brawn,agility,intel,cunning,will,pres);
	this.woundThres = 10 + this.speciesBrawn;
	this.strainThres = 11 + this.speciesWill;
	this.startXP = 100;
}
Twilek.prototype = new Species();
Twilek.prototype.constructor = Twilek;

function Wookie(brawn,agility,intel,cunning,will,pres,species) {
	Species.call(this,brawn,agility,intel,cunning,will,pres);
	this.woundThres = 14 + this.speciesBrawn;
	this.strainThres = 8 + this.speciesWill;
	this.startXP = 90;
}
Wookie.prototype = new Species();
Wookie.prototype.constructor = Wookie;
