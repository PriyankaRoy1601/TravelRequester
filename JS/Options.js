function goToFormPage() {
    // Replace 'formPage.html' with the actual URL of your form page
    window.location.href = 'Form.html';
}

// Function to navigate to the view page
function goToViewPage() {
    // Replace 'viewPage.html' with the actual URL of your view page
    window.location.href = 'View.html';
}

// Event listeners for the "Form" and "View" links
document.getElementById('formLink').addEventListener('click', goToFormPage);
document.getElementById('viewLink').addEventListener('click', goToViewPage);