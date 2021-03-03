var ctx = document.getElementById('yearchart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['2018', '2019', '2020'],
        datasets: [{
            label: 'Medical',
            borderColor: '#1b1c1c',
            backgroundColor: "#ffa600",
            data: [36, 25, 38],
        },{
            label: 'Lost',
            borderColor: '#1b1c1c',
            backgroundColor: "#ff6361",
            data: [25, 17, 21],
        },{
            label: 'Stranded',
            borderColor: '#1b1c1c',
            backgroundColor: "#bc5090",
            data: [16, 11, 13],
        },{
            label: 'Missing',
            borderColor: '#1b1c1c',
            backgroundColor: '#58508d',
            data: [9, 5, 11],
        },{
            label: 'Unknown',
            borderColor: '#1b1c1c',
            backgroundColor: '#3557d4',
            data: [3, 1, 3],
        }]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Breakdown of Call-out Reasons (2018-2020)',
            fontFamily: "'Open Sans Bold', sans-serif",
            fontSize: 18,
            fontStyle: 'normal',
            fontColor: 'rgba(158, 162, 163)',
        },
        legend: {
            position: 'bottom',
            labels: {
                fontColor: 'rgba(158, 162, 163)'
            }
        },
        tooltips: {
            enabled: true,
            titleFontSize: 12,
            titleFontStyle: 'bold',
            titleFontColor: 'rgba(158, 162, 163)',
            bodyFontColor: 'rgba(158, 162, 163)'
        },
        hover :{
            animationDuration:0
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize:12,
                    fontColor: 'rgba(158, 162, 163)'
                },
                scaleLabel:{
                    display:false
                },
                gridLines: {
                    display: false,
                }, 
                stacked: true
            }],
            yAxes: [{
                gridLines: {
                    display:false,
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize:12,
                    fontColor: 'rgba(158, 162, 163)'
                },
                stacked: true
            }]
        },
    },
});