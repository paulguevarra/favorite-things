$(document).ready(function()  {
  $(formOne).submit(function(event) {
    var person1Input = $("input#person1").val();
    var colorInput = $("input#color").val();
    var animalInput = $("input#animal").val();

    var blanks = [person1Input, colorInput, animalInput];

    $("#blanks").text(blanks);
    blanks.splice(1);


  event.preventDefault();
  })
})
