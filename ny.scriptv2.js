$(function(){
    
    var end= new Date("December 19, 2012 16:28:00");// Month Day, Year, HH:MM:OO (ex: December 25th, 2012 12:00:00. In Military Time)
    var now = new Date();
    var timeDiff = end.getTime() - now.getTime();

    //timeTriggers


    if(timeDiff >= 0){
        clearTimeout(countdown);
        $(this).addClass('state1');
        /*document.getElementById("imageBox").innerHTML='<img src="timMcgraw/step0.jpg" />';*/
    }

    var seconds = Math.floor(timeDiff / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);
    var lastStepCompleted = 0;
    $('#countdown').countdown({
        timestamp   : end,
        callback    : function(days, hours, minutes, seconds, lastStepCompleted){

  if (hours >= 1 && lastStepCompleted == 0) { // Action at more than an Hour
                    $('#imageBox').addClass('state1'); 
            lastStepCompleted++;
            }
            else if (hours <= 1 && minutes >= 45 && lastStepCompleted == 1) { // Action at more than 45min
                   $('#imageBox').addClass('state2'); 
                   lastStepCompleted++;
                } roughly what you need to do
            else if (hours <= 1 && minutes  >= 30){  // Action at more than 30min
                     $('#imageBox').addClass('state3'); 
                }
            else if (hours <= 1 && minutes  >= 15){ // Action at more than 15min
                     $('#imageBox').addClass('state4'); 
                }
             else if (hours <= 1 && minutes  >= 1 ){ // Action at more than 1min
                     $('#imageBox').addClass('state5'); 
                }
             else { // Action at more the End of the Timer
                    $('#imageBox').addClass('state6');
                }
             

        }
    });
    
});
