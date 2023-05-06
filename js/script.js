document.addEventListener('DOMContentLoaded', function() {
    const secondSection = document.getElementById('second-section');
    const thirdSection = document.getElementById('third-section');
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', function() {
        const secondSectionRect = secondSection.getBoundingClientRect();
        const thirdSectionRect = thirdSection.getBoundingClientRect();
        
        if (secondSectionRect.top <= windowHeight && secondSectionRect.bottom >= 0) {
            secondSection.classList.add('visible');
        } else {
            secondSection.classList.remove('visible');
        }

        if (thirdSectionRect.top <= windowHeight && thirdSectionRect.bottom >= 0) {
            thirdSection.classList.add('visible');
        } else {
            thirdSection.classList.remove('visible');
        }
    });
});