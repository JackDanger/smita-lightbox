
var API_KEY = '3a26f36ac015fa09111911faeaf6eedc'

// Original code from http://www.mattryall.net/blog/2008/06/flickr-api-and-jquery

$.getJSON("http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+API_KEY+"&photoset_id=72157600007733788&format=json&jsoncallback=?",
  function (data) {
    console.log(data.photoset.photo[0])
    $.each(data.photoset.photo, function (i, photo) {
        var image = $("<img/>")
                    .attr("src",
                        "http://farm" + photo.farm +
                        ".static.flickr.com/" + photo.server +
                        "/" + photo.id +
                        "_" + photo.secret + "_s.jpg")

        var link = $("<a/>").attr("title", photo.title)
            .attr("href", "http://www.flickr.com/photos/smita_pednekar/" + photo.id)
            .append(image)

        $("#photos").append(
          $("<div/>").append(link)
        );
    });
  }
);
