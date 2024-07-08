function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// FOR NAVBAR
const tabs = document.querySelectorAll('.tabBtn');
const all_content = document.querySelectorAll('.currentDiv');

tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
        event.preventDefault();
        const index = tab.getAttribute('data-index');

        // Remove active class from all tabs and contents
        tabs.forEach(tab => { tab.classList.remove('active'); });
        all_content.forEach(content => { content.classList.remove('active'); });

        // Add active class to the clicked tab and corresponding page
        tab.classList.add('active');
        all_content[index].classList.add('active');
    });
});