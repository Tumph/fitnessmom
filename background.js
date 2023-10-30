
chrome.runtime.onInstalled.addListener(function() {
    window.setInterval(function(){ // Set interval for checking
        var date = new Date(); // Create a Date object to find out what time it is
        if(date.getHours() >= 6 && date.getHours() <= 24 && date.getMinutes() >= 00 && date.getMinutes() <= 60){ // Check the time
            let win = open("index.html","_blank","width=600,height=800").focus;
        }
    }, 60000); 
  });