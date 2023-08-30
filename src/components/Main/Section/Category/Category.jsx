import './Category.scss';

const Category = ({name}) => {
    return(
        <h2 className='gategory-name'>
            {name}
        </h2>
    )
};

export default Category;