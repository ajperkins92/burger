// Make sure we wait to attach our handlers until the DOM is fully loaded.


    $(function () {
        $(".change-devoured").on("click", function (event) {
            var id = $(this).data("id");
            var newDevoured = $(this).data("newDevoured");

            var newDevouredState = {
                devoured: newDevoured
            };

            // Send the PUT request.
            $.ajax("/burgers/" + id, {
                type: "PUT",
                data: newDevouredState
            }).then(
                function () {
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
            $.ajax("/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    location.reload();
                }
            );
        });
    });