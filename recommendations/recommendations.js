// Function to display recommendations
function displayRecommendations() {
    // Clear existing content
    const recommendationList = document.querySelector('.recommendation-list');

    // Get recommendations from the HTML
    const recommendations = document.querySelectorAll('.recommendation');

    // Check if there are recommendations
    if (recommendations.length === 0) {
        console.log('No recommendations found.');
        return; // Exit the function if there are no recommendations
    }

    let currentIndex = 0;

    const displayCurrentRecommendation = () => {
        const clonedRecommendation = recommendations[currentIndex].cloneNode(true);

        recommendationList.appendChild(clonedRecommendation);
    };

    // Initial display of the first recommendation
    displayCurrentRecommendation();

    const switchToNextRecommendation = () => {
        // Increment the currentIndex
        currentIndex = (currentIndex + 1) % recommendations.length;
        
        // Clear existing content
        recommendationList.innerHTML = '';

        // Display the current recommendation
        displayCurrentRecommendation();
    };

    setInterval(switchToNextRecommendation, 3000);

}

displayRecommendations();