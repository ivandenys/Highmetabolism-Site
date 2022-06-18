import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import img from '../../images/logo-white.png'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    /*Add stuff*/
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
        linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(.0,0,0,0.6) 100%),
        
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const ImageBg = styled.img`
    width: 60%;
    height: 60%;
    -o-object-fit: cover;
    object-fit: cover;
    background: transparent;
    /* below is for black outline of letters */
    /* -webkit-filter: drop-shadow(2px 1px 0 black)
                  drop-shadow(-1px -1px 0 black);
    filter: drop-shadow(2px 1px 0 black) 
          drop-shadow(-1px -1px 0 black); */
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px; 
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /*added logo below */
    /* background-image: url(${img});
    object-fit: contain;
    max-height: 100%;
    height: auto;
    max-width: 100px;
    width: 200px;
    height: 200px; 
    background-repeat: no-repeat;  */
`;



export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 96px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

