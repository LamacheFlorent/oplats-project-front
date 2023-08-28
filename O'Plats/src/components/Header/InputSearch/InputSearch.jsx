import './InputSearch.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeSearchInput, fetchRecipesSearch } from '../../../actions/recipes';

const InputSearch = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center search">
            <form className="input-group mb-4" onSubmit={(event) => {event.preventDefault(); dispatch(fetchRecipesSearch()); navigate('/results');}}>
                <input type="text" className="form-control input-search" placeholder="Rechercher une recette, une boisson, ..." aria-describedby="button-addon2" 
                    onChange={(event) => dispatch(changeSearchInput(event.target.value))}
                />
                <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="bi bi-search"></i></button>
            </form>
        </div>
    )
};

export default InputSearch;