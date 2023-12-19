const drop = document.querySelectorAll(".accordeon .drop");

drop.forEach((drops) => {
    drops.addEventListener('click', (e) => {
        const accordeon = drops.parentElement;
        const content = accordeon.querySelector(".content");
        const isOpen = accordeon.classList.contains('open');

        if(isOpen) {
            accordeon.classList.remove('open');
            content.style.display = 'none'; 
        } else {
            accordeon.classList.add('open');
            content.style.display = 'block';
        }
    })
});
