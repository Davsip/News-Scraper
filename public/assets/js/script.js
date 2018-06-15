// ajax, talks to the server. 
// front, can be see. 
// frontend javascript. 
// ajax is front end code that communicates with back end. 


 //   $("run1").click(function(){
      //  $.ajax({url: "routes.", success: function(result){
      //      $("#div1").html(result);
      //  }});
    //});

// then on routes it knows what to do. 


//please grab the articles as a crazy JSON. 


$("#getArticles").on("click", function(){

    $.getJSON("/articles", function(data) {
        // for all of them, each one. 
        for (var i = 0; i < data.length; i++) {
            // display the correct information on the page. 
            $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
        }
        });
});


