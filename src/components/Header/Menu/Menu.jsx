import Item from './Item/Item';
import './Menu.scss';

const Menu = () => {
    const categories = ["Apéritifs", "Plats", "Desserts", "Petit-Déjeuner", "Boissons", "Soupes", "Salades", "Sauces"];
    const thematics = ["Asie", "Italie", "Inde", "Afrique", "Mexique", "France", "Amérique", "Chine"];
    const seasons = ["Printemps", "Été", "Automne", "Hiver"];
    const diet = ["Végétarien", "Vegan", "FODMAP"];
    const intelorances = ["Gluten", "Produits laitiers", "Oeuf", "Arachide", "Fruits de mer", "Blé"];

    return (
        <ul className='list-inline d-flex mb-0 menu'>
            <Item name="Catégorie" elements={categories} params="/category"/>
            <Item name="Thémathique" elements={thematics} params="/thematic"/>
            <Item name="Saison" elements={seasons} params="/season"/>
            <Item name="Régime" elements={diet} params="/diet"/>
            <Item name="Intolérance" elements={intelorances} params="/intolerance"/>
        </ul>
    )
};

export default Menu;