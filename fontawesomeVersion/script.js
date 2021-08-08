$('.addIcon').on('click', function () {
    if ($('.elements').length > $(".elements p").length) {
        $('input').focus();
        return;
    }
    $('.body').html("<div class='elements'><div class='textContainer'><input type='text' required/></div></div>" + $('.body').html());
    $('input').focus();
    $('input').keypress(function (e) {
        if (e.which === 13 && $('input').val().length != 0) {
            $('.elements:first-of-type').html("<div class='removeContainer'><i class='fas fa-trash trash'></i></div><div class='textContainer'><p>" + $('input').val() + "</p></div>");
            resetToAll();
        }
    });
});

function resetToAll() {
    $('.elements p').on('click', function () {
        $(this).css('text-decoration', 'line-through');
        $(this).css('opacity', '0.6');
    });

    $('.trash').on('click', function () {
        var toDelete = $(this).parent().parent();
        toDelete.addClass('elementsOut');
        setTimeout(function () {
            toDelete.remove();
            makeSmoken();
        }, 500);
    });
}