// your code here
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('urlForm');
  const urlDisplay = document.getElementById('url');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    // Construct the URL with query parameters
    const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
    const fullUrl = `https://localhost:8080/${queryString}`;

    // Update the text in the <h3> element
    urlDisplay.textContent = `URL: ${fullUrl}`;
  });
});
