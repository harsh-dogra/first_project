let PeopleOnBoat = 0;
let pos = 0;
let totalPersonleft = [3, 3];
let totalPersonright = [0, 0];
function myFunction(clickedId) {
  let clickedPerson = document.getElementById(clickedId);
  if (boat.contains(clickedPerson)) {
    if (
      (clickedId == 'saint1' ||
        clickedId == 'saint2' ||
        clickedId == 'saint3') &&
      pos === 0
    ) {
      document.getElementById('saintsPosLeft').appendChild(clickedPerson);
      PeopleOnBoat -= 1;
      totalPersonleft[0] += 1;
    } else if (
      (clickedId == 'can1' || clickedId == 'can2' || clickedId == 'can3') &&
      pos === 0
    ) {
      document.getElementById('canPosLeft').appendChild(clickedPerson);
      PeopleOnBoat -= 1;
      totalPersonleft[1] += 1;
    } else if (
      (clickedId == 'saint1' ||
        clickedId == 'saint2' ||
        clickedId == 'saint3') &&
      pos === 300
    ) {
      document.getElementById('saintsPosRight').appendChild(clickedPerson);
      PeopleOnBoat -= 1;
      totalPersonright[0] += 1;
    } else if (
      (clickedId == 'can1' || clickedId == 'can2' || clickedId == 'can3') &&
      pos === 300
    ) {
      document.getElementById('canPosRight').appendChild(clickedPerson);
      PeopleOnBoat -= 1;
      totalPersonright[1] += 1;
    }
  } else {
    if (
      PeopleOnBoat < 2 &&
      (clickedId == 'saint1' ||
        clickedId == 'saint2' ||
        clickedId == 'saint3') &&
      pos === 0
    ) {
      document.getElementById('boatArea').appendChild(clickedPerson);
      PeopleOnBoat += 1;
      totalPersonleft[0] -= 1;
    } else if (
      PeopleOnBoat < 2 &&
      (clickedId == 'can1' || clickedId == 'can2' || clickedId == 'can3') &&
      pos === 0
    ) {
      document.getElementById('boatArea').appendChild(clickedPerson);
      PeopleOnBoat += 1;
      totalPersonleft[1] -= 1;
    } else if (
      PeopleOnBoat < 2 &&
      (clickedId == 'saint1' ||
        clickedId == 'saint2' ||
        clickedId == 'saint3') &&
      pos === 300
    ) {
      document.getElementById('boatArea').appendChild(clickedPerson);
      PeopleOnBoat += 1;
      totalPersonright[0] -= 1;
    } else if (
      PeopleOnBoat < 2 &&
      (clickedId == 'can1' || clickedId == 'can2' || clickedId == 'can3') &&
      pos === 300
    ) {
      document.getElementById('boatArea').appendChild(clickedPerson);
      PeopleOnBoat += 1;
      totalPersonright[1] -= 1;
    }
  }
  console.log(totalPersonright[0] + ' ' + totalPersonright[1]);
  if (totalPersonright[0] === 3 && totalPersonright[1] === 3) {
    setTimeout(won, 1000);
  }
  function won() {
    alert('You Won');
    location.reload();
  }
}

function reloadFunction() {
  location.reload();
}

function moveFunction() {
  let countSL = (countSR = countCL = countCR = 0);
  let elem = document.getElementById('boatArea');
  if (pos === 0 && PeopleOnBoat > 0) {
    let id = setInterval(frame, 5);
    function frame() {
      if (pos == 300) {
        document.getElementById('rightGround').style.pointerEvents = 'auto';
        document.getElementById('leftGround').style.pointerEvents = 'none';
        clearInterval(id);
        countSR = countSL = countCR = countCL = 0;
        check(countSR, countSL, countCR, countCL);
      } else {
        pos++;
        elem.style.left = pos + 'px';
      }
    }
  } else if (pos === 300 && PeopleOnBoat > 0) {
    let id = setInterval(frame, 5);
    function frame() {
      if (pos == 0) {
        document.getElementById('leftGround').style.pointerEvents = 'auto';
        document.getElementById('rightGround').style.pointerEvents = 'none';
        clearInterval(id);
        countSR = countSL = countCR = countCL = 0;
        check(countSR, countSL, countCR, countCL);
      } else {
        pos--;
        elem.style.left = pos + 'px';
      }
    }
  }
}
function check(countSR, countSL, countCR, countCL) {
  if (
    boatArea.contains(document.getElementById('saint1')) ||
    saintsPosRight.contains(document.getElementById('saint1'))
  ) {
    countSR++;
  } else {
    countSL++;
  }
  if (
    boatArea.contains(document.getElementById('saint2')) ||
    saintsPosRight.contains(document.getElementById('saint2'))
  ) {
    countSR++;
  } else {
    countSL++;
  }
  if (
    boatArea.contains(document.getElementById('saint3')) ||
    saintsPosRight.contains(document.getElementById('saint3'))
  ) {
    countSR++;
  } else {
    countSL++;
  }
  if (
    boatArea.contains(document.getElementById('can1')) ||
    canPosRight.contains(document.getElementById('can1'))
  ) {
    countCR++;
  } else {
    countCL++;
  }
  if (
    boatArea.contains(document.getElementById('can2')) ||
    canPosRight.contains(document.getElementById('can2'))
  ) {
    countCR++;
  } else {
    countCL++;
  }
  if (
    boatArea.contains(document.getElementById('can3')) ||
    canPosRight.contains(document.getElementById('can3'))
  ) {
    countCR++;
  } else {
    countCL++;
  }
  if (
    (countSL < countCL && countSL > 0) ||
    (countSR < countCR && countSR > 0)
  ) {
    alert('You Lost');
    location.reload();
  }
}
