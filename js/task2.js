/**
 * Created by Roma on 16.02.2017.
 */
$(function () {
    $('.input')
        .mouseenter(function(e) {
            var input = $(e.target);
            input.siblings('.tooltip').fadeIn(100);
        })
        .mouseleave(function (e) {
            var input = $(e.target);
            input.siblings('.tooltip').fadeOut(100);
        });

    $('.show-tooltips').click(function () {
        $('.tooltip').show();
    });
});
