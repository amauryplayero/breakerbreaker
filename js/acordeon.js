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



    const makeTabActive = (e) =>{
            //  clean up content by switching classes from pastActiveDiv
            const pastActiveDiv = document.querySelector('.active')
            const id = e.target.parentNode.id
            console.log(id)
            pastActiveDiv.innerHTML= 
                `
                <div class="title-container">
                    <h2 class="tab-title">${data[pastActiveDiv.id].title}</h2>
                </div>
                `
            pastActiveDiv.querySelector(".title-container").addEventListener('click', (e)=>makeTabActive(e))
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
            div.innerHTML= 
                `
                <div class="title-container">
                    <h2 class="tab-title">${data[i].title}</h2>
                </div>
                `
            div.querySelector(".title-container").addEventListener('click', (e)=>makeTabActive(e))
        }
        acordeonContainer.appendChild(div)
        lastSlide && appendContentToTab(i)
    }

    const singleTab = document.getElementsByClassName('single-tab');

    

  

    
  


    


})