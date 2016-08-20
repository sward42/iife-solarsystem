//1. public property for holding the last modified date
//2. write getter/setter for planets
//3. getter/setter for activeSpacecraft
//4. getter/setter for planetsLandedOn

var SolarSystem = (function(){
	var planets = ["Mercury", "Venus", "Earth", "Mars", "Saturn", "Neptune", "Jupiter", "Uranus"];
	var activeSpacecraft = ["Space Station", "Rocket Ship", "Probe", "Hubble Telescope"];
	var planetsLandedOn = 0;


	return {

		modified_date: new Date(),

		getPlanets: function(){
			return planets;
		},

		setPlanets: function(newPlanets){
			planets.push(newPlanets);
		},
		getActiveSpacecraft: function(){
			return activeSpacecraft;
		},
		setActiveSpacecraft: function(newSpacecraft){
			activeSpacecraft.push(newSpacecraft);
		},
		getPlanetsLandedOn: function(){
			return planetsLandedOn;
		},
		setPlanetsLandedOn: function(newLandings){
			planetsLandedOn = newLandings;
		}
		

	}
})();