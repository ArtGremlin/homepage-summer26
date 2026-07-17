// $(".next-btn").click(
//     function(){
//         $(".line").show();
//         $(".container").toggleClass("dark");
//     }
// );

// starts by hiding all dialogue lines in the
$(".text-box .line").hide();

// reveals the first dialogue line in the text-box
$(".text-box").find(".line:first").show();

$(".next-btn").click(function () {
  // this assigns a variable for the currently visible line as "currentLine"
  var currentLine = $(".text-box").find(".line:visible");

  // first we hide the currentLine
  $(currentLine).hide();
  // then we find the next line, after the currentLine, and reveal it
  $(currentLine).next(".line").show();

  // when there are no more new lines to reveal, this will prevent the text-box from displaying a blank panel, by making sure the last line remains visible
  if ($(".text-box").find(".line:visible").length == 0) {
    $(".text-box").find(".line").last().show();
  }
});

// we repeat the next function, but just go in the opposite direction
$(".back-btn").click(function () {
  var currentLine = $(".text-box").find(".line:visible");

  $(currentLine).hide();
  // below, instead of using the "next()" method like above, we're using the "prev()" method that will select the element that comes before our currentLine
  $(currentLine).prev(".line").show();

  // if we are on the first line of the text-box, this will keep the first line visible, even if we click the .prev button
  if ($(".text-box").find(".line:visible").length == 0) {
    $(".text-box").find(".line").first().show();
  }
});



// trying to make a button to cycle through dialogue via next and back button. Also trying to avoid specifically numbering/creating new elements per line them as to make it universal for other pages.//


// once finished with dialogue options, I would like the choice box to appear with the final text to be shown.  For Example://

// Line 1: blah blah blah blah.//

// Line 2: blah blah blah blah.//

// Line 3: blah blah blah blah.//

// Line 4: what would you do? *choice box appears once this line is revealed*//

// maybe override this one in other css by specifying?