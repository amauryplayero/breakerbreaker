/* eslint-disable */ 
document.addEventListener( 'DOMContentLoaded', () => {
	const data = slider_data
	const aSpotSlideListEl = document.querySelector( '.splide__list' );

console.log(data)

	const updateActiveSlideText = (slide) => {
		const activeSlide = document.querySelector('.active-slide')
		activeSlide.textContent = slide.slide.children[0].title
	}
	const populateSlider = () => {
		const activeSlide = document.querySelector('.active-slide')
		for(let i = 0 ; i < data.length;i++){
			const slide = document.createElement('li')
			slide.className="splide__slide"
			slide.innerHTML = `<img class="image" src="${data[i].url}" title="${data[i].title}">`
			aSpotSlideListEl.appendChild(slide)
			console.log('div' + i + 'appended')
		}
		activeSlide.textContent = data[0].title
	}
	
	var splide = new Splide( '.splide', {
		direction: 'ttb',
		height   : '100vh',
		wheel    : true,
		wheelSleep: 1500,
	} );

	const loadImageAssetOnButtons = () =>{
		const backwardImg = document.querySelector('.arrow-image-backward')
		const forwardImg = document.querySelector('.arrow-image-forward')

		backwardImg.src = "/wp-content/themes/breakerbreaker/assets/icons/down-chevron.png"
		forwardImg.src = "/wp-content/themes/breakerbreaker/assets/icons/down-chevron.png"
	}

	
	populateSlider()
	loadImageAssetOnButtons()
	splide.mount();
	splide.on( 'active', (slide)=>{updateActiveSlideText(slide)})

} );
