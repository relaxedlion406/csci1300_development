import React from 'react';
export default function Cart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    return (
        <aside className= "column right">
            <div className="wizard-card">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                { cartItems.map((item) => (
                    <div key={item.id} className = "row">   
                        <div className="col-2">
                            <button onClick={() => onRemove(item)} className="remove">
                                -
                            </button>{' '}
                            <div className="col-2">{item.name}</div>
                            <button onClick={() => onAdd(item)} className="add">
                                +
                            </button>
                        </div>
                        <div className="col-2 text-right">
                            {item.qty} x {item.price.toFixed(2)} Galleons
                            </div>
                    </div> 
                ))}
            </div>
            <h2>Total Price</h2>
            <div>
                <h2>{itemsPrice}</h2>
            </div>
            </div>

        </aside>
    )
}
