/**
 * Created by Roma on 16.02.2017.
 */
$(function () {
    $('.text').hide();
    $('.tabs')
        .removeClass('tabs--active')
        .on('click', function(){
            $('.tabs').removeClass('tabs--active');
            $(this).addClass('tabs--active');
            $('.text').hide();

            var id = $(this).attr('id');
            var textNumber = parseInt(id);

            $('#' + textNumber + 'text')
                .stop()
                .fadeIn(1000);
        });

    $('#1tab').addClass('tabs--active');
    $('#1text').show();
});
