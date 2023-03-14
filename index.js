// Solution to Scuber commands

function distanceFromHqInBlocks(block) {
  if (block >= 42) {
    return block - 42;
  } else if (block < 42) {
    return 42 - block;
  }

}


function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(a,b) {
  if (b >= a) {
    return (b - a) * 264;
  } else if (b < a) {
    return (a-b) * 264;
  }
}

function calculatesFarePrice(start, destination) {
  let mileAge = distanceTravelledInFeet(start,destination);
  if (mileAge <= 400) {
    return 0;
  }else if (mileAge >= 400 && mileAge <= 2000 ) {
    return (mileAge - 400) * 0.02;
  } else if (mileAge >= 2000 && mileAge <= 2500) {
    return 25;
  } else if (mileAge >2500) {
    return "cannot travel that far"

  }
}