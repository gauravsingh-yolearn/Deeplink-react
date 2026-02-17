import { useContext } from "react";
import { CartContext } from "./context/CartContext";

export default function Cart() {
    const { cart } = useContext(CartContext);

    return (
        <div>
            <h1 style={{ marginBottom: 20 }}>Cart</h1>

            {cart.length === 0 && <p>Cart is empty</p>}

            {cart.map((item) => (
                <div key={item.id} className="card">
                    <h4>{item.title}</h4>
                    <p>Qty: {item.quantity}</p>
                </div>
            ))}
        </div>
    );
}
