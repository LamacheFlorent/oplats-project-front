import Item from './Item/Item';
import './Menu.scss';

const Menu = () => {
    const categories = ["Apéritifs", "Entrées", "Plats", "Desserts", "Petit-Déjeuner", "Boissons", "Soupes", "Salades", "Sauces"];
    const thematics = ["Asie", "Italie", "Inde", "Afrique", "Mexique", "France", "Amérique", "Sud-ouest"];
    const seasons = ["Printemps", "Été", "Automne", "Hiver"];
    const diet = ["Végétarien", "Végétalien", "FODMAP"];
    const intelorances = ["Gluten", "Produits laitiers", "Oeuf", "Arachide", "Fruits de mer", "Blé"];

    return (
        <ul className='list-inline d-flex mb-0 menu'>
            <Item name="Catégorie" elements={categories}/>
            <Item name="Thémathique" elements={thematics}/>
            <Item name="Saison" elements={seasons}/>
            <Item name="Régime" elements={diet}/>
            <Item name="Intolérance" elements={intelorances}/>
        </ul>
    )
};

export default Menu;