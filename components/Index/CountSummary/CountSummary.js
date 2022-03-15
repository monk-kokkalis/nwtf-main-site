import Style from './CountSummary.module.scss';
import {
    Add as AddIcon
} from '@mui/icons-material';
function CountSummary() {
    return (
        <div className={Style.Main}>
            <div className={Style.data}>
                <span><AddIcon /></span>
                <span>5, 000</span>
                <span>Students enrolled in our courses</span>
            </div>
            <div className={Style.data}>
                <span><AddIcon /></span>
                <span>200</span>
                <span>Hours of video lessons</span>
            </div>
            <div className={Style.data}>
                <span><AddIcon /></span>
                <span>50</span>
                <span>Courses on various topics</span>
            </div>
        </div>
    )
}

export default CountSummary;