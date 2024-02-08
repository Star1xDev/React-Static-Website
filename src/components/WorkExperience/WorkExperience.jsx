import React, { useRef } from 'react';
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';

const WorkExperience = () => {

    const sliderRef = useRef()

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
      };

      const slideLeft = () => {
        sliderRef.current.slickNext();
      }

      const slideRight = () => {
        sliderRef.current.slickPrev();
      }

    return (
        <section className="experience-container">
            <h5>Work Experience</h5>
            <div className="experience-content">
                <div className="arrow-right"
                onClick={slideLeft}>
                    <span>&gt;</span>
                </div>
                <div className="arrow-left"
                onClick={slideRight}>
                    <span>&lt;</span>
                </div>
                <Slider ref={sliderRef} {...settings}>
                {WORK_EXPERIENCE.map((item) => (
                    <ExperienceCard 
                        key={item.title}
                        details={item}>
                    </ExperienceCard>
                ))}
                </Slider>
            </div>
        </section>
    );
}

export default WorkExperience;
