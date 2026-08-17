/* ========================================
   CONFIGURAÇÕES
======================================== */

const azul = '#2563EB';
const verde = '#16A34A';
const cinza = '#94A3B8';


/* ========================================
   GRÁFICO DE CONSUMO MENSAL
======================================== */

const ctx = document.getElementById('consumoChart');

new Chart(ctx, {

    type: 'line',

    data: {

        labels: [
            'Nov',
            'Dez',
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago'
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

            borderColor: azul,

            backgroundColor:
                'rgba(37, 99, 235, 0.10)',

            borderWidth: 3,

            tension: 0.35,

            fill: true,

            pointRadius: 5,

            pointHoverRadius: 8

        }]

    },

    plugins: [ChartDataLabels],

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: true
            },

            datalabels: {

                display: true,

                align: 'top',

                offset: 6,

                color: '#334155',

                font: {
                    weight: 'bold',
                    size: 11
                },

                formatter: function(value) {
                    return value + ' kWh';
                }

            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        return ` ${context.raw} kWh`;

                    }

                }

            }

        },

        scales: {

            y: {

                beginAtZero: false,

                grid: {
                    color: '#E2E8F0'
                }

            },

            x: {

                grid: {
                    display: false
                }

            }

        }

    }

});


/* ========================================
   CONSUMO MÉDIO — ANTES X DEPOIS
======================================== */

const comparacao =
    document.getElementById('comparacaoChart');

new Chart(comparacao, {

    type: 'bar',

    data: {

        labels: [
            'Antes da scooter',
            'Depois da scooter'
        ],

        datasets: [{

            label: 'Consumo médio',

            data: [
                101.2,
                93.2
            ],

            backgroundColor: [
                cinza,
                verde
            ],

            borderRadius: 10,

            borderWidth: 0

        }]

    },

    plugins: [ChartDataLabels],

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            },

            datalabels: {

                color: '#1E293B',

                anchor: 'end',

                align: 'top',

                font: {
                    weight: 'bold',
                    size: 14
                },

                formatter: function(value) {
                    return value.toFixed(1) + ' kWh';
                }

            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        return ` ${context.raw} kWh`;

                    }

                }

            }

        },

        scales: {

            y: {

                beginAtZero: true,

                grid: {
                    color: '#E2E8F0'
                },

                title: {

                    display: true,

                    text: 'Consumo (kWh)'

                }

            },

            x: {

                grid: {
                    display: false
                }

            }

        }

    }

});


/* ========================================
   VALOR MÉDIO DA CONTA
======================================== */

const conta =
    document.getElementById('contaChart');

new Chart(conta, {

    type: 'bar',

    data: {

        labels: [
            'Antes da scooter',
            'Depois da scooter'
        ],

        datasets: [{

            label: 'Valor médio da conta',

            data: [
                106.20,
                94.83
            ],

            backgroundColor: [
                cinza,
                azul
            ],

            borderRadius: 10,

            borderWidth: 0

        }]

    },

    plugins: [ChartDataLabels],

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            },

            datalabels: {

                color: '#1E293B',

                anchor: 'end',

                align: 'top',

                font: {
                    weight: 'bold',
                    size: 14
                },

                formatter: function(value) {

                    return 'R$ ' +
                        value
                        .toFixed(2)
                        .replace('.', ',');

                }

            },

            tooltip: {

                callbacks: {

                    label: function(context) {

                        return ' R$ ' +
                            context.raw
                            .toFixed(2)
                            .replace('.', ',');

                    }

                }

            }

        },

        scales: {

            y: {

                beginAtZero: true,

                grid: {
                    color: '#E2E8F0'
                },

                title: {

                    display: true,

                    text: 'Valor da conta'

                }

            },

            x: {

                grid: {
                    display: false
                }

            }

        }

    }

});
