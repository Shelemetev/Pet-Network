import img from '../../img/Loader.gif'
import s from './Loader.module.css'

const Loader = () => {
    return (
        <img src={img} className={s.loader__img} alt="" />
    )
}

export default Loader