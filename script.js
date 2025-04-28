/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
  // 👇 Write your code here 👇
  // Step 1: Get room dimensions using provided functions
  let room1Width = getRoomWidth(1);
  let room1Length = getRoomLength(1);
  let room2Width = getRoomWidth(2);
  let room2Length = getRoomLength(2);

  // Step 2: Calculate the area of each room
  let area1 = room1Width * room1Length;
  let area2 = room2Width * room2Length;

  // Step 3: Calculate total area and add 10% extra
  let totalArea = (area1 + area2) * 1.1;

  // Step 4: Show the result using the provided function
  showResult(totalArea);

  // console.log("click");
}
calculateCarpetTest();

/* LEVEL UP! (optional) 
	1. Function explanations: 
	- getRoomWidth(roomNumber): This function retrieves the width input value for the specified room (Room 1 or Room 2).
	- getRoomLength(roomNumber): Similar to getRoomWidth, this function retrieves the length input value for the specified room.
	- showResult(result): This function takes the final carpet area calculation and displays it on the webpage by updating the designated element.
	- validateRoomNumber(functionName, roomNumber): This function ensures that the provided room number is either 1 or 2. If the input is invalid, it logs an error to the console.
	- validateResult(functionName, result): This function checks if the calculated result is a valid number before displaying it. If the result is undefined or invalid, it logs an error message.

	2. Custom styles added: 
	- Styled the "Calculate" button with a hover effect, smooth transition, and rounded corners.
	- Changed the background color of the result display area to light green for better contrast.
	- Adjusted font size and spacing for improved readability.
	- Added a subtle box shadow to the result display area to make it visually distinct.
	- Enhanced responsiveness so the layout adjusts well on mobile devices.


*/
