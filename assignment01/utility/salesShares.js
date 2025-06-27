export default function drawSalesSharesChart() {
    const options = {
        chart: {
            type: "donut",
            height: 200,
            width: 200,
        },
        series: [44, 26, 30],
        labels: ["Team A", "Team B", "Team C"],
        plotOptions: {
            pie: {
                donut: {
                    size: "75%",
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            showAlways: true,
                            fontSize: "24px",
                            fontFamily: "Arial, sans-serif",
                            color: "#000",
                            formatter: function () {
                                return "100";
                            },
                        },
                    },
                },
            },
        },
        stroke: {
            width: 2,
            colors: ["#fff"],
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["blue", "green", "orange"],
        legend: true,
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 250,
                    },
                    legend: true,
                },
            },
        ],
    };
    const chart = new ApexCharts(document.querySelector("#sales_shares_chart"), options);
    chart.render();
}