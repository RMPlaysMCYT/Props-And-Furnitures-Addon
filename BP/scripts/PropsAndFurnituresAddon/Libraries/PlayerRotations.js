const PafaPlayerTo90DegreeRotations = {
  1: 180,
  4: -90,
  2: 0,
  3: 90,
};

function pafagetOrientationRotation(playerRotationY) {
  switch (true) {
    case playerRotationY > 70 && playerRotationY < 170:
      return 4;
    case playerRotationY > -45 && playerRotationY < 65:
      return 1;
    case playerRotationY > -100 && playerRotationY < -10:
      return 3;
    case playerRotationY >= 148 || playerRotationY < -100:
      return 2;
  }
}

export {
    pafagetOrientationRotation,
    PafaPlayerTo90DegreeRotations
}