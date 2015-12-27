/* global jQuery */
(function ( $ ) {
 
    $.fn.getFeed = function( options ) {
        var container = $(this);
        $(container).html("");
        var settings = $.extend({
            FeedURL: "notSet",
            ItemClass: "FeedItem",
            ItemTitleClass: "ItemTitle",
            ItemContentClass: "ItemContent",
            callback: "notSet"
        }, options );
        
        $.ajax({
            url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(settings.FeedURL),
            dataType: 'json',
            success: function (data) {
                $.each(data.responseData.feed.entries, function() {
                    $(container).append("<div class='"+settings.ItemClass+"'><div class='"+settings.ItemTitleClass+"'>"+$(this)[0].title+"</div><div class='"+settings.ItemContentClass+"'><p>"+$(this)[0].content+"</p></div></div>");
                });
                if (typeof settings.callback == 'function') { // make sure the callback is a function
                    settings.callback.call(this); // brings the scope to the callback
                }
            },
            error: function(error)
            {
                alert(error);
            }
        });
    };
 
}( jQuery ));