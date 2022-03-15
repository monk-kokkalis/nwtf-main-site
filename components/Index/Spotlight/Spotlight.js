import Style from './Spotlight.module.scss';
import Image from 'next/image'
import {Button} from '@mui/material';

function Spotlight() {
    return (
        <div className={Style.Main}>
            <p className={Style.heading}>Quality learning. Quality results.</p>
            <p className={Style.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className={Style.imageSection}>
                <div className={Style.imageContainer}>
                    <Image
                        src="/images/model.jpg"
                        alt="studying"
                        layout='responsive'
                        width={70}
                        height={60}/>
                </div>
                <div className={Style.information}>
                    <h2>Why NWTF?</h2>
                    <p>We&apos;re revolutionizing the way people learn.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button
                        variant='outlined'
                        sx={{
                            borderColor: '#fff',
                            color: '#fff'
                        }}>
                        View our courses</Button>
                </div>
            </div>
        </div>
    )
}

export default Spotlight;