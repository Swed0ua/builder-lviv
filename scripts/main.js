// burger menu

let burgerMenu = {
    ico : document.querySelector('.burger__ico'),
    src : document.querySelectorAll('.menu li:not(.burger__ico)'),
    area : document.querySelector('.burger-menu__wrap')
}

class BurgerMenu {
    constructor(ico, src, area) {
        this.ico = ico;
        this.src = src;
        this.area = area;
    }

    transfer() {
        this.src.forEach(e => {
            this.area.innerHTML += e.innerHTML;
        });
    }

    toggle() {
        let burgerMH =document.documentElement.clientHeight - (this.area.getBoundingClientRect().top);
        this.area.style.maxHeight = burgerMH + 'px';
        this.ico.classList.toggle('_active');
        this.ico.classList.contains('_active') ? this.area.classList.add('_active') : this.area.classList.remove('_active');
    }
}

let burger1 = new BurgerMenu (burgerMenu.ico, burgerMenu.src, burgerMenu.area);
burger1.transfer();

    burgerMenu.ico.addEventListener('click', e => {
        burger1.toggle();
    })


// Header listener

let header = document.querySelector('header');
let headerContact = document.querySelector('.container__contacts').offsetHeight;

    window.addEventListener('scroll', e => {
        let headerContactWidth = document.querySelector('.container__contacts').offsetWidth;
        if (window.pageYOffset > headerContact) {
            header.style.position = 'fixed';
            header.style.top = 0;
            header.style.width = headerContactWidth + 'px';
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.31)';   

        } else {
            header.style.width = 100 + '%';
            header.style.position = 'absolute';
            header.style.top = headerContact + 'px';  
            header.style.backgroundColor = 'transparent';   
        }
    })


// Slider settings and listener

let sliderOurWorks = {
    wrapper : document.querySelector('.our-works__slider-wrapper'),
    slide : document.querySelectorAll('.our-works__slider .slide__item'),
    preview : document.querySelector('.our-works__slider-preview')
}

const sliderPrevInit = () => {
    for(let i = 0; i<sliderOurWorks.slide.length; i++){
        console.log(sliderOurWorks.slide[i].innerHTML);
        sliderOurWorks.preview.innerHTML += '<div class="slide__preview">'+sliderOurWorks.slide[i].innerHTML+'</div>'
    }
}

sliderPrevInit();


// browser window size listener

let FSBottom = document.querySelector('.first-screen__bottom-coontent'),
    FSBottomCop = document.querySelector('.firts-screen__bottom-wrap')
let windW = document.querySelector('html').offsetWidth;
let windH = document.documentElement.clientHeight;



    window.addEventListener('resize' , e => {
        windW = document.querySelector('html').offsetWidth;
        windH = document.documentElement.clientHeight;

        editSlider(windH);

        sizeListener(windW);
    })

    const sizeListener=(n)=>{
        if (n < 1050) {
            transferFSBottom(true);
        } else { transferFSBottom(false) }
    }


const transferFSBottom = (a) => {
    FSBottomCop.innerHTML = FSBottom.innerHTML;
    if (a == true) {
        FSBottom.style.display = 'none';
        FSBottomCop.style.display = 'flex';
        return;
    } 
        FSBottom.style.display = 'flex';
        FSBottomCop.style.display = 'none';

}

const editSlider = (a) => {
    let sliderHeight =(document.querySelector('.our-works__content').getBoundingClientRect().top + window.pageYOffset) - (document.querySelector('#our-works').getBoundingClientRect().top + window.pageYOffset);
    document.querySelector('.our-works__content').style.minHeight = a - sliderHeight + 'px';
}

sizeListener(windW);
editSlider(windH);



// Form settings

document.querySelector('#form').addEventListener('submit', e => {
    e.preventDefault();
    alert('NO-NO');
})



