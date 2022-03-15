import Head from 'next/head'
import Image from 'next/image'
import Style from 'styles/Index.module.scss';
// components
import Main from 'components/Index/Main/Main';
import Spotlight from 'components/Index/Spotlight/Spotlight';

function Index() {
    return (
        <div className={Style.Main}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <div className={Style.logo}>NWTF</div>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Courses</a>
                    </li>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                </ul>
            </header>
            <Main />
            <Spotlight />
        </div>
    )
}

export default Index;