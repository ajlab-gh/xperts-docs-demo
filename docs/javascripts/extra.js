// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    console.log("START: DOM fully loaded.");
    // Replace text from localStorage
    replaceTextFromStorage();

    // Get form and confirmation message elements
    const form = document.getElementById('userInputForm');
    const messageElement = document.getElementById('confirmationMessage');

    // Populate form with values from localStorage if it's not empty
    if (localStorage.getItem('formData')) {
        console.log("POPULATE FORM: formData found in localStorage.");
        const storedData = JSON.parse(localStorage.getItem('formData'));
        document.getElementById('prefix').value = storedData.prefix;
        document.getElementById('region').value = storedData.region;
        document.getElementById('resourceGroupName').value = storedData.resourceGroupName;

        // Display a confirmation message using the storedData object directly
        messageElement.innerHTML = `Prefix: <strong style="color: green;">${storedData.prefix}</strong>, Region: <strong style="color: green;">${storedData.region}</strong>, Resource Group: <strong style="color: green;">${storedData.resourceGroupName}</strong>`;
    }

    // Listen for form submit event
    form.addEventListener('submit', async function (event) {
        console.log("SUBMIT: Form submit event triggered.");
        // Prevent default submission
        event.preventDefault();

        // Retrieve form values
        const prefix = document.getElementById('prefix').value;
        const region = document.getElementById('region').value;
        const resourceGroupName = document.getElementById('resourceGroupName').value;

        // Store form data in an object
        const formData = {
            'prefix': prefix,
            'region': region,
            'resourceGroupName': resourceGroupName
        };

        // Save form data to localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Replace text placeholders
        // applyTextReplacement(document.body, formData);
        replaceTextFromStorage();

        // Display a confirmation message
        messageElement.innerHTML = `Prefix: <strong style="color: green;">${prefix}</strong>, Region: <strong style="color: green;">${region}</strong>, Resource Group: <strong style="color: green;">${resourceGroupName}</strong>`;
    });
});

// Function to replace text in elements
function applyTextReplacement(element, formData) {
    if (element.childNodes.length > 0) {
        element.childNodes.forEach(child => applyTextReplacement(child, formData));
    } else if (element.nodeType === Node.TEXT_NODE) {
        element.textContent = element.textContent
            .replace(new RegExp('@PREFIX', 'g'), formData.prefix)
            .replace(new RegExp('@REGION', 'g'), formData.region)
            .replace(new RegExp('@RESOURCE_GROUP_NAME', 'g'), formData.resourceGroupName);
    }

    // Also replace text in attributes
    if (element.attributes && element.attributes.length > 0) {
        for (let i = 0; i < element.attributes.length; i++) {
            const attribute = element.attributes[i];
            if (attribute.value.includes('@PREFIX') || attribute.value.includes('@REGION') || attribute.value.includes('@RESOURCE_GROUP_NAME')) {
                attribute.value = attribute.value
                    .replace(new RegExp('@PREFIX', 'g'), formData.prefix)
                    .replace(new RegExp('@REGION', 'g'), formData.region)
                    .replace(new RegExp('@RESOURCE_GROUP_NAME', 'g'), formData.resourceGroupName);
            }
        }
    }
}

// Function to be called from other HTML files
function replaceTextFromStorage() {
    if (localStorage.getItem('formData')) {
        console.log("REPLACEMENT: formData found in localStorage.");
        const storedData = JSON.parse(localStorage.getItem('formData'));
        applyTextReplacement(document.body, storedData);
    }
}