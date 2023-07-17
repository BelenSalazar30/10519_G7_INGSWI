document.addEventListener('DOMContentLoaded', function() {
    const inicioLink = document.getElementById('inicio-link');
    const inscribirseLink = document.getElementById('inscribirse-link');
    const tutoresLink = document.getElementById('tutores-link');
    const calendariosLink = document.getElementById('calendarios-link');

    inicioLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        if (confirm('¿Estás seguro de que deseas ir a la página de inicio?')) {
            window.location.href = 'index.html';
        } else {
            alert('Cancelaste la acción de ir a la página de inicio.');
        }
    });

    inscribirseLink.addEventListener('click', function(event) {
        event.preventDefault();

        const confirmation = confirm('¿Estás seguro de que deseas ir a la página de inscripción?');
        if (confirmation) {
            window.location.href = 'https://forms.gle/Zmwp3KwZAStH6ny37';
        } else {
            alert('Cancelaste la acción de ir a la página de inscripción.');
        }
    });

    tutoresLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        const confirmation = confirm('¿Estás seguro de que deseas ir a la página de inscripción?');
        if (confirmation) {
            window.location.href = 'https://www.google.com';
        } else {
            alert('Cancelaste la acción de ir a la página de inscripción.');
        }
    });

    calendariosLink.addEventListener('click', function(event) {
        event.preventDefault(); 

        const confirmation = confirm('¿Estás seguro de que deseas ir a la página de inscripción?');
        if (confirmation) {
            window.location.href = 'https://www.google.com';
        } else {
            alert('Cancelaste la acción de ir a la página de inscripción.');
        }
    });
});