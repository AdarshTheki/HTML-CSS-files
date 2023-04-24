const container = document.querySelectorAll('.container');

container.forEach((container) => {
    const answer = container.querySelector('.answer');
    const icon = container.querySelector('.icon');
    
    container.addEventListener('click', () => {
        if(icon.classList.contains('active')) {
            icon.classList.remove('active');
            answer.style.maxHeight = null;
        }else{
            icon.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    });
});