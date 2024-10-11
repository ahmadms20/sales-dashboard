import Card from "./Card";
import Chart from 'react-apexcharts';

const SalesMappingBySector = () => {

    const options = {
        labels: ['Amil', 'Ekonomi', 'Pendidikan', 'Amil', 'Ekonomi', 'Pendidikan'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 300,
                },
                legend: {
                    show: false,
                }
            }
        }],
        fill: {
            colors: ['#1F3863', '#BCD6ED', '#00AFEF', '#000000', '#979797', '#4471C4'],
        },
        dataLabels: {
            enabled: false,
        },
    };
    const series = [4, 9, 14, 16, 5, 52];

    return (
        <Card title="Sales Mapping by Sector">
            <Chart
                options={options}
                series={series}
                type="pie"
                width="270"
            />
        </Card>
    )
};

export default SalesMappingBySector;