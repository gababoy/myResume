const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')

        toggleBtn.onclick = function() {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
        }

var firstIndex = 0;

function automaticSlide() {
    setTimeout(automaticSlide, 2000);
    var pics;
    const img = document.querySelectorAll('.slider img');
    for(pics = 0; pics<img.length;pics++) {
        img[pics].style.display="none";
    }

    firstIndex++;

    if(firstIndex > img.length) {
        firstIndex = 1;
    }

    img[firstIndex-1].style.display="block";
}

automaticSlide();