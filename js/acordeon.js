/* eslint-disable */ 
document.addEventListener( 'DOMContentLoaded', () => {
console.log(acordeon_data)
const acordeonContainer = document.getElementById('acordeon-wrapper');
const data = acordeon_data


    const appendContentToTab = (id) =>{
        const activeTab = document.getElementById(id)
        const html = `
            <h1> ${data[id].title} </h1> 
            <p> ${data[id].summary} </p>
            <div> video content here! </div>
        `
        activeTab.innerHTML = html
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

        // append content info to active tab
        appendContentToTab(id)
    }

    for(let i = 0; i<data.length; i++){
        const div = document.createElement('div')
        const lastSlide = i===data.length-1
        div.className="single-tab"
        // might want to add an id property when the program post is created
        div.id=i
        if(lastSlide){
            div.className="single-tab active"
        } else {
            renderClosedTab(div, i)
        }
        acordeonContainer.appendChild(div)
        lastSlide && appendContentToTab(i)
    }

    const singleTab = document.getElementsByClassName('single-tab');

    

  

    
  


    


})