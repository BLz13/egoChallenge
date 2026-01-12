import './loading.scss';
import LoadingIcon from '../../assets/svg/loading.svg?react'

export default function LoadingScreen() {
    return (
        <div className='loading-cnt'>
            <span className='loading-inner-cnt'>
                <LoadingIcon className='loading-icon'/>
                <p className='loading-text'>Cargando...</p>
            </span>
        </div>
    )
}
