/* Navegação por tab, clica na imagem mostra o conteúdo relacionado */
const initTabNav = () => {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo'); // deixa a primeira seção sempre ativada

        const activeTab = (index) => {
            tabContent.forEach(section => {
                section.classList.remove('ativo');
            })
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((img, indexador) => {
            img.addEventListener('click', () => {
                activeTab(indexador); // chama a função e passa um parametro que vai servir para o tabContent[index]
            })
        })
    }
}
initTabNav();

/* Adiciona um accordion ao FAQ */
const initAccordion = () => {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo'
    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach(item => {
            item.addEventListener('click', activeAccordion);
        })
    }
}
initAccordion();

/* Adiciona click aos links internos e faz uma rolagem suave até a seção  */
const initScrollSmooth = () => {
    const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]');
    if (linksInterno.length) {

        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute('href');
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })

            /* const topo = section.offsetTop;
            window.scrollTo({
                top: topo,
                behavior: 'smooth'
            }) */
        }

        linksInterno.forEach(link => {
            link.addEventListener('click', scrollToSection)
        });
    }
}
initScrollSmooth();

/* Anima as sections ao fazer scroll */
const initAnimationScroll = () => {
    const sections = document.querySelectorAll('.js-scroll');
    const windowCalcule = window.innerHeight * 0.7;

    if (sections.length) {
        sections[0].classList.add('ativo');
        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowCalcule) < 0;
                // console.log (sectionTop);
                if (isSectionVisible)
                    section.classList.add('ativo');
                else
                    section.classList.remove('ativo');
            })
        }
    }

    window.addEventListener('scroll', animaScroll);
}
initAnimationScroll();