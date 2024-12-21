$(document).ready(function () {
    // Applying initial CSS styles to the list
    $("#list").css("color", "red");
    $("#list").css("border", "2px solid green");

    // Click event for #container
    $("#container").click(function () {
        $('#container').css('background-color', 'red');
    });

    // Double-click event for #container
    $("#container").dblclick(function () {
        $('#container').css('background-color', 'green');
    });

    // Context menu (right-click) event for #container
    $("#container").contextmenu(function (e) {
        e.preventDefault(); // Prevent the default context menu from opening
        $('#container').css('background-color', 'blue');
    });

    // Mouseenter event for #container
    $("#container").mouseenter(function () {
        $('#container').css('background-color', 'tan');
    });
    $('body').keypress(function () {
    $(this).css('background-color','orange')
    })
    $('body').keyup(function(){
        $(this).css('background-color','#000000')
    })
});
