console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    // Challenge 1: Fetch and display random dog images
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById("dog-image-container");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = "Random Dog";
          img.style.width = "200px";
          img.style.margin = "10px";
          imageContainer.appendChild(img);
        });
      });
  
    // Challenge 2: Fetch and display dog breeds
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById("dog-breeds");
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const li = document.createElement("li");
          li.textContent = breed;
          li.style.cursor = "pointer";
          breedList.appendChild(li);
        });
  
        // Challenge 3: Change font color when a breed is clicked
        breedList.addEventListener("click", event => {
          if (event.target.tagName === "LI") {
            event.target.style.color = "blue";
          }
        });
  
        // Challenge 4: Filter breeds based on selected letter
        const breedDropdown = document.getElementById("breed-dropdown");
        breedDropdown.addEventListener("change", event => {
          const selectedLetter = event.target.value;
          breedList.innerHTML = ""; // Clear list
          breeds.forEach(breed => {
            if (breed.startsWith(selectedLetter)) {
              const li = document.createElement("li");
              li.textContent = breed;
              li.style.cursor = "pointer";
              breedList.appendChild(li);
            }
          });
        });
      });
  });