import './Informations.scss';
import { useSelector } from 'react-redux';

const Informations = () => {
    // const email = useSelector((state) => state.user.email);
    // const nickname = useSelector((state) => state.user.nickname);

    // rechercher les données de l'utilisateur dans le localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user.email;
    const nickname = user.nickname;

    return (
        <div className='infos'>
            <div>
                <span className='label'>Pseudo : </span>
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