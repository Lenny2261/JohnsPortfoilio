$("#btnFacCalc").click(function () {
    var facNum = Number($("#factorial").val());
    var answer = 0;
    if (facNum > 0 && $("#factorial").val() != "") {
        for (index = facNum - 1; index > 0; index--) {
            facNum = facNum * index;
            answer = facNum;
        }
        $("#facResult").text("The factorial of the number is " + answer);
    }
    else {
        $("#facResult").text("Make sure there is a value and it's greater then 0");
    }
});


$("#btnFizzBuzz").click(function () {
    var num1 = Number($("#fizz").val());
    var num2 = Number($("#buzz").val());
    var fizz = 0;
    var buzz = 0;
    var fizzBuzz = "";

    if ($("#fizz").val() != "" && $("#buzz").val() != "" && num1 > 0 && num2 > 0 && num1 <= 100 && num2 <= 100) {
        for (var index = 1; index <= 100; index++) {
            fizz = index % num1;
            buzz = index % num2;

            if (fizz === 0 && buzz === 0) {
                fizzBuzz = fizzBuzz + " " + "<span class='fizzBuzz'>FizzBuzz,</span>"
            }
            else {
                if (fizz === 0) {
                    fizzBuzz = fizzBuzz + " " + "<span class='fizz'>Fizz,</span>"
                }
                else if (buzz === 0) {
                    fizzBuzz = fizzBuzz + " " + "<span class='buzz'>Buzz,</span>"
                }
                else {
                    fizzBuzz = fizzBuzz + " " + "<b>" + index + "</b>" + ","
                }
            }
        }

        var testVar = fizzBuzz.substring(fizzBuzz.length - 3, fizzBuzz.length - 1);

        if (testVar == "an") {
            fizzBuzz = fizzBuzz.substring(0, fizzBuzz.length - 8);
        }
        else {
            fizzBuzz = fizzBuzz.substring(0, fizzBuzz.length - 1);
        }
        $("#fizzBuzzResult").html(fizzBuzz);
    }
    else {
        if (num1 > 100 || num2 > 100) {
            $("#fizzBuzzResult").text("Please put in a number that is between 1-100");
        }
        else {
            $("#fizzBuzzResult").text("Make sure there is a value and it's greater then 0 and is numeric");
        }
    }

    document.getElementById("fizzBuzzResult").style.display = "block";
});


$("#btnCalc").click(function () {
    if ($("#num1").val() != "" && $("#num2").val() != "" && $("#num3").val() != "" && $("#num4").val() != "" && $("#num5").val() != "") {
        var num1 = Number($("#num1").val());
        var num2 = Number($("#num2").val());
        var num3 = Number($("#num3").val());
        var num4 = Number($("#num4").val());
        var num5 = Number($("#num5").val());
        var max, min, mean, sum, multi;

        sum = num1 + num2 + num3 + num4 + num5;
        mean = sum / 5;
        multi = num1 * num2 * num3 * num4 * num5;
        min = Math.min(num1, num2, num3, num4, num5);
        max = Math.max(num1, num2, num3, num4, num5);

        $("#sum").text("The sum of the numbers is " + sum);
        $("#mean").text("The average of the numbers is " + mean);
        $("#multi").text("The product of the numbers is " + multi);
        $("#least").text("The least number is " + min);
        $("#great").text("The greatest number is " + max);
    }
    else {
        $("#least").text("Please enter all values and as numeric");
        $("#sum").text("");
        $("#mean").text("");
        $("#multi").text("");
        $("#great").text("");
    }
});


$("#btnPal").click(function () {
    var palSen = $("#pal").val();

    if ($("#pal").val() != "") {
        palSen = palSen.replace(/\s/g, '');
        palSen = palSen.replace(/[^a-zA-Z0-9]/g, '');

        var palCheck = "";
        for (var index = (palSen.length) - 1; index >= 0; index--) {
            palCheck += palSen[index];
        }

        if (palSen.toUpperCase() == palCheck.toUpperCase()) {
            $("#palResult").text("This is a palindrome");
        }
        else {
            $("#palResult").text("This is not a palindrome");
        }
    }
    else {
        $("#palResult").text("Please enter a value");
    }
});



$("#btnShow1").click(function () {
    var check = $("#btnShow1").text();

    if (check == "Show Code") {
        $("#btnShow1").text("Hide Code");
    }
    else {
        $("#btnShow1").text("Show Code");
    }

});

$("#btnShow2").click(function () {
    var check = $("#btnShow2").text();

    if (check == "Show Code") {
        $("#btnShow2").text("Hide Code");
    }
    else {
        $("#btnShow2").text("Show Code");
    }

});

$("#btnShow3").click(function () {
    var check = $("#btnShow3").text();

    if (check == "Show Code") {
        $("#btnShow3").text("Hide Code");
    }
    else {
        $("#btnShow3").text("Show Code");
    }

});

$("#btnShow4").click(function () {
    var check = $("#btnShow4").text();

    if (check == "Show Code") {
        $("#btnShow4").text("Hide Code");
    }
    else {
        $("#btnShow4").text("Show Code");
    }

});