'use strict';

const links = document.querySelectorAll('a[href^="#"]');

links.addEventListener('DOMContentLoaded', function () {
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});