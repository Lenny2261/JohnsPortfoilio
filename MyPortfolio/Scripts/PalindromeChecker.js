
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
