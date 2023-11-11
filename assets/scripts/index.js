'use strict';

const sectionNavigator = document.querySelectorAll('a[href^="#"]');

document.addEventListener('DOMContentLoaded', function () {
    sectionNavigator.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
            
                });
            }
        });
    });
});