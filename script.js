// Menu Section
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');
const line = document.querySelector('.line');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default behavior of anchor links
    
    // Remove 'active' class from all tabs
    tabs.forEach((t) => {
      t.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    tab.classList.add('active');

    // Hide all content elements
    contents.forEach((content) => {
      content.style.display = 'none';
    });

    // Show the corresponding content
    contents[index].style.display = 'block';

    // Update the line position and width
    line.style.width = tab.offsetWidth + 'px';
    line.style.left = tab.offsetLeft + 'px';
  });
});

// Initialize by clicking the first tab
tabs[0].click();
