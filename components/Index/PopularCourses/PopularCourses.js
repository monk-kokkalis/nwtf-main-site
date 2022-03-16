import Style from './PopularCourses.module.scss';
import {
    Circle as CircleIcon,
    CircleOutlined as CircleOutlinedIcon
} from '@mui/icons-material';
function PopularCourses() {
    return (
        <div className={Style.Main}>
            <p className={Style.heading}>Popular Courses</p>
            <p className={Style.subtitle}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>

            <div className={Style.coursesContainer}>

                <div className={Style.course}>
                    <p className={Style.heading}>JavaScript Programming</p>
                    <div className={Style.difficulty}>
                        <div className={Style.icons}>
                            <CircleIcon />
                            <CircleOutlinedIcon />
                            <CircleOutlinedIcon />
                        </div>
                        <div className={Style.rating}>Beginner</div>
                    </div>
                    <div className={Style.description}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    </div>
                    <button>View Course</button>
                </div>

                <div className={Style.course}>
                    <p className={Style.heading}>Android Development</p>
                    <div className={Style.difficulty}>
                        <div className={Style.icons}>
                            <CircleIcon />
                            <CircleIcon />
                            <CircleOutlinedIcon />
                        </div>
                        <div className={Style.rating}>Intermediate</div>
                    </div>
                    <div className={Style.description}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    </div>
                    <button>View Course</button>
                </div>

                <div className={Style.course}>
                    <p className={Style.heading}>ReactJS Development</p>
                    <div className={Style.difficulty}>
                        <div className={Style.icons}>
                            <CircleIcon />
                            <CircleIcon />
                            <CircleIcon />
                        </div>
                        <div className={Style.rating}>Advanced</div>
                    </div>
                    <div className={Style.description}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    </div>
                    <button>View Course</button>
                </div>

                <div className={Style.course}>
                    <p className={Style.heading}>NodeJS Development</p>
                    <div className={Style.difficulty}>
                        <div className={Style.icons}>
                            <CircleIcon />
                            <CircleIcon />
                            <CircleIcon />
                        </div>
                        <div className={Style.rating}>Advanced</div>
                    </div>
                    <div className={Style.description}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    </div>
                    <button>View Course</button>
                </div>

                <div className={Style.course}>
                    <p className={Style.heading}>HTML5 Game Development</p>
                    <div className={Style.difficulty}>
                        <div className={Style.icons}>
                            <CircleIcon />
                            <CircleIcon />
                            <CircleIcon />
                        </div>
                        <div className={Style.rating}>Advanced</div>
                    </div>
                    <div className={Style.description}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    </div>
                    <button>View Course</button>
                </div>

                <div className={Style.course}>
                    <p className={Style.heading}>Web Design</p>
                    <div className={Style.difficulty}>
                        <div className={Style.icons}>
                            <CircleIcon />
                            <CircleOutlinedIcon />
                            <CircleOutlinedIcon />
                        </div>
                        <div className={Style.rating}>Beginner</div>
                    </div>
                    <div className={Style.description}>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    </div>
                    <button>View Course</button>
                </div>

            </div>

            <p className={Style.endHeading}>Do you have a particular course in mind?</p>
            <p className={Style.subEndHeading}>Discover more in our course catalog.</p>

            <button className={Style.discover}>Discover more courses</button>
        </div>
    )
}

export default PopularCourses;