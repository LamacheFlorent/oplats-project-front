import './Category.scss';

const Category = ({name}) => {
    return(
        <h1 className='gategory-name'>
            {name}
        </h1>
    )
};

export default Category;