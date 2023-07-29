/* eslint-disable */ 
document.addEventListener( 'DOMContentLoaded', () => {


	const leftBtn = document.getElementById( 'left-button' );
	const rightBtn = document.getElementById( 'right-button' );
	const aSpotImage = document.getElementById( 'image' );
	const imgTitle = document.getElementById( 'img-title' );
	console.log( 'firing' );
	console.log( slider_images );

	// get all the links at first so that I can just change them

	let slide = 0;
	aSpotImage.src = slider_images[ slide ];
	function switchSlide( direction ) {
		if ( direction === 'right' ) {
			if ( slide < slider_images.length - 1 ) {
				slide++;
			} else {
				slide = 0;
			}
		} else if ( slide !== 0 ) {
			slide--;
		}
		aSpotImage.src = slider_images[ slide ];
		console.log( aSpotImage.src );
	}

	leftBtn.addEventListener( 'click', () => switchSlide( 'left' ) );
	rightBtn.addEventListener( 'click', () => switchSlide( 'right' ) );
} );
