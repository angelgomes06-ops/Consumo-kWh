const ctx = document.getElementById('consumoChart');

new Chart(ctx, {
    type: 'line',

    data: {
        labels: [
            'Novembro',
            'Dezembro',
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto'
        ],

        datasets: [{
            label: 'Consumo (kWh)',

            data: [
                95,
                106,
                106,
                90,
                109,
                104,
                91,
                90,
                89,
                92
            ],

            borderWidth: 3,
            tension: 0.3,
            fill: false
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                display: true
            }
        },

        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
