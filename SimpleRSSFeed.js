/* global jQuery */
(function ( $ ) {
 
    $.fn.getFeed = function( options ) {
        var container = $(this);
        
        var settings = $.extend({
            FeedURL: "notSet",
            ItemClass: "FeedItem",
            ItemTitleClass: "ItemTitle",
            ItemContentClass: "FeedContent"
        }, options );
        
        $.ajax({
            url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(settings.FeedURL),
            dataType: 'json',
            success: function (data) {
                $.each(data.responseData.feed.entries, function() {
                    $(container).append("<div class='"+settings.ItemClass+"'>");
                    $(container).append("<div class='"+settings.ItemTitleClass+"'>"+$(this)[0].title+"</div>");
                    $(container).append("<div class='"+settings.ItemContentClass+"'>"+$(this)[0].content+"</div>");
                    $(container).append("</div>");
                });
            },
            error: function(error)
            {
                alert(error);
            }
        });
    };
 
}( jQuery ));