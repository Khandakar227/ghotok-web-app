function updateColorSample() {
    const complexion = document.getElementById('complexion');
    const colorSample = document.getElementById('colorSample');
    colorSample.style.backgroundColor = complexion.value;
}
// Initialize color sample
updateColorSample();


// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally
        
        // Gather form data
        const formData = new FormData(form);
        
        // Construct the URL for updating the database
        let url = '/update?';
        
        for (let [key, value] of formData.entries()) {
            // Only append fields with non-empty values to the URL
            if (value.trim() !== '') {
                url += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
            }
        }

        // Remove the trailing '&' character
        url = url.slice(0, -1);
        console.log(url);
        // Send the request to update the database
        fetch(url, {
            method: 'POST' // Assuming the server expects a POST request
        })
        .then(response => response.json()) // Assuming the server returns JSON
        .then(data => {
            if (data.success) {
                alert('Profile updated successfully!');
            } else {
                alert('Failed to update profile. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error updating profile:', error);
            alert('An error occurred while updating the profile.');
        });
    });
});
 