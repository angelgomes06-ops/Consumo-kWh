/* ========================================
   CONFIGURAÇÕES DOS GRÁFICOS
======================================== */

const azul = '#2563EB';
const verde = '#16A34A';



/* ========================================
   GRÁFICO DE CONSUMO MENSAL
======================================== */

const ctx =
    document.getElementById('consumoChart');


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


    options: {

        responsive: true,

        maintainAspectRatio: false,


        plugins: {

            legend: {

                labels: {

                    font: {

                        size: 13

                    }

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

                    color:
                        '#E2E8F0'

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
   GRÁFICO ANTES X DEPOIS
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

            label:
                'Consumo médio (kWh)',


            data: [

                101.2,
                93.2

            ],


            backgroundColor: [

                '#94A3B8',
                verde

            ],


            borderRadius: 8,


            borderWidth: 0

        }]

    },


    options: {

        responsive: true,

        maintainAspectRatio: false,


        plugins: {

            legend: {

                display: false

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

                    color:
                        '#E2E8F0'

                },

                title: {

                    display: true,

                    text: 'kWh'

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
   GRÁFICO DO VALOR DA CONTA
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

            label:
                'Valor médio da conta',


            data: [

                106.20,
                94.83

            ],


            backgroundColor: [

                '#94A3B8',
                azul

            ],


            borderRadius: 8,


            borderWidth: 0

        }]

    },


    options: {

        responsive: true,

        maintainAspectRatio: false,


        plugins: {

            legend: {

                display: false

            },


            tooltip: {

                callbacks: {

                    label: function(context) {

                        return ` R$ ${context.raw.toFixed(2).replace('.', ',')}`;

                    }

                }

            }

        },


        scales: {

            y: {

                beginAtZero: true,

                grid: {

                    color:
                        '#E2E8F0'

                },

                title: {

                    display: true,

                    text: 'Valor (R$)'

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
