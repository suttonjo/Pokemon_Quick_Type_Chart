$(document).ready(function() {
    //hide the options on load
    $('#customSelect').children('.customSelectItem').hide();

    //give it the caption of the first option as default.
    var firstChild = $('#customSelect .customSelectItem');
    $('#customSelect').attr('identifier', firstChild.attr('identifier'));
    $('#customSelectCaption').html(firstChild.html());

    //set a variable so we know in which state it is.
    $('#customSelect').data('customSelectState', false);

    //bind the click event so you can take action on click.
    $('#customSelect').click(function(event) {
        if ($('#customSelect').data('customSelectState') == false) {
            //hide the caption, show the items.
            $('#customSelectCaption').hide();
            $('.customSelectItem').slideDown();

            //set the variable so we know the state is now 'open'.
            $('#customSelect').data('customSelectState', true);
        }
        else {
            //set the new identifier.
            $('#customSelect').attr('identifier', $(event.target).attr('identifier'));

            //set the new caption.
            var newCaption = $(event.target).html();
            $('#customSelectCaption').html(newCaption);

            //show the caption, hide the items.
            $('#customSelectCaption').show();
            $('.customSelectItem').hide();

            //set the variable so we know the state is now 'closed'.
            $('#customSelect').data('customSelectState', false);
        }
    });
});