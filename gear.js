
    var selectButton = document.getElementById("select");
    var intervalInput = document.getElementById("intervalTime");
    var breakInput = document.getElementById("breakTime");

    selectButton.onclick = function(){
      intervalTimeStored = Math.floor(intervalInput.value * 1);
      breakTimeStored = Math.floor(breakInput.value * 1);
            const checkboxes = document.querySelectorAll('input[name="exercise"]:checked');
            var eList = [];
            for(var elem of checkboxes.values()) {
                eList.push(elem.value);
              }
            window.localStorage.setItem("elist",JSON.stringify(eList));
            window.localStorage.setItem("intervalTimeStored",JSON.stringify(intervalTimeStored));
            window.localStorage.setItem("breakTimeStored",JSON.stringify(breakTimeStored));
            var goBack = window.open('', 'parent');
            goBack.focus();
            window.close;
            return;
            }