import './Main.scss';
import Section from './Section/Section';

const Main = () => {

    return (
        <div className='main'>
            <Section name="Cocktails d'été"/>
            <Section name="Les recettes les mieux notées"/>
            <Section name="Recettes d'été"/>
        </div>
    )
};

export default Main;