window.onload = function () {
    // Get the modal
    var modal = document.getElementById("food_modal");

    // Get the button that opens the modal
    var btn = document.getElementById("button_modal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function () {
        console.log("modal is clicked");
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        console.log("span is clicked");
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        console.log("window is clicked");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}