$(document).ready(function () {
    $('#view-work').on('click', function () {
        const images = $('#images').offset().top;

        $('html, body').animate(
            {
                scrollTop: images
            },
            1200,
            'swing' // You can change the easing function here if needed
        );
    });
});
