import './Main.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipesSection1, fetchRecipesSection2, fetchRecipesSection3 } from '../../actions/recipes';

import Category from './Section/Category/Category';
import Articles from './Section/Articles/Articles';
import WatchMore from './Section/WatchMore/WatchMore';

const Main = () => {

    const section1 = useSelector((state) => state.recipes.section1);
    const section2 = useSelector((state) => state.recipes.section2);
    const section3 = useSelector((state) => state.recipes.section3);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecipesSection1());
        dispatch(fetchRecipesSection2());
        dispatch(fetchRecipesSection3());
    }, []);


    return (
        <div className='main'>
            <div className='section'>
                <Category name={"Summer cocktails"} icone={<i className="bi bi-cup-straw"></i>}/>
                <Articles articles={section1}/>
                <WatchMore search={'cocktails'}/>
            </div>
            <div className='section'>
                <Category name={"Fresh salads"} icone={<i className="bi bi-star-fill"></i>}/>
                <Articles articles={section2}/>
                <WatchMore />
            </div>
            <div className='section'>
                <Category name={"Summer recipes"} icone={<i className="bi bi-brightness-high-fill"></i>}/>
                <Articles articles={section3}/>
                <WatchMore search={'summer'}/>
            </div>
        </div>
    )
};

export default Main;