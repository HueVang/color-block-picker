$(function () {

  var colorArr = ['blue', 'green', 'red', 'orange', 'yellow', 'purple'] //You can easily add/remove color values from this array.

  var $block = ('<div class=block></div>'); //A basic $block variable used for appending divs to the DOM.

  // This created a small 'x' button inside a block which would remove it if clicked.
  // var $block = ('<div class=block><button class="delete">x</button></div>');

  for (var i = 0; i < colorArr.length; i++) { //This adds a block each with a different color depending on the amount of color values in the array.
    var $color = $($block).css('background-color', colorArr[i]);
    $($color).attr('id', colorArr[i]); //Creates an ID with the name of the block's color.
    $($color).appendTo('#blockSection');
  }

  var color = colorArr[randomNumber(0, colorArr.length - 1)] //Sets the variable "color" to a random color value in the array.

  var $answer = ('<div id="answer"><p>Pick the <span>' + color + '</span> block!</p></div>'); //Creates a div telling the user which colored box to click.
  $($answer).appendTo('#colorToPick');

  $('#blockSection').on('click', '.block', function() { //If you click on a block, this function will run.
    if ($(this).attr('id') == color) { // If you picked the correct block color, this will run...
      var keepID = $(this).attr('id'); // Created a keepID variable that holds the block's color as a string.
      alert("Congratulations! You picked the right block!"); // Pat on the back for picking the right block.
      $(this).fadeOut(2000).css('background-color', 'lawngreen'); // Changes the block color to 'lawngreen' for 2 seconds, and fades it out.
      setTimeout(function() { // Wait 2 seconds before running this anonymous function.
        $('#' + keepID).fadeIn(2000).css('background-color', keepID); // Fades the block back in, with its original color.
      }, 2000);
      $('#answer').remove(); // Remove the statement telling which colored block to pick.
      color = colorArr[randomNumber(0, colorArr.length - 1)]; // Choose a new color from the array.
      $answer = ('<div id="answer"><p>Pick the <span>' + color + '</span> block!</p></div>'); //Creates new statement telling which colored block to pick.
      $($answer).appendTo('#colorToPick');
    } else { //If you did not pick the correct block color, you get an alert saying...
      alert("Sorry... that's the wrong block. Try again!");
    }
  })

  function randomNumber (min, max) { //random number function.
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

  // ** These lines of code would remove a block if it were the correct color that was chosen, ... **//
  // .. take out the color value from the array, reassign a new color to the variable "color", ... **//
  // .. and give the user a new colored block to choose from. It was replaced by the code above.   **//
  // ------------------------------------------------------------------------------------------------
  // $('#blockSection').on('click', '.block', function() {
  //   if ($(this).attr('id') == color) {
  //     alert("Congratulations! You picked the right block!");
  //     $(this).remove();
  //     colorArr.splice(colorArr.indexOf(color), 1);
  //     console.log(colorArr.length);
  //     $('#answer').remove();
  //     color = colorArr[randomNumber(0, colorArr.length - 1)]
  //     $answer = ('<div id="answer"><p>Pick the <span>' + color + '</span> block!</p></div>');
  //     $($answer).appendTo('#colorToPick');
  //
  //     if (colorArr.length == 0) {
  //       alert("Nice! You picked all the correct blocks!");
  //       $('#answer').remove();
  //     }
  //   } else {
  //     alert("Sorry... that's the wrong block. Try again!");
  //   }
  // });
  // ------------------------------------------------------------------------------------------------


  // ** These lines of code were for the alternative $block variable that has been commented out. **//
  // ** It should remove the block, take out that block's color from the array, ...               **//
  // ** ... and reassign a new color to the "color" variable.                                     **//
  // ------------------------------------------------------------------------------------------------
  // $('#blockSection').on('click', '.delete', function() {
  //   colorArr.splice(colorArr.indexOf($(this).parent().attr('id')), 1);
  //   console.log(colorArr.length);
  //   $(this).parent().remove();
  //   $('#answer').remove();
  //   color = colorArr[randomNumber(0, colorArr.length - 1)]
  //   $answer = ('<div id="answer"><p>Pick the <span>' + color + '</span> block!</p></div>');
  //   $($answer).appendTo('#colorToPick');
  //
  // })
})
