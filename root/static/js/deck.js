
/*
  This function is run everytime a user enters input into the textarea on the page
  Updates the text on beneath the textarea to show the number of characters currently
  in the textarea with a limit of 300
*/
$('#description').on('input', function() {
  var numchars = $('#description').val().length;
  $('#desc-counter').text(numchars + "/300");
});

/*
  save() is run when the save button is clicked to submit new deck information
  sends the following data to flashcard.py flask file:
  - name: name of the Deck
  - description: description of the deck
  - category: deck category for folder organization
  - isPublic: sets public option for public/private decks
 */
function save() {
    document.forms[0].submit();
}

/*
  back() is run when the back button is clicked on the page
  Should navigate back to the library page for the specific user
*/
function back() {
  var res = confirm("Your new deck has not been saved.  Are you sure you would like to go back?");
  if (res) {
    window.location.href = '/library';
  }
}
