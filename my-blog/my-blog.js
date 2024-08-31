document.addEventListener('DOMContentLoaded', async () => {

    var post_title = localStorage.getItem("post-title");
    if (post_title != null)
        document.getElementById('post-title').innerHTML = post_title;
    
    var post_content = localStorage.getItem("post-content");
    if (post_content != null)
        document.getElementById('post-content').innerHTML = post_content;

    async function getUserIP() {
        try {
            const response = await fetch('https://www.myexternalip.com/json');
            if (!response.ok) {
                throw new Error('HTTP error! status: ${response.status}');
            }
            const data = await response.json();
            return data.ip; // Access the IP value from the JSON object
        } catch (error) {
            console.error('Failed to fetch IP:', error);
            return null;
        }
    }

    const userIP = await getUserIP();
    const allowedIPPrefix = config.allowedIPPrefix;

    if (userIP && userIP.startsWith(allowedIPPrefix)) {
        enableEditing();
    }

    function enableEditing() {
        const editableElements = document.querySelectorAll('.editable');
        const saveButton = document.querySelector('.save-button');

        editableElements.forEach(element => {
            element.setAttribute('contenteditable', 'true');

            element.addEventListener('input', () => {
                saveButton.style.display = 'block';
            });
        });

        saveButton.addEventListener('click', () => {
            saveChanges();
        });
    }

    function saveChanges() {
        let postTitle = document.getElementById('post-title').innerHTML.trim();
        let postContent = document.getElementById('post-content').innerHTML.trim();
    
        postTitle = postTitle.replace(/(\n\s*\n)+/g, '\n').replace(/\s\s+/g, ' ');
        postContent = postContent.replace(/(\n\s*\n)+/g, '\n').replace(/\s\s+/g, ' ');
    
        localStorage.setItem("post-title", postTitle);
        localStorage.setItem("post-content", postContent);
    
        alert('Changes saved successfully!');
        document.querySelector('.save-button').style.display = 'none';
    }
    
    
});