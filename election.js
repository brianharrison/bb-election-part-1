$(function() {

  $('.refresh').click(function() {
    $.ajax({
    url: "https://bb-election-api.herokuapp.com/",
    method: "get",
    data: {},
    dataType: "json"
  }).done(function(responseData) {
    $('#results').html('');
    $(responseData.candidates).each(function(i, candidate){
      console.log('doing each');
      console.log(arguments);
      $('#results').append('<li>' + responseData.candidates[i]["name"] + ':   ' + responseData.candidates[i]["votes"] + '</li>');
    })
  });
});
});

  //   //This each loop iterates through the objects and for each div id that puts a cat photo on the screen
  //   //selects the cat in order and adds the cat's name as an alt
    
  //   $('.cat-box').html('');
  //   $(responseData.cats).each(function(i, cat){

  //     $('<img>').attr('src', responseData.cats[i]["photo"]).attr('alt', 'Photo of ' + responseData.cats[i]["name"])
  //     .appendTo('#cat'+i);
  //   })

  //   });
