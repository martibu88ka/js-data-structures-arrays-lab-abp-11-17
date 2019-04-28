// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(Ralph){
drivers.splice(3,0,"Ralph");
}
function destructivelyPrependDriver(Bob){
  drivers.splice(0,0,"Bob");
}
function destructivelyRemoveLastDriver(){
  drivers.splice(-1);
}
function destructivelyRemoveFirstDriver(){
  drivers.shift(1);
}
function appendDriver(Broom){
  const appendDriver = [ "Broom"... drivers];
}
