<h2 style="background-color: white; box-sizing: border-box; color: #333333; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 30px; font-weight: 500; line-height: 1.1; margin-bottom: 10px; margin-top: 20px; text-align: center;">
<a href="https://bradtech.ca/SimpleRSSFeed" style="background-color: transparent; box-sizing: border-box; color: #337ab7; text-decoration: none;">Demo</a></h2>
<div>
A simple plugin for retrieving rss feeds. It takes each item in an rss feed and puts them in a div assigning what ever style classes you provide.</div>
<div>
<h3>
Download the plugin: <a href="http://bradtech.ca/SimpleRSSFeed/SimpleRSSFeed.js">here</a></h3>
<h3>
Usage</h3>
<pre>        Include scripts in the header.
        &lt;script src="jquery-2.1.4.min.js"&gt;&lt;/script&gt;//Required
        &lt;script src="imagesloaded.pkgd.min.js"&gt;&lt;/script&gt;//Optional for masonry
        &lt;script src="masonry.pkgd.min.js"&gt;&lt;/script&gt;//Optional
        &lt;script src="SimpleRSSFeed.js"&gt;&lt;/script&gt;//Required
    </pre>
<pre>        &lt;!-- Make the container.&gt;
        &lt;div id="FeedContainer"&gt;
        &lt;/div&gt;
    </pre>
<pre>        //Load the feed.
        $("#FeedContainer").getFeed({
            FeedURL: &lt;Your Feed URL&gt;,
            ItemClass: &lt;Your style class for each feed item&gt;,
            ItemTitleClass: &lt;Your style class for each feeed items title&gt;,
            ItemContentClass: &lt;Your style class for each feeed items content&gt;,
            //Anycall back function you want to run when feed is retrieved.
            callback: function () {
                //Sets up masonary layout.
                $grid = $('#FeedContainer').masonry({
                    itemSelector: '.FeedItem'
                });
                //Relayout when images are loaded.
                $grid.imagesLoaded().progress( function() {
                    $grid.masonry('layout');
                });
            }
        });
    </pre>
</div>
