
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
