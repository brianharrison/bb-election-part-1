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

        var imgArray = new Array();
            imgArray[0] = new Image();
            imgArray[0].src = 'images/spongebob.gif';

            imgArray[1] = new Image();
            imgArray[1].src = 'images/patrick.jpg';

            imgArray[2] = new Image();
            imgArray[2].src = 'images/squidward.png';

            imgArray[3] = new Image();
            imgArray[3].src = 'images/sandy.png';

            imgArray[4] = new Image();
            imgArray[4].src = 'images/gary.png';


        var resultPhoto = $('<td>').html(imgArray[i]);    
        var resultName = $('<td>').html(responseData.candidates[i]["name"]);
        var resultVotes = $('<td>').html(responseData.candidates[i]["votes"]);
        
        var listitem = $('<tr>');
        $('#results').append(listitem);
        var voteButton = $('<button data-name="' + responseData.candidates[i]["name"] + '">').addClass('vote').html('<td>' + 'Vote for ' + responseData.candidates[i]['name'] + '</td>');
        listitem.append(resultPhoto);
        listitem.append(resultName);
        listitem.append(resultVotes);
        listitem.append(voteButton);


        
      });
      voteRequest();
    });

    function voteRequest() {
      $('.vote').on('click', function() {
        var currentVotes = $(this).prev().text();
        var newVotes = parseInt(currentVotes) + 1;
        $.ajax({
          url: "https://bb-election-api.herokuapp.com/vote",
          method: "post",
          data: {name: $(this).data('name')},
          dataType: "json"
        });
        $(this).attr('disabled', 'disabled');
        $(this).prev().text(newVotes);
      });
    }
  });
});