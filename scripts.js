function toggleDescription() {
    const description = document.getElementById('universe-description');
    const toggleButton = document.getElementById('universe-toggle');

    if (description.classList.contains('collapsed')) {
        description.classList.remove('collapsed');
        description.classList.add('expanded');
        toggleButton.textContent = 'Read Less';
    } else {
        description.classList.remove('expanded');
        description.classList.add('collapsed');
        toggleButton.textContent = 'Read More';
    }
}

window.onscroll = function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        backToTopButton.classList.add('show');
        backToTopButton.classList.remove('hide');
    } else {
        backToTopButton.classList.add('hide');
        backToTopButton.classList.remove('show');
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}