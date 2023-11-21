function fetchJobData(callback) {
    fetch('data_job.json')
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error fetching job data:', error));
}

document.addEventListener("DOMContentLoaded", function () {
    // Get the container element
    const panelContainer = document.getElementById("panelContainer");

    // Fetch the JSON data from the file
    fetch("data_job.json")
        .then(response => response.json())
        .then(jsonData => {
            // Loop through the JSON data and create panels
            jsonData.forEach(function (job) {
                // Create a panel element
                const panel = document.createElement("div");
                panel.classList.add("job-panel");

                // Fill the panel with job information
                panel.innerHTML = `
                    <h2>${job.jobName || job.name}</h2>
                    <p><strong>Contractor:</strong> ${job.contractor}</p>
                    <p><strong>Earth:</strong> ${job.earth}</p>
                    <p><strong>Pay:</strong> ${job.pay} units</p>
                    <p>${job.details}</p>
                    <p>${job.moreDetails}</p>
                `;

                // Append the panel to the container
                panelContainer.appendChild(panel);
            });
        })
        .catch(error => console.error("Error fetching JSON:", error));
});