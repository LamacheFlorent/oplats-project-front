import './Category.scss';

const Category = ({name, icone}) => {
    return(
        <h2 className='gategory-name'>
            {name}
            {icone}
        </h2>
    )
};

export default Category;