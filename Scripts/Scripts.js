function test(){
    var audio = new Audio('Sound/bell.wav');
    audio.play();
}

function checkChange(element){

    if(element.value == 0 && element.id=="player1Dropdown"){
        showComputerCodeTextArea(1);
        test();
    }
    if(element.value == 0 && element.id=="player2Dropdown"){
        showComputerCodeTextArea(2);
        test();
    }
}

function showComputerCodeTextArea(player){
    switch (player){
        case 1:{
            document.getElementById("computerCode1").style="display:block";
            break;
        }
        case 2:{
            document.getElementById("computerCode2").style="display:block";
            break;
        }
    }
}

function saveComputer(player){
    switch (player){
        case 1:{
            document.getElementById("computerCode1").value;
            var addedOption = document.createElement("option");
            addedOption.text = document.getElementById("computerCodeName1").value;
            addedOption.value = document.getElementById("computerCode1").value;
            var dropdown = document.getElementById("player1Dropdown");
            var index = document.getElementById("player1Dropdown").options.length-1;
            dropdown.add(addedOption, dropdown[index]);
            document.getElementById("computerCode1").style="display: none";
            document.getElementById("player1Dropdown").selectedIndex = index;
            document.getElementById("computerCodeName1").value = "";
            document.getElementById("computerCode1TextArea").value = "";
            break;
        }
        case 2:{
            document.getElementById("computerCode2").value;
            var addedOption = document.createElement("option");
            addedOption.text = document.getElementById("computerCodeName2").value;
            addedOption.value = document.getElementById("computerCode2").value;
            var dropdown = document.getElementById("player2Dropdown");
            var index = document.getElementById("player2Dropdown").options.length-1;
            dropdown.add(addedOption, dropdown[index]);
            document.getElementById("computerCode2").style="display: none";
            document.getElementById("player2Dropdown").selectedIndex = index;
            document.getElementById("computerCodeName2").value = "";
            document.getElementById("computerCode2TextArea").value = "";
            break;
        }
    }
}


function clickOnElement(element){
    document.getElementById(element).click();
}



function showComputerMenus(modus){
    switch (modus){

        case 1: {
            document.getElementById("player1Dropdown").style="display:none";
            document.getElementById("player1Textfield").style="display:inline-block";
            document.getElementById("player2Dropdown").style="display:none";
            document.getElementById("player2Textfield").style="display:inline-block";
            break;}
        case 2: {
            document.getElementById("player1Dropdown").style="display:none";
            document.getElementById("player1Textfield").style="display:inline-block";
            document.getElementById("player2Dropdown").style="display:inline-block";
            document.getElementById("player2Textfield").style="display:none";
            break;}
        case 3: {
            document.getElementById("player1Dropdown").style="display:inline-block";
            document.getElementById("player1Textfield").style="display:none";
            document.getElementById("player2Dropdown").style="display:inline-block";
            document.getElementById("player2Textfield").style="display:none";
            break;}

}}