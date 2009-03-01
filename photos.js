
var API_KEY = '3a26f36ac015fa09111911faeaf6eedc'

// Original code from http://www.mattryall.net/blog/2008/06/flickr-api-and-jquery

$(function(){
  photo_src = function(photo, size){
    return  "http://farm" + photo.farm +
            ".static.flickr.com/" + photo.server +
            "/" + photo.id +
            "_" + photo.secret +
            (size ? "_" + size : '') +
            ".jpg"
  }
  $.getJSON("http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+API_KEY+"&photoset_id=72157600007733788&format=json&jsoncallback=?",
    function (data) {
      $.each(data.photoset.photo, function (i, photo) {
          var image = $("<img/>")
                      .attr("src", photo_src(photo, 's'))

          var link = $("<a/>")
              .attr("title", photo.title)
              .attr("rel",   "lightbox-smita")
              .attr("href",  photo_src(photo))
              .append(image)

          $("#photos").append(
            $("<div/>").append(link)
          );
      });
      // set up lightboxes for the recently-added photos
      $.Lightbox.domReady()
    }
  );
})
