console.log(SolarSystem);

console.log("Planets:", SolarSystem.getPlanets());
console.log(SolarSystem.setPlanets("Alderaan", "Hoth"));
console.log("Planets:", SolarSystem.getPlanets());

console.log("Spacecraft:", SolarSystem.getActiveSpacecraft());
console.log(SolarSystem.setActiveSpacecraft("Millenium Falcon", "X-wing"));
console.log("Spacecraft:", SolarSystem.getActiveSpacecraft());

console.log("Planets Visited: ", SolarSystem.getPlanetsLandedOn());
console.log(SolarSystem.setPlanetsLandedOn(4));
console.log("Planets Visited: ", SolarSystem.getPlanetsLandedOn());