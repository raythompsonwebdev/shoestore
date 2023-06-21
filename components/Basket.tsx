import Head from "next/head";
import Layout from "../components/Layout";

export default function Basket(props: {
  cartItems: any;
  onAdd: any;
  onRemove: any;
}) {
  const { cartItems, onAdd, onRemove } = props;

  console.log(cartItems);
  const itemsPrice = cartItems.reduce(
    (a: number, c: { qty: number, price: number }) => a + c.qty * c.price,
    0
  );
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (

          <>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map(
              (item: {
                id: React.Key | null | undefined;
                name:
                  | string
                  | number
                  | null
                  | undefined;
                qty:
                  | string
                  | number
                  | null
                  | undefined;
                price: number;
              }) => (
                <div key={item.id} className="row">
                  <div className="col-2">{item.name}</div>
                  <div className="col-2">
                    <button onClick={() => onRemove(item)} className="remove">
                      -
                    </button>{" "}
                    <button onClick={() => onAdd(item)} className="add">
                      +
                    </button>
                  </div>

                  <div className="col-2 text-right">
                    {/* {item.qty} x ${item.price.toFixed(2)} */}
                  </div>
                </div>
              )
            )}

            {cartItems.length !== 0 && (
              <>
                <hr></hr>
                <div className="row">
                  <div className="col-2">Items Price</div>
                  <div className="col-1 text-right">
                    ${itemsPrice}
                  </div>
                </div>
                <div className="row">
                  <div className="col-2">Tax Price</div>
                  <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                  <div className="col-2">Shipping Price</div>
                  <div className="col-1 text-right">
                    ${shippingPrice}
                  </div>
                </div>

                <div className="row">
                  <div className="col-2">
                    <strong>Total Price</strong>
                  </div>
                  <div className="col-1 text-right">
                    <strong>${totalPrice}</strong>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <button onClick={() => alert("Implement Checkout!")}>
                    Checkout
                  </button>
                </div>
              </>
            )}
          </>

  );
}
