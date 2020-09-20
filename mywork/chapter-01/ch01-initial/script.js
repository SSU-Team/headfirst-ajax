'use strict';

window.addEventListener('load', function() {

  let thumbnailPaneNode = document.querySelector('#thumbnailPane');
  let detailsPaneNode = document.querySelector('#detailsPane');
  let descriptionNode = document.querySelector('#description');
  let imgDetailedNode = document.querySelector('#detailsPane > img');

  thumbnailPaneNode.addEventListener('click', function(event) {

    if (event.target.tagName === 'IMG') {
      let imgId = event.target.id;
    
      let request = new XMLHttpRequest();
      request.open('GET', `getDetails.php?ImageID=${imgId}`);

      request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.statusText === 'OK') {
          descriptionNode.innerHTML = request.response;
          imgDetailedNode.src = `images/${event.target.id}-detail.jpg`;
        }
      });

      request.send();
    }

  })

})