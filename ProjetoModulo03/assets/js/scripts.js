// navegação entre os depoimentos dos clientes
document.addEventListener('DOMContentLoaded', () => {
    const depoimentos = document.querySelectorAll('.depoimento');
    let currentIndex = 0;

    document.querySelector('.proximo').addEventListener('click', () => {
        depoimentos[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % depoimentos.length;
        depoimentos[currentIndex].classList.add('active');
    });

    document.querySelector('.anterior').addEventListener('click', () => {
        depoimentos[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + depoimentos.length) % depoimentos.length;
        depoimentos[currentIndex].classList.add('active');
    });


// Navegação suave para as seções
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const id = this.getAttribute('href').substring(1);
            const target = document.getElementById(id);

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    
// Envio do formulário de contato e feedback
    const form = document.querySelector('.contact-form');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        feedback.classList.add('show');
        form.reset();

        setTimeout(function() {
            feedback.classList.remove('show');
        }, 5000);
    });
});

// Validação de email
function validateEmail() {
    const email = document.getElementById('email').value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert('Por favor, insira um email válido.');
        return false;
    }
    return true;
}
