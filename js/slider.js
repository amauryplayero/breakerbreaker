document.addEventListener('DOMContentLoaded', () => {  
    const leftBtn = document.getElementById("left-button")
    const rightBtn = document.getElementById("right-button")
    const aSpotImage = document.getElementById("image")
    
    
    function getImageViaAjax(imageId) {
        jQuery.ajax({
            type: 'POST',
            url: my_ajax_object.ajax_url, // This variable is automatically defined by WordPress and points to the AJAX endpoint.
            data: {
                action: 'get_image_url',
                image_id: imageId,
            },
            success: function(response) {
                // Parse the JSON response to get the image URL.
                var imageUrl = JSON.parse(response).image_url;
                console.log('firing')
                aSpotImage.src=imageUrl
                // Now you have the image URL, you can update the slider with the new image.
                // Add your slider update logic here.
            },
            error: function(xhr, status, error) {
                // Handle any error that may occur during the AJAX call.
                console.error(error);
            }
        });
    }
    

    leftBtn.addEventListener("click", ()=>getImageViaAjax("1"))
    rightBtn.addEventListener("click", ()=>getImageViaAjax("2"))
    
    
  });
