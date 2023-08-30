import './Main.scss';
import Section from './Section/Section';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Main = () => {

    const section1 = useSelector((state) => state.recipes.section1);
    const section2 = useSelector((state) => state.recipes.section2);
    const section3 = useSelector((state) => state.recipes.section3);

    // obligation de passer par une variable intermédiaire pour éviter les problèmes d'immuabilité
    const section1bis = [...section1.slice()];
    const section2bis = [...section2.slice()];
    const section3bis = [...section3.slice()];

    return (
        <div className='main'>
            <Section name="Cocktails d'été" articles={section1bis.slice(0, 3)}/>
            <Section name="Les recettes les mieux notées" articles={section2bis.slice(0, 3)}/>
            <Section name="Recettes d'été" articles={section3bis.slice(0, 3)}/>
        </div>
    )
};

export default Main;