document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.tvmaze.com/shows")
        .then(response => response.json())
        .then(data => {
            const showsContainer = document.getElementById("shows");
            data.forEach(show => {
                const showElement = document.createElement("div");
                showElement.classList.add("show");

                const imageElement = document.createElement("img");
                imageElement.src = show.image ? show.image.medium : "https://via.placeholder.com/200x300";
                imageElement.alt = show.name;

                const showContent = document.createElement("div");
                showContent.classList.add("show-content");

                const titleElement = document.createElement("h2");
                titleElement.classList.add("show-title");
                titleElement.textContent = show.name;

                const summaryElement = document.createElement("p");
                summaryElement.classList.add("show-summary");
                summaryElement.innerHTML = show.summary;

                showContent.appendChild(titleElement);
                showContent.appendChild(summaryElement);

                showElement.appendChild(imageElement);
                showElement.appendChild(showContent);

                showsContainer.appendChild(showElement);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});