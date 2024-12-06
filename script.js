document.getElementById('licenciaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const tipoLicencia = document.getElementById('tipoLicencia').value;

    // Simulación de una llamada a la base de datos
    const licencias = {
        'LIC-01': { descripcion: 'Licencia Tipo A', duracion: 1, tiempo: 5 },
        'LIC-02': { descripcion: 'Licencia Tipo B', duracion: 2, tiempo: 10 },
        'LIC-03': { descripcion: 'Licencia Tipo C', duracion: 3, tiempo: 15 },
        'LIC-04': { descripcion: 'Licencia Tipo D', duracion: 4, tiempo: 20 },
        'LIC-05': { descripcion: 'Licencia Tipo E', duracion: 5, tiempo: 25 },
        'LIC-06': { descripcion: 'Licencia Tipo F', duracion: 6, tiempo: 30 },
        'LIC-07': { descripcion: 'Licencia Tipo G', duracion: 7, tiempo: 35 },
        'LIC-08': { descripcion: 'Licencia Tipo H', duracion: 8, tiempo: 40 },
        'LIC-09': { descripcion: 'Licencia Tipo I', duracion: 9, tiempo: 45 },
        'LIC-10': { descripcion: 'Licencia Tipo J', duracion: 10, tiempo: 50 },
    };

    const info = licencias[tipoLicencia];
    document.getElementById('resultado').innerHTML = `
        <h3>Información de la Licencia</h3>
        <p><strong>Descripción:</strong> ${info.descripcion}</p>
        <p><strong>Duración:</strong> ${info.duracion} años</p>
        <p><strong>Tiempo de Procesamiento:</strong> ${info.tiempo} días</p>
    `;

    // Generar gráfico de barras
    const ctx = document.getElementById('graficoLicencias').getContext('2d');
    const graficoLicencias = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Licencia Tipo A', 'Licencia Tipo B', 'Licencia Tipo C', 'Licencia Tipo D', 'Licencia Tipo E', 'Licencia Tipo F', 'Licencia Tipo G', 'Licencia Tipo H', 'Licencia Tipo I', 'Licencia Tipo J'],
            datasets: [{
                label: 'Duración de Licencias (años)',
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});