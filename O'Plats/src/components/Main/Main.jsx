import './Main.scss';
import Section from './Section/Section';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Main = () => {

    const section1 = useSelector((state) => state.recipes.section1);
    const section2 = useSelector((state) => state.recipes.section2);
    const section3 = useSelector((state) => state.recipes.section3);

    return (
        <div className='main'>
            <Section name="Cocktails d'été" articles={section1}/>
            <Section name="Les recettes les mieux notées" articles={section2}/>
            <Section name="Recettes d'été" articles={section3}/>
        </div>
    )
};

export default Main;