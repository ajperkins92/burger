// Make sure we wait to attach our handlers until the DOM is fully loaded.


    $(function () {
        $(".devour-form").on("click", function (event) {
            var id = $(this).data("id");
            var newDevoured = $(this).data("newDevoured");

            var newDevouredState = {
                devoured: newDevoured
            };

            // Send the PUT request.
            $.ajax("/burgers/update/:id" + id, {
                type: "PUT",
                data: newDevouredState
            }).then(
                function () {
                    console.log("Changed to devoured!")
                    location.reload();
                }
            );
        });

        $(".create-form").on("submit", function (event) {
            // Make sure to preventDefault on a submit event.
            event.preventDefault();
            console.log("New burger created");

            var newBurger = {
                name: $("#newBurger").val().trim(),
            };

            // Send the POST request.
            $.ajax("/burgers/create", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("Created new burger!")
                    location.reload();
                }
            );
        });
    });