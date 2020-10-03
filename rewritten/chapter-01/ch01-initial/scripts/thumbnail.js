const initPage = function() {

	const renderDetailInformation = function(detailInformation) {
		const detailsPaneNode = document.querySelector('#detailsPane');

		const imgNode = detailsPaneNode.querySelector('img');
		const descriptionNode = detailsPaneNode.querySelector('#description');

		imgNode.src = detailInformation.src;
		descriptionNode.innerHTML = detailInformation.descriptionHTML;
	}

	const getDetailInformaiton = function(imgNode) {
		let detailInformation = {};

		detailInformation.src = 'images/' + imgNode.title + '-detail.jpg';

		let request = new XMLHttpRequest();
		let requestType = 'GET';
		let requestURL = 'getDetails.php?ImageID=' + escape(imgNode.id);
		request.open(requestType, requestURL, true);

		request.onreadystatechange = function() {
			if (request.status === 200) {
				detailInformation.descriptionHTML = request.responseText;

				renderDetailInformation(detailInformation);
			}
		}

		request.send(null);
	}


	const thumbnailPaneHandler = function(event) {
		if (event.target.tagName === 'IMG') {
			getDetailInformaiton(event.target);
		}
	}

	const thumbnailPaneNode = document.querySelector('#thumbnailPane');
	thumbnailPaneNode.addEventListener('click', thumbnailPaneHandler);

	const detailsPaneNode = document.querySelector('#detailsPane');

}

window.addEventListener('load', initPage);
