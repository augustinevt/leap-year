// Business Logic

var leapYear = function(year){
  if (isNaN(year) || (year <= 0)){
    console.log("is not a valid year");
    return false;
  } else if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
  } else {
    return false;
  }
}

// User Interface Logic

$(document).ready(function(){
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var year = $("input#year").val();
    var result = leapYear(parseInt(year));

    $(".year").text(year);

    if (!result) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

    $("#result").show();


  });
});
