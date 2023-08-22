import './InputSearch.scss';

const InputSearch = () => {
    return (
        <div className="d-flex justify-content-center search">
            <div className="input-group mb-4">
                <input type="text" className="form-control input-search" placeholder="Rechercher une recette, une boisson, ..." aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
            </div>
        </div>
    )
};

export default InputSearch;