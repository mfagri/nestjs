// const { JSDOM } = require('jsdom');

// Create a virtual DOM environment using jsdom


// Function to handle scrolling and element retrieval
function handleAutoScroll() {
  const elements = document.getElementsByClassName('Yl- MIw Hb7');
  const imageUrls = [];

  // Iterate over the elements
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    // Find the <img> elements within the current element
    const imageElements = element.getElementsByTagName('img');

    // Iterate over the image elements
    for (let j = 0; j < imageElements.length; j++) {
      const imageElement = imageElements[j];
      const imageUrl = imageElement.src;

      // Push the image URL to the array
      imageUrls.push(imageUrl);
      console.log(imageUrls);
    }
  }

  // Scroll the page down by a certain amount
  window.scrollBy(0, 500); // Adjust the scroll amount as needed

  return imageUrls;
}

// Function to save image URLs to a file
// function saveToFile(content, filename) {
//   const data = new Blob([content.join('\n')], { type: 'text/plain' });

//   // Check if the environment supports the File System API
//   if (window.navigator && window.navigator.msSaveOrOpenBlob) {
//     // For Internet Explorer and Microsoft Edge
//     window.navigator.msSaveOrOpenBlob(data, filename);
//   } else {
//     // For other environments
//     const link = document.createElement('a');
//     link.href = window.URL.createObjectURL(data);
//     link.download = filename;
//     link.style.display = 'none';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }
// }

// Function to initiate auto-scrolling
function startAutoScroll() {
  // Interval duration (in milliseconds)
  const intervalDuration = 2000; // Adjust the interval duration as needed

  // Start the auto-scrolling interval
  const intervalId = setInterval(function () {
    const imageUrls = handleAutoScroll();

    // Stop auto-scrolling after a certain number of iterations
    const maxIterations = 10; // Adjust the maximum number of iterations as needed
    let iterationCount = 0;

    // Check if the maximum number of iterations is reached
    if (iterationCount >= maxIterations) {
      clearInterval(intervalId);

      // Save the image URLs to a file
      // saveToFile(imageUrls, '/Users/mfagri/Desktop/image_urls.txt');
    }

    iterationCount++;
  }, intervalDuration);
}

// Start the auto-scrolling
startAutoScroll();
