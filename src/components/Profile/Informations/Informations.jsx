import './Informations.scss';
import { useSelector } from 'react-redux';

const Informations = () => {

    // rechercher les données de l'utilisateur dans le localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user.email;
    const nickname = user.nickname;

    return (
        <div className='infos'>
            <div>
                <span className='label'>Username : </span>
                <span className='info'>{nickname}</span>
            </div>
            <div>
                <span className='label'>Email : </span>
                <span className='info'>{email}</span>
            </div>
        </div>
    )
};

export default Informations;