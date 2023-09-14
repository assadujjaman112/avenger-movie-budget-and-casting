/* eslint-disable react/prop-types */

import "./Cart.css"
const Cart = ({selectedActors, totalCost, remaining}) => {
    return (
        <div>
            <h1>Selected Artist list</h1>
            <h3>Total cost : {totalCost}</h3>
            <h3>Remaining : {remaining}</h3>
            {
                selectedActors.map((actor )=> (
                    <li key={actor.id}>{actor.name}</li>
                )
                )
            }
        </div>
    );
};


export default Cart;