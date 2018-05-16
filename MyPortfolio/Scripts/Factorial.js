
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
