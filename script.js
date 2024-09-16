function loaderAnimation() {
  var loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.top = "-130%";
  }, 5200);
}
loaderAnimation();

// document.addEventListener('DOMContentLoaded', (event) => {
//   function showMessage() {
//     let messageDiv = document.createElement('div');
//     messageDiv.className = 'popup-message';
//     messageDiv.textContent = ' The Game Is Building ';
    
//     document.body.appendChild(messageDiv);
    
//     setTimeout(() => {
//       messageDiv.style.opacity = 0;
//       setTimeout(() => {
//         document.body.removeChild(messageDiv);
//       }, 500); 
//     }, 3000); 
//   }

//   // Add click event listener to the #add-more element
//   document.getElementById('add-more').addEventListener('click', showMessage);
// });

document.addEventListener('DOMContentLoaded', (event) => {
  function showMessage() {
    let messageDiv = document.createElement('div');
    messageDiv.className = 'popup-message';
    
    let progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    
    let fill = document.createElement('div');
    fill.className = 'fill';
    
    progressBar.appendChild(fill);
    
    let messageText = document.createElement('div');
    messageText.textContent = ' The Game Is Building ';
    
    messageDiv.appendChild(progressBar);
    messageDiv.appendChild(messageText);
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
      messageDiv.style.opacity = 0;
      setTimeout(() => {
        document.body.removeChild(messageDiv);
      }, 500); // Wait for fade-out transition
    }, 3000); // Show message for 10 seconds
  }

  // Add click event listener to the #add-more element
  document.getElementById('add-more').addEventListener('click', showMessage);
});
