/* eslint-disable */ 
document.addEventListener( 'DOMContentLoaded', () => {
console.log(acordeon_data)
const acordeonContainer = document.getElementById('acordeon-wrapper');
const data = acordeon_data


    const appendContentToTab = (id) =>{
        const activeTab = document.getElementById(id)
        const thumbnails = Object.values(acordeon_data[id].thumbnails);
        const videosData = acordeon_data[id].videos
        const videoFrames = []

        
        const html = `
        <h1> ${data[id].title} </h1> 
        <p> ${data[id].summary} </p>
        <div id="video-div"> 
            <div class="splide" role="group" aria-label="Splide Basic HTML Example">
                <div class="splide__track">
                        <ul class="splide__list" id="splide__list">
              
                        </ul>
                </div>
            </div>
        </div>
        `
        activeTab.innerHTML = html
        const videoList = document.querySelector('#splide__list')


        console.log(Object.values(thumbnails))
        for(let i =0; i<thumbnails.length; i++){
            const li = document.createElement('li')
            li.className="splide__slide"
            li.innerHTML=`<iframe width="200" height="115" src="${thumbnails[i]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
            // li.innerHTML=`haiii`
            videoList.appendChild(li)
        }
        console.log(videoList)
        const splide = new Splide( '.splide', {
            perPage: 3,
            rewind : true,
          } );
          
        splide.mount();
        
        
    }

    const renderClosedTab = (div,id) =>{
        div.innerHTML= 
        `
            <div class="title-container">
                <h2 class="tab-title">${data[id].title}</h2>
            </div>
        `
        div.querySelector(".title-container").addEventListener('click', (e)=>makeTabActive(e))
        div.querySelector(".tab-title").addEventListener('click', function(event) {
            event.stopPropagation()
            // Create a new click event targeting the parentDiv
            const newEvent = new MouseEvent('click', {
                bubbles: true, // Allow the event to bubble up
                cancelable: true,
                view: window
            });
            
                // Dispatch the new click event on the parentDiv
                div.querySelector(".title-container").dispatchEvent(newEvent);
        })

    }



    const makeTabActive = (e) =>{
        const pastActiveDiv = document.querySelector('.active')
        const id = e.target.parentNode.id

        //  clean up content by switching classes from pastActiveDiv and rendering to closed tab
        renderClosedTab(pastActiveDiv, id)
        pastActiveDiv.className="single-tab"
            
        // change active tab
        const newActiveDiv = document.getElementById(id)
        newActiveDiv.className = "single-tab active"
        appendContentToTab(id)
    }

    for(let i = 0; i<data.length; i++){
        const div = document.createElement('div')
        const lastSlide = i===data.length-1
        div.className="single-tab"
        // might want to add an id property when the program post is created
        div.id=i
        div.style.backgroundImage=`url("${data[div.id].url}")`
        if(lastSlide){
            div.className="single-tab active"
        } else {
            renderClosedTab(div, i)
        }
        acordeonContainer.appendChild(div)
        lastSlide && appendContentToTab(i)
    }

    const singleTab = document.getElementsByClassName('single-tab');

    
    // const splide = new Splide( '.splide', {
    //     perPage: 3,
    //     rewind : true,
    //   } );
      
    // splide.mount();
  




    
  


    


})