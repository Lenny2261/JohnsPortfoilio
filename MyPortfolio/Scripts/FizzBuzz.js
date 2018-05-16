
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
                        fizzBuzz = fizzBuzz + " " + "FizzBuzz"
                    }
                    else {
                        if (fizz === 0) {
                            fizzBuzz = fizzBuzz + " " + "Fizz"
                        }
                        else if (buzz === 0) {
                            fizzBuzz = fizzBuzz + " " + "Buzz"
                        }
                        else {
                            fizzBuzz = fizzBuzz + " " + index
                        }
                    }
                }

                $("#fizzBuzzResult").text(fizzBuzz);
            }
            else {
				if(num1 <= 100 || num2 <= 100){
					$("#fizzBuzzResult").text("Please put in a number that is 100 or below");
				}
				else{
				    $("#fizzBuzzResult").text("Make sure there is a value and it's greater then 0");	
				}
            }
        });