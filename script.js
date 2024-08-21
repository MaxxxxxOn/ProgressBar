const progressElement = document.querySelector('.progress');
const valueInput = document.getElementById('value');
const animateToggle = document.getElementById('animate');
const hideToggle = document.getElementById('hide');

valueInput.addEventListener('input', () => {
    const value = Math.min(Math.max(valueInput.value, 0), 100);
    progressElement.style.background = `conic-gradient(#005bfd ${value}%, #e8eef4 ${value}% 100%)`;
});

animateToggle.addEventListener('change', () => {
    if (animateToggle.checked) {
        progressElement.classList.add('animated');
    } else {
        progressElement.classList.remove('animated');
    }
});

hideToggle.addEventListener('change', () => {
    if (hideToggle.checked) {
        progressElement.style.visibility = 'hidden';
    } else {
        progressElement.style.visibility = 'visible';
    }
});

