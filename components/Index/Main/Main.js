import Style from './Main.module.scss';
import {PlayCircle as PlayCircleIcon} from '@mui/icons-material';
import {Button, IconButton} from '@mui/material';
function Main() {
    return (
        <div className={Style.Main}>
            <div className={Style.heading}>
                <h1>Master skills that you can use</h1>
                <h2>Learn techincal skills that are relevant to current industries.</h2>
            </div>
            <div className={Style.IconContainer}>
                <IconButton style={{fontSize: 'inherit'}}>
                    <PlayCircleIcon fontSize='inherit' htmlColor='#fff' />
                </IconButton>
            </div>
            <div className={Style.FormSection}>
                <input type="text" id='name' placeholder='Your name' />
                <input type="email" id='email' placeholder='Your email' />
                <Button
                    color='success'
                    variant="contained"
                    disableElevation={true}>Submit</Button>
            </div>
        </div>
    )
}

export default Main;