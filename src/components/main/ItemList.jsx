import PropTypes from 'prop-types';
import Item from './Item';




function ItemList({products}) {
    return (

<div className="container">
    <div className="container">
        <div className="d-flex flex-wrap justify-content-center row">
            {products.map(product => <Item key={product.id} {...product} />)}
        </div>
    </div>
</div>

        
    )
}
ItemList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ItemList