﻿//Calculate factorial
$("#btnFacCalc").click(function () {
    //get input
    var facNum = Number($("#factorial").val());
    var answer = 0;

    //validate
    if (facNum > 0 && $("#factorial").val() != "") {
        //loop doing calculations
        for (index = facNum - 1; index > 0; index--) {
            facNum = facNum * index;
            answer = facNum;
        }
        //past result
        $("#facResult").text("The factorial of the number is " + answer);
    }
    else {
        //wrong result message
        $("#facResult").text("Make sure there is a value and it's greater then 0 and is numeric");
    }
});

//FIZZBUZZ
$("#btnFizzBuzz").click(function () {
    //get input
    var num1 = Number($("#fizz").val());
    var num2 = Number($("#buzz").val());
    var fizz = 0;
    var buzz = 0;
    var fizzBuzz = "";

    //validate
    if ($("#fizz").val() != "" && $("#buzz").val() != "" && num1 > 0 && num2 > 0 && num1 <= 100 && num2 <= 100) {
        //loop 100 time to check for clean multiples
        for (var index = 1; index <= 100; index++) {
            fizz = index % num1;
            buzz = index % num2;

            //if both are fizzbuzz
            if (fizz === 0 && buzz === 0) {
                fizzBuzz = fizzBuzz + " " + "<span class='fizzBuzz'>FizzBuzz,</span>"
            }
            else {
                if (fizz === 0) {
                    //if first fizz
                    fizzBuzz = fizzBuzz + " " + "<span class='fizz'>Fizz,</span>"
                }
                else if (buzz === 0) {
                    //if second buzz
                    fizzBuzz = fizzBuzz + " " + "<span class='buzz'>Buzz,</span>"
                }
                else {
                    //if none display the number
                    fizzBuzz = fizzBuzz + " " + "<b>" + index + "</b>" + ","
                }
            }
        }

        //substring to check if the last message is a number or word
        var testVar = fizzBuzz.substring(fizzBuzz.length - 3, fizzBuzz.length - 1);

        //if to check if it's a word or number
        if (testVar == "an") {
            //if it's a word substring more
            fizzBuzz = fizzBuzz.substring(0, fizzBuzz.length - 8);
        }
        else {
            //if it's a number substring less
            fizzBuzz = fizzBuzz.substring(0, fizzBuzz.length - 1);
        }
        //diaplay resluts with a .html to apply the styles
        $("#fizzBuzzResult").html(fizzBuzz);
    }
    else {
        if (num1 > 100 || num2 > 100) {
            //message if wrong and number is more than 100
            $("#fizzBuzzResult").text("Please put in a number that is between 1-100");
        }
        else {
            //message if wrong and has not value is negative or not numeric
            $("#fizzBuzzResult").text("Make sure there is a value and it's greater then 0 and is numeric");
        }
    }

    //make block visible
    document.getElementById("fizzBuzzResult").style.display = "block";
});

//The math calculator
$("#btnCalc").click(function () {
    //validation
    if ($("#num1").val() != "" && $("#num2").val() != "" && $("#num3").val() != "" && $("#num4").val() != "" && $("#num5").val() != "") {
        //get input and declare variables
        var num1 = Number($("#num1").val());
        var num2 = Number($("#num2").val());
        var num3 = Number($("#num3").val());
        var num4 = Number($("#num4").val());
        var num5 = Number($("#num5").val());
        var max, min, mean, sum, multi;

        //do math functions
        sum = num1 + num2 + num3 + num4 + num5;
        mean = sum / 5;
        multi = num1 * num2 * num3 * num4 * num5;
        min = Math.min(num1, num2, num3, num4, num5);
        max = Math.max(num1, num2, num3, num4, num5);

        //display data
        $("#sum").text("The sum of the numbers is " + sum);
        $("#mean").text("The average of the numbers is " + mean);
        $("#multi").text("The product of the numbers is " + multi);
        $("#least").text("The least number is " + min);
        $("#great").text("The greatest number is " + max);
    }
    else {
        //message if invalid input is caught
        $("#least").text("Please enter all values and as numeric");
        $("#sum").text("");
        $("#mean").text("");
        $("#multi").text("");
        $("#great").text("");
    }
});

//Palindrome checker
$("#btnPal").click(function () {
    //get input
    var palSen = $("#pal").val();

    //validate
    if ($("#pal").val() != "") {
        //replacing all spaces and special characters with nothing
        palSen = palSen.replace(/\s/g, '');
        palSen = palSen.replace(/[^a-zA-Z0-9]/g, '');

        var palCheck = "";
        //loop though palSen from back to front and put it in palCheck
        for (var index = (palSen.length) - 1; index >= 0; index--) {
            palCheck += palSen[index];
        }

        //check if it's a palindrome
        if (palSen.toUpperCase() == palCheck.toUpperCase()) {
            //message for true
            $("#palResult").text(palSen + " is a palindrome");
        }
        else {
            //message for false
            $("#palResult").text(palSen + " is not a palindrome");
        }
    }
    else {
        //message if there is nothing
        $("#palResult").text("Please enter a value");
    }
});


//Changing the text to the Show Code button to Hide Code when pressed
$("#btnShow1").click(function () {
    var check = $("#btnShow1").text();

    if (check == "Show Code") {
        $("#btnShow1").text("Hide Code");
    }
    else {
        $("#btnShow1").text("Show Code");
    }

});


//Changing the text to the Show Code button to Hide Code when pressed
$("#btnShow2").click(function () {
    var check = $("#btnShow2").text();

    if (check == "Show Code") {
        $("#btnShow2").text("Hide Code");
    }
    else {
        $("#btnShow2").text("Show Code");
    }

});

//Changing the text to the Show Code button to Hide Code when pressed
$("#btnShow3").click(function () {
    var check = $("#btnShow3").text();

    if (check == "Show Code") {
        $("#btnShow3").text("Hide Code");
    }
    else {
        $("#btnShow3").text("Show Code");
    }

});

//Changing the text to the Show Code button to Hide Code when pressed
$("#btnShow4").click(function () {
    var check = $("#btnShow4").text();

    if (check == "Show Code") {
        $("#btnShow4").text("Hide Code");
    }
    else {
        $("#btnShow4").text("Show Code");
    }

});

$("#btnShow5").click(function () {
    var check = $("#btnShow4").text();

    if (check == "Show Code") {
        $("#btnShow5").text("Hide Code");
    }
    else {
        $("#btnShow5").text("Show Code");
    }

});

//Reseting the window based on what tab changed
$(".tab-changed").click(function () {

    if ($(this).attr("id") != "tab2") {
        $("#factorial").val("");
        $("#facResult").text("");
    }

    if ($(this).attr("id") != "tab1") {
        $("#least").text("");
        $("#sum").text("");
        $("#mean").text("");
        $("#multi").text("");
        $("#great").text("");


        $("#num1").val("");
        $("#num2").val("");
        $("#num3").val("");
        $("#num4").val("");
        $("#num5").val("");
    }

    if ($(this).attr("id") != "tab3") {
        $("#fizzBuzzResult").text("");
        $("#fizz").val("");
        $("#buzz").val("");
        document.getElementById("fizzBuzzResult").style.display = "none";
    }


    if ($(this).attr("id") != "tab4") {
        $("#pal").val("");
        $("#palResult").text("");
    }

    if ($(this).attr("id") != "tab5") {
        document.getElementById("slotImage1").src = "/images/cherry.png";
        document.getElementById("slotImage2").src = "/images/cherry.png";
        document.getElementById("slotImage3").src = "/images/cherry.png";
        $("#bankAccount").text("$500");
        $("#bettingAmount").val("")
        $("#winningMessage").text("");
    }

    //Code to ensure that when the person hits the button it closes the code snippets
    if ($(this).attr("id") == "tab1") {
        if ($("#btnShow4").text() == "Hide Code") {
            $("#btnShow4").text("Show Code");
            $("#multiCollapseCode4").collapse("hide");
            $("#multiCollapse4").collapse("show");
        }

        if ($("#btnShow3").text() == "Hide Code") {
            $("#btnShow3").text("Show Code");
            $("#multiCollapseCode3").collapse("hide");
            $("#multiCollapse3").collapse("show");
        }

        if ($("#btnShow2").text() == "Hide Code") {
            $("#btnShow2").text("Show Code");
            $("#multiCollapseCode2").collapse("hide");
            $("#multiCollapse2").collapse("show");
        }

        if ($("#btnShow5").text() == "Hide Code") {
            $("#btnShow5").text("Show Code");
            $("#multiCollapseCode5").collapse("hide");
            $("#multiCollapse5").collapse("show");
        }
    }

    if ($(this).attr("id") == "tab2") {
        if ($("#btnShow4").text() == "Hide Code") {
            $("#btnShow4").text("Show Code");
            $("#multiCollapseCode4").collapse("hide");
            $("#multiCollapse4").collapse("show");
        }

        if ($("#btnShow3").text() == "Hide Code") {
            $("#btnShow3").text("Show Code");
            $("#multiCollapseCode3").collapse("hide");
            $("#multiCollapse3").collapse("show");
        }

        if ($("#btnShow1").text() == "Hide Code") {
            $("#btnShow1").text("Show Code");
            $("#multiCollapseCode1").collapse("hide");
            $("#multiCollapse1").collapse("show");
        }

        if ($("#btnShow5").text() == "Hide Code") {
            $("#btnShow5").text("Show Code");
            $("#multiCollapseCode5").collapse("hide");
            $("#multiCollapse5").collapse("show");
        }
    }

    if ($(this).attr("id") == "tab3") {
        if ($("#btnShow4").text() == "Hide Code") {
            $("#btnShow4").text("Show Code");
            $("#multiCollapseCode4").collapse("hide");
            $("#multiCollapse4").collapse("show");
        }

        if ($("#btnShow2").text() == "Hide Code") {
            $("#btnShow2").text("Show Code");
            $("#multiCollapseCode2").collapse("hide");
            $("#multiCollapse2").collapse("show");
        }

        if ($("#btnShow1").text() == "Hide Code") {
            $("#btnShow1").text("Show Code");
            $("#multiCollapseCode1").collapse("hide");
            $("#multiCollapse1").collapse("show");
        }

        if ($("#btnShow5").text() == "Hide Code") {
            $("#btnShow5").text("Show Code");
            $("#multiCollapseCode5").collapse("hide");
            $("#multiCollapse5").collapse("show");
        }
    }

    if ($(this).attr("id") == "tab4") {
        if ($("#btnShow3").text() == "Hide Code") {
            $("#btnShow3").text("Show Code");
            $("#multiCollapseCode3").collapse("hide");
            $("#multiCollapse3").collapse("show");
        }

        if ($("#btnShow2").text() == "Hide Code") {
            $("#btnShow2").text("Show Code");
            $("#multiCollapseCode2").collapse("hide");
            $("#multiCollapse2").collapse("show");
        }

        if ($("#btnShow1").text() == "Hide Code") {
            $("#btnShow1").text("Show Code");
            $("#multiCollapseCode1").collapse("hide");
            $("#multiCollapse1").collapse("show");
        }

        if ($("#btnShow5").text() == "Hide Code") {
            $("#btnShow5").text("Show Code");
            $("#multiCollapseCode5").collapse("hide");
            $("#multiCollapse5").collapse("show");
        }
    }

    if ($(this).attr("id") == "tab5") {
        if ($("#btnShow4").text() == "Hide Code") {
            $("#btnShow4").text("Show Code");
            $("#multiCollapseCode4").collapse("hide");
            $("#multiCollapse4").collapse("show");
        }

        if ($("#btnShow3").text() == "Hide Code") {
            $("#btnShow3").text("Show Code");
            $("#multiCollapseCode3").collapse("hide");
            $("#multiCollapse3").collapse("show");
        }

        if ($("#btnShow2").text() == "Hide Code") {
            $("#btnShow2").text("Show Code");
            $("#multiCollapseCode2").collapse("hide");
            $("#multiCollapse2").collapse("show");
        }

        if ($("#btnShow1").text() == "Hide Code") {
            $("#btnShow1").text("Show Code");
            $("#multiCollapseCode1").collapse("hide");
            $("#multiCollapse1").collapse("show");
        }
    }
});

//Resetting a modal on close
$("#scriptModal").on("hidden.bs.modal", function () {

    if ($("#btnShow5").text() == "Hide Code") {
        $("#btnShow5").text("Show Code");
        $("#multiCollapseCode5").collapse("hide");
        $("#multiCollapse5").collapse("show");
    }

    if ($("#btnShow4").text() == "Hide Code") {
        $("#btnShow4").text("Show Code");
        $("#multiCollapseCode4").collapse("hide");
        $("#multiCollapse4").collapse("show");
    }

    if ($("#btnShow3").text() == "Hide Code") {
        $("#btnShow3").text("Show Code");
        $("#multiCollapseCode3").collapse("hide");
        $("#multiCollapse3").collapse("show");
    }

    if ($("#btnShow2").text() == "Hide Code") {
        $("#btnShow2").text("Show Code");
        $("#multiCollapseCode2").collapse("hide");
        $("#multiCollapse2").collapse("show");
    }

    if ($("#btnShow1").text() == "Hide Code") {
        $("#btnShow1").text("Show Code");
        $("#multiCollapseCode1").collapse("hide");
        $("#multiCollapse1").collapse("show");
    }

    $("#pal").val("");
    $("#palResult").text("");

    $("#fizzBuzzResult").text("");
    $("#fizz").val("");
    $("#buzz").val("");
    document.getElementById("fizzBuzzResult").style.display = "none";

    $("#factorial").val("");
    $("#facResult").text("");

    $("#least").text("");
    $("#sum").text("");
    $("#mean").text("");
    $("#multi").text("");
    $("#great").text("");


    $("#num1").val("");
    $("#num2").val("");
    $("#num3").val("");
    $("#num4").val("");
    $("#num5").val("");

    document.getElementById("slotImage1").src = "/images/cherry.png";
    document.getElementById("slotImage2").src = "/images/cherry.png";
    document.getElementById("slotImage3").src = "/images/cherry.png";
    $("#bankAccount").text("$500");
    $("#bettingAmount").val("")
    $("#winningMessage").text("");

    $("#tab1").tab("show");
});


//CRAZY MODE
$("#btnCrazyMode").click(function () {
    //get input
    var num1 = Number($("#fizz").val());
    var num2 = Number($("#buzz").val());
    var fizz = 0;
    var buzz = 0;
    var fizzBuzz = "";
    var randVar

    //validate
    if ($("#fizz").val() != "" && $("#buzz").val() != "" && num1 > 0 && num2 > 0 && num1 <= 100 && num2 <= 100) {
        //loop 100 time to check for clean multiples
        for (var index = 1; index <= 100; index++) {
            fizz = index % num1;
            buzz = index % num2;

            //if both are fizzbuzz
            if (fizz === 0 && buzz === 0) {
                fizzBuzz = fizzBuzz + " " + "<span class='fizzBuzz'>FizzBuzz,</span>"
            }
            else {
                if (fizz === 0) {
                    //if first fizz
                    fizzBuzz = fizzBuzz + " " + "<span class='fizz'>Fizz,</span>"
                }
                else if (buzz === 0) {
                    //if second buzz
                    fizzBuzz = fizzBuzz + " " + "<span class='buzz'>Buzz,</span>"
                }
                else {
                    //if none display the number
                    randVar = Math.floor(Math.random() * 8)
                    randVar = randVar + 1;
                    fizzBuzz = fizzBuzz + " " + "<span class='numFBR" + randVar + "'>" + index + "," + "</span>"
                }
            }
        }

        fizzBuzz = fizzBuzz.substring(0, fizzBuzz.length - 8);

        $("#fizzBuzzResult").html(fizzBuzz);
    }
    else {
        if (num1 > 100 || num2 > 100) {
            //message if wrong and number is more than 100
            $("#fizzBuzzResult").text("Please put in a number that is between 1-100");
        }
        else {
            //message if wrong and has not value is negative or not numeric
            $("#fizzBuzzResult").text("Make sure there is a value and it's greater then 0 and is numeric");
        }
    }

    //make block visible
    document.getElementById("fizzBuzzResult").style.display = "block";
});

$("#btnStartMachine").click(function () {
    //Declare vars and get input
    var machineArr = ["/images/apple.png", "/images/cherry.png", "/images/grapes.png", "/images/diamond.png", "/images/orange.png", "/images/bar.png", "/images/Lucky7.png", "/images/lemon.png"]
    var account = $("#bankAccount").text();
    var betting = Number($("#bettingAmount").val());
    account = Number(account.substring(1, account.length));
    if ($("#bettingAmount").val() != "" && account > 0 && betting <= account) {
        //Declare random vars
        var pic1 = Math.floor(Math.random() * 8)
        var pic2 = Math.floor(Math.random() * 8)
        var pic3 = Math.floor(Math.random() * 8)

        //Change image
        document.getElementById("slotImage1").src = machineArr[pic1];
        document.getElementById("slotImage2").src = machineArr[pic2];
        document.getElementById("slotImage3").src = machineArr[pic3];

        //Testing for winners
        if (pic1 == 0 && pic2 == 0 && pic3 == 0 || pic1 == 1 && pic2 == 1 && pic3 == 1) {
            $("#winningMessage").text("YOU HAVE WON! Your earnings is 1.5x what you have bet");
            betting = betting * 1.5;
            account = account + betting;
        }
        else if (pic1 == 2 && pic == 2 && pic3 == 2) {
            $("#winningMessage").text("YOU HAVE WON! Your earnings is 10x what you have bet");
            betting = betting * 10;
            account = account + betting;
        }
        else if (pic1 == 3 && pic == 3 && pic3 == 3 || pic1 == 4 && pic2 == 4 && pic3 == 4) {
            $("#winningMessage").text("YOU HAVE WON! Your earnings is 3x what you have bet");
            betting = betting * 3;
            account = account + betting;
        }
        else if (pic1 == 5 && pic2 == 5 && pic3 == 5) {
            $("#winningMessage").text("YOU HAVE WON! Your earnings is 5x what you have bet");
            betting = betting * 5;
            account = account + betting;
        }
        else if (pic1 == 6 && pic2 == 6 && pic3 == 6) {
            $("#winningMessage").text("YOU HAVE WON! Your earnings is 15x what you have bet");
            betting = betting * 15;
            account = account + betting;
        }
        else if (pic1 == 7 && pic2 == 7 && pic3 == 7) {
            $("#winningMessage").text("You have lost. Lemons took all your money");
            account = 0;
            betting = 0;
        }
        else {
            $("#winningMessage").text("You have lost.");
            account = account - betting;
        }

        //Display text
        $("#bankAccount").text("$" + account);
    }
    else {
        //Messages for losing
        if (account <= 0) {
            $("#winningMessage").text("Come back when you get some money buddy. (leave then come back)");
        }
        else if (betting > account) {
            $("#winningMessage").text("You cannot bet more then you have");
        }
        else {
            $("#winningMessage").text("Enter a betting amount and as numeric");
        }
    }
})

