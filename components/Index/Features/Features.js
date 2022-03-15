import Style from './Features.module.scss';
import Image from 'next/image';
// import {ReactComponent as StudyIcon} from 'public/svg/study.svg';
function Features() {
    return (
        <div className={Style.Features}>
            <p className={Style.heading}>Get the skill you&apos;ve always wanted</p>
            <p className={Style.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

            <section className={Style.graphics}>
                <div className={Style.item}>
                    <Image
                        src="/svg/study.svg"
                        alt="study"
                        width={100}
                        height={100}/>
                    <p className={Style.heading}>Learn by doing</p>
                    <p className={Style.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>

                <div className={Style.item}>
                    <Image
                        src="/svg/measure.svg"
                        alt="study"
                        width={100}
                        height={100}/>
                    <p className={Style.heading}>Track your progress</p>
                    <p className={Style.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>

                <div className={Style.item}>
                    <Image
                        src="/svg/pace.svg"
                        alt="pace"
                        width={100}
                        height={100}/>
                    <p className={Style.heading}>Learn at your own pace</p>
                    <p className={Style.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Features;