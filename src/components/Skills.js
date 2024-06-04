import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const Skills = () => {
  const data1 = {
    datasets: [
      {
        label: 'Web Developemnt',
        data: [90,10],
        backgroundColor: [
          '#9900FF',
          '#000000',
          
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#000000',
        ],
      },
    ],
  };
  const data2 = {
    datasets: [
      {
        label: 'MERN Stack',
        data: [95,5],
        backgroundColor: [
          '#9900FF',
          '#000000',
          
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#000000',
        ],
      },
    ],
  };
  const data3 = {
    datasets: [
      {
        label: 'Server Scripting',
        data: [70,30],
        backgroundColor: [
          '#9900FF',
          '#000000',
          
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#000000',
        ],
      },
    ],
  };
  const data4 = {
    datasets: [
      {
        label: 'Competitive Programming',
        data: [80,20],
        backgroundColor: [
          '#9900FF',
          '#000000',
          
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#000000',
        ],
      },
    ],
  };
  const data5 = {
    datasets: [
      {
        label: 'Documentation',
        data: [70,30],
        backgroundColor: [
          '#9900FF',
          '#000000',
          
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#000000',
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        color: 'white',
        display: true,
        formatter: (value) => `${value}%`,
        font: {
          weight: 'bold',
          size: 14,
        },
      },
    },
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <div>
							  <Doughnut data={data1} options={options} />
                              </div>
							  <h6 className='chartlabel'>Web Development</h6>
                            </div>
                            <div className="item">
							<div>
							  <Doughnut data={data2} options={options} />
                              </div>
							  <h6 className='chartlabel'>MERN Stack</h6>
                            </div>
                            <div className="item">
							<div>
							  <Doughnut data={data3} options={options} />
                              </div>
							  <h6 className='chartlabel'>Server Scripting</h6>
                            </div>
                            <div className="item">
                                <div>
							  <Doughnut data={data4} options={options} />
                              </div>
							  <h6 className='chartlabel'>Competitive Coding</h6>
                            </div>
							<div className="item">
                                <div>
							  <Doughnut data={data4} options={options} />
                              </div>
							  <h6 className='chartlabel'>Documentation</h6>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
