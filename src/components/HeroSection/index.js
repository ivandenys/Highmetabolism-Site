import React, {useState} from 'react'
import Video from '../../videos/hm-background.mp4'
import Image from '../../images/hm-logo3.png'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, ImageBg } from './HeroElements'
import {Button} from '../ButtonElement';
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    {/* HIGH METABOLISM */}
                    <ImageBg src={Image} type='image/png'>
                    </ImageBg>
                </HeroH1>
                {/* <HeroP>
                    Fitness
                </HeroP> */}
                <HeroBtnWrapper>
                    <Button to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Enter {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection 