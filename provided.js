// Variables for testing.
let _TESTING = false;
let _mockWidthRoom1;
let _mockWidthRoom2;
let _mockLengthRoom1;
let _mockLengthRoom2;

// Returns true if the room number is either 1 or 2.  Otherwise, logs an error message to the console and returns false.
function validateRoomNumber(functionName, roomNumber) {
  if (typeof roomNumber == "undefined") {
    console.log(
      `Looks like you called ${functionName} without a supplying a parameter.  Try calling the function with a room number like '${functionName}(1)'.`
    );
    return false;
  }
  if (typeof roomNumber == "string") {
    console.log(
      `Looks like you called ${functionName} using a string (like "1" or "2").  Try removing the double quotes when calling the function like '${functionName}(1)'.`
    );
    return false;
  }
  if (typeof roomNumber != "number" || (roomNumber != 1 && roomNumber != 2)) {
    console.log(
      `Looks like you called ${functionName} with a parameter other than 1 or 2.  There are only two rooms!.`
    );
    return false;
  }
  return true;
}

function validateResult(functionName, result) {
  if (typeof result == "undefined") {
    console.log(
      `Looks like you called ${functionName} without a supplying a parameter.  Try calling the function with number like '${functionName}(5)' or '${functionName}(area)'.`
    );
    return false;
  }

  return true;
}

function getRoomWidth(roomNumber) {
  if (!validateRoomNumber("getRoomWidth", roomNumber)) {
    return 0;
  }

  if (_TESTING) {
    if (roomNumber == 1) {
      return _mockWidthRoom1;
    } else {
      return _mockWidthRoom2;
    }
  }

  let roomWidthId = `width-room-${roomNumber}`;
  let roomWidthElement = document.getElementById(roomWidthId);
  return Number(roomWidthElement.value);
}

function getRoomLength(roomNumber) {
  if (!validateRoomNumber("getRoomLength", roomNumber)) {
    return 0;
  }

  if (_TESTING) {
    if (roomNumber == 1) {
      return _mockLengthRoom1;
    } else {
      return _mockLengthRoom2;
    }
  }

  let roomWidthId = `length-room-${roomNumber}`;
  let roomWidthElement = document.getElementById(roomWidthId);
  return Number(roomWidthElement.value);
}

function showResult(result) {
  validateResult("showResult", result);
  result = Number.parseFloat(result).toFixed(2);

  if (_TESTING) {
    _mockResult = result;
    return;
  }

  document.getElementById("result").innerText = result;
}

/* TESTS */
function calculateCarpetTest() {
  const TEST_NAME = "calculateCarpetTest";
  _mockWidthRoom1 = 3;
  _mockLengthRoom1 = 2;
  _mockWidthRoom2 = 4;
  _mockLengthRoom2 = 1;
  _mockResult = 0;
  _logTestParameters(TEST_NAME);

  _TESTING = true;
  console.log("*****START YOUR CODE OUTPUT*****");
  try {
    calculateCarpet();
  } catch (err) {
    console.log(err);
  }
  console.log("******END YOUR CODE OUTPUT*****\n");
  _TESTING = false;

  let expectedResult = 11.0;
  if (_mockResult == expectedResult) {
    console.log(`PASSED:: Got the expected result of '${_mockResult}'.`);
    return true;
  }

  console.log(
    `FAILED:: Was expecting a result of '${expectedResult}' but got '${_mockResult}'.`
  );

  if (_mockResult == 10) {
    console.log(
      "**HINT**\nDid you remember to multiple the total area by 1.1 to account for waste?"
    );
  }

  return false;
}

function _logTestParameters(testName, expectation) {
  let message =
    `Runnning '${testName}' with these values:\n\n` +
    `  Room 1 Width:  ${_mockWidthRoom1}\n` +
    `  Room 1 Length: ${_mockLengthRoom1}\n` +
    `  Room 2 Width:  ${_mockWidthRoom2}\n` +
    `  Room 2 Length: ${_mockLengthRoom2}\n`;
  console.log(message);
}

function runAllTests() {
  let tests = [calculateCarpetTest()];
  let passed = true;

  tests.forEach((test) => {
    passed &= test();
  });

  if (passed) {
    console.log("ALL TESTS PASSES!!!!");
  } else {
    console.log("TEST RUN FAILED");
  }
}
