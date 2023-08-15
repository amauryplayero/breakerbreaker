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
			slide.innerHTML = `<img id="image" src="${data[i].url}" title="${data[i].title}">`
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

	
	populateSlider()
	splide.mount();

	splide.on( 'active', (slide)=>{updateActiveSlideText(slide)})

} );
