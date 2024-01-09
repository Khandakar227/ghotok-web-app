// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const resultsContainer = document.querySelector('.results');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting traditionally
        
        // Gather form data
        const formData = new FormData(form);
        
        // Construct the URL for fetching data from the API
        let url = 'https://api.example.com/users?'; // Replace with your API endpoint
        
        for (let [key, value] of formData.entries()) {
            if (value.trim() !== '') { // Check if the value is not empty
                // Append each form field and its value to the URL
                url += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
            }
        }

        // Fetch data from the API
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Clear existing results
                resultsContainer.innerHTML = '';

                // Update HTML content with fetched results
                data.forEach(user => {
                    const resultElement = document.createElement('div');
                    resultElement.className = 'result';

                    const profileLink = document.createElement('a');
                    profileLink.href = `user_profile.html?username=${user.username}`;
                    
                    const nameHeader = document.createElement('h3');
                    nameHeader.innerText = user.name;

                    const ageParagraph = document.createElement('p');
                    ageParagraph.innerText = `Age: ${user.age}`;

                    // Add more elements as needed

                    profileLink.appendChild(nameHeader);
                    profileLink.appendChild(ageParagraph);
                    // Append other elements to profileLink as needed

                    resultElement.appendChild(profileLink);
                    resultsContainer.appendChild(resultElement);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});
