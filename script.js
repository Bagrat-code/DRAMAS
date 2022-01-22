
const boutonTop =  document.querySelector(".photo_top");

    boutonTop.addEventListener('click', () => {
                $("html, body").animate({scrollTop : 0}, 1500);
            });