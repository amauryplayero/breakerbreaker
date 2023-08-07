/* eslint-disable */ 
document.addEventListener( 'DOMContentLoaded', () => {


	const downBtn = document.getElementById( 'left-button' );
	const upBtn = document.getElementById( 'right-button' );
	const aSpotImage = document.getElementById( 'image' );
	const aSpotImageTitle = document.getElementById( 'img-title' );
	console.log( 'ai' );


	// get all the links at first so that I can just change them

	let slide = 0;
	aSpotImage.src = slider_data[ slide ].url;
	aSpotImageTitle.textContent = slider_data[ slide ].title
	function switchSlide( direction ) {
		if ( direction === 'up' ) {
			if ( slide < slider_data.length - 1 ) {
				slide++;
			} else {
				slide = 0;
			}
		} else {
			if( slide !== 0 ){
				slide--;
			} else {
				slide = slider_data.length-1
			}
		} 
		aSpotImage.src = slider_data[ slide ].url;
		aSpotImageTitle.textContent = slider_data[ slide ].title

	}

	upBtn.addEventListener( 'click', () => switchSlide( 'up' ) );
	downBtn.addEventListener( 'click', () => switchSlide( 'down' ) );
} );
