/*
This function simulates an elevator system.

The elevator starts at floor 0.
Based on the starting floor and the destination floor,
it should move up or down accordingly.

The function should determine the direction of movement
and simulate the elevator reaching the desired floor.

For example: 
const start = 0
const end = 3
goToLevel(startFloor, FinalPosition) => return 3

const start = 3
const end = 0
goToLevel(startFloor, FinalPosition) => return -3
*/
// Cette fonction simule un système d'ascenseur.
// L'ascenseur démarre à l'étage 0.
// En fonction de l'étage de départ et de l'étage de destination,
// il doit monter ou descendre en conséquence.
// La fonction doit déterminer la direction du mouvement
// et simuler l'ascenseur atteignant l'étage souhaité.
// Par exemple :
// const start = 0
// const end = 3
// goToLevel(startFloor, FinalPosition) => retourne 3
// const start = 3
// const end = 0
// goToLevel(startFloor, FinalPosition) => retourne -3
export const goToLevel = (startFloor, FinalPosition) => {
  if (startFloor < 0 || startFloor > 5) {
    return 0;
  } else if (FinalPosition < 0 || FinalPosition > 5) {
    return 0;
  } else if (startFloor === FinalPosition) {
    return 0;
  }
  return FinalPosition - startFloor;
};
