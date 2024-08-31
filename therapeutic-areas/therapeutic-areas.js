document.querySelectorAll('.therapeutic-section').forEach(section => {
    section.addEventListener('click', function() {
        // Hide all other paragraphs
        document.querySelectorAll('.therapeutic-section').forEach(otherSection => {
            if (otherSection !== this) {
                otherSection.classList.remove('active');
            }
        });
        
        // Toggle the clicked section
        this.classList.toggle('active');
    });
});
