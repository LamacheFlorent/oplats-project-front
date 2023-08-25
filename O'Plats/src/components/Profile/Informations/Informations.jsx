import './Informations.scss';
import { useSelector } from 'react-redux';

const Informations = () => {
    const email = useSelector((state) => state.user.email);
    const nickname = useSelector((state) => state.user.nickname);

    return (
        <div className='infos'>
            <div>
                <span className='label'>Pseudo : </span>
                <span className='info'>{nickname}John</span>
            </div>
            <div>
                <span className='label'>Email : </span>
                <span className='info'>{email}john@oclock.io</span>
            </div>
        </div>
    )
};

export default Informations;