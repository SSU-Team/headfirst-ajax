const initPage = () => {

  var welcomePaneShowing = true; // for what?

  showHint = () => {
    console.log(this);

    if (!welcomePaneShowing) {
      return;
    }

    switch (this.title) {
      case 'begginers':
        var hintText = 'Just getting started? Come join us!';
        break;
      case 'intermediate':
        var hintText = 'Take your flexibility to the next level!';
        break;
      case 'advanced':
        var hintText = 'Perfectly join your body with mind with this intensive workouts.';
        break;
      default:
        var hintText = 'Click a tab to display the course schedule for the selected class';
    }
    // console.log(hintText);
    var contentPane = document.querySelector('#content > h3');
    contentPane.innerText = hintText;
  }

  hideHint = () => {}
  
  showTab = () => {}

  var images = document.querySelectorAll('img');
  console.log(images);
  
  for (var i = 0; i < images.length; i++) {
    var currentImage = images[i];
    // currentImage.addEventListener('mouseover', showHint);
    // currentImage.addEventListener('mouseout', hideHint);
    //currentImage.addEventListener('click', showTab);
    currentImage.addEventListener('click', function(event) {
      console.log(this);
    });
  }
}

window.addEventListener('load', initPage);