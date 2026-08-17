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


const comparacao = document.getElementById('comparacaoChart');

new Chart(comparacao, {
    type: 'bar',

    data: {
        labels: ['Antes da scooter', 'Depois da scooter'],

        datasets: [{
            label: 'Consumo médio (kWh)',

            data: [101.2, 93.2],

            borderWidth: 1
        }]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                display: false
            }
        },

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
