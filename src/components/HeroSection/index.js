import React, { useState } from 'react';
import HeroBgAnimation from '../HeroBgAnimation';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle';
import HeroImg from '../../images/HeroImage1.png';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1.05 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top; 
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 15; 
        const rotateY = ((x - centerX) / centerX) * -15; 

        setTransform({
            rotateX,
            rotateY,
            scale: 1.1, 
        });
    };

    const handleMouseLeave = () => {
        
        setTransform({
            rotateX: 0,
            rotateY: 0,
            scale: 1.05, 
        });
    };

    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                        <Img
                            src={HeroImg}
                            alt="hero-image"
                            style={{
                                transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
                            }}
                        />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    );
};

export default HeroSection;
