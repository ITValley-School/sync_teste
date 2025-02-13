// JavaScript Document

// Configuração do gráfico de habilidades
const skillsCtx = document.getElementById('skillsChart').getContext('2d');
new Chart(skillsCtx, {
    type: 'radar',
    data: {
        labels: ['Tecnologia', 'Liderança', 'Comunicação', 'Análise', 'Inovação', 'Colaboração'],
        datasets: [{
            label: 'Suas Habilidades',
            data: [85, 70, 75, 80, 65, 90],
            backgroundColor: 'rgba(147, 51, 234, 0.2)',
            borderColor: '#9333EA',
            borderWidth: 2,
            pointBackgroundColor: '#9333EA'
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: '#9CA3AF'
                },
                grid: {
                    color: 'rgba(156, 163, 175, 0.1)'
                },
                angleLines: {
                    color: 'rgba(156, 163, 175, 0.1)'
                },
                pointLabels: {
                    color: '#9CA3AF'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Configuração do gráfico de análises
const analysisCtx = document.getElementById('analysisChart').getContext('2d');
new Chart(analysisCtx, {
    type: 'line',
    data: {
        labels: ['Set', 'Out', 'Nov', 'Dez', 'Jan', 'Fev'],
        datasets: [{
            label: 'Análises Realizadas',
            data: [4, 6, 8, 12, 16, 24],
            borderColor: '#9333EA',
            backgroundColor: 'rgba(147, 51, 234, 0.1)',
            tension: 0.4,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(156, 163, 175, 0.1)'
                },
                ticks: {
                    color: '#9CA3AF'
                }
            },
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: '#9CA3AF'
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});