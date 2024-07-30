document.addEventListener('DOMContentLoaded', () => {
    // Navegação entre os depoimentos dos clientes
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
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Envio do formulário de contato e feedback assíncrono
    const form = document.querySelector('.contact-form');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(responseData => {
            console.log('Success:', responseData);
            feedback.classList.add('show');
            form.reset();
            setTimeout(() => {
                feedback.classList.remove('show');
            }, 5000);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

//JS para o CRUD
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crud-form');
    const dataList = document.getElementById('data-list');

    const nameField = form.querySelector('#data-name');
    const valueField = form.querySelector('#data-value');

    function displayData() {
        const data = JSON.parse(localStorage.getItem('suggestions')) || [];
        dataList.innerHTML = data.map((item, index) =>
            `<li data-id="${index}">
                ${item.name}: ${item.value}
                <button class="edit-btn">&#9998;</button>
                <button class="delete-btn">&#128465;</button>
            </li>`
        ).join('');
    }

    function addData(name, value) {
        if (!name.trim() || !value.trim()) {
            alert('Nome e sugestão são obrigatórios.');
            return;
        }

        const data = JSON.parse(localStorage.getItem('suggestions')) || [];
        data.push({ name, value });
        localStorage.setItem('suggestions', JSON.stringify(data));
        displayData();
    }

    function updateData(id, name, value) {
        if (!name.trim() || !value.trim()) {
            alert('Nome e sugestão são obrigatórios.');
            return;
        }

        const data = JSON.parse(localStorage.getItem('suggestions')) || [];
        if (data[id]) {
            data[id] = { name, value };
            localStorage.setItem('suggestions', JSON.stringify(data));
            displayData();
        }
    }

    function deleteData(id) {
        const data = JSON.parse(localStorage.getItem('suggestions')) || [];
        if (data[id]) {
            data.splice(id, 1);
            localStorage.setItem('suggestions', JSON.stringify(data));
            displayData();
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = nameField.value;
        const value = valueField.value;
        addData(name, value);
        form.reset();
    });

    document.getElementById('add-btn').addEventListener('click', () => {
        const name = nameField.value;
        const value = valueField.value;
        addData(name, value);
        form.reset();
    });

    dataList.addEventListener('click', (e) => {
        const target = e.target;
        const id = target.closest('li')?.dataset.id;

        if (!id) return;

        if (target.classList.contains('edit-btn')) {
            const data = JSON.parse(localStorage.getItem('suggestions')) || [];
            if (data[id]) {
                nameField.value = data[id].name;
                valueField.value = data[id].value;
                form.dataset.editId = id;
            }
        } else if (target.classList.contains('delete-btn')) {
            deleteData(id);
        }
    });

    displayData();
});






