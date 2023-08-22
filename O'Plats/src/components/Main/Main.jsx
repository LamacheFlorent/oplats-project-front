import './Main.scss';
import Section from './Section/Section';
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Main = () => {
    const recipes = useSelector((state) => state.recipes.list);

    return (
        <div className='main'>
            <Section name="Cocktails d'été"/>
            <Section name="Les recettes les mieux notées"/>
            <Section name="Recettes d'été"/>
        </div>
    )
};

export default Main;