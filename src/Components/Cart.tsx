import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function Cart() {
  const listItem = useSelector((state: any) => state.reducerState);
  const listCart = useSelector((state: any) => state.reducerItem);
  const dispatch = useDispatch();
  const [total, setTotal] = useState<number>(0);
  const [quantityInput, setQuantityInput] = useState<{ [key: number]: number }>(
    {}
  );

  const handleAddToCart = (id: number) => {
    const item = listItem.find((item: any) => item.id === id);
    const quantity = quantityInput[id] || 1;

    if (item) {
      if (item.stock < quantity) {
        Swal.fire({
          title: "Warning",
          text: "Quantity exceeds available stock!",
          icon: "warning",
        });
        return;
      }

      dispatch({
        type: "ADDTOCART",
        payload: { item, quantity },
      });

      Swal.fire({
        title: "Success",
        text: "Added to cart successfully!",
        icon: "success",
      });
    }
  };

  const changeQuantity = (id: number, value: any) => {
    setQuantityInput({
      ...quantityInput,
      [id]: Number(value),
    });
  };

  const deleteCartItem = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result: any) => {
      if (result.isConfirmed) {
        dispatch({
          type: "DELETE",
          payload: { id },
        });

        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    const total = listCart.reduce(
      (sum: number, item: any) => sum + item.price * item.quantity,
      0
    );
    setTotal(total);
  }, [listCart]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(listCart));
  }, [listCart]);

  return (
    <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              {listItem.map((item: any) => (
                <div key={item.id}>
                  <div className="media product">
                    <div className="media-left">
                      <a href="#">
                        <img
                          className="media-object"
                          src={item.image}
                          alt={item.name}
                        />
                      </a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{item.name}</h4>
                      <p>{item.title}</p>
                      <input
                        name={`quantity-product-${item.id}`}
                        type="number"
                        defaultValue={item.quantity}
                        onChange={(e) =>
                          changeQuantity(item.id, e.target.value)
                        }
                        min={1}
                      />
                      <button onClick={() => handleAddToCart(item.id)}>
                        <a data-product={item.id} className="price">
                          {item.price} USD
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="my-cart-body">
                  {listCart.map((item: any, index: number) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.price} USD</td>
                      <td>
                        <input
                          name={`cart-item-quantity-${item.id}`}
                          type="number"
                          value={item.quantity}
                          readOnly
                        />
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product={item.id}
                        >
                          Update
                        </a>
                        <a
                          className="label label-danger delete-cart-item"
                          data-product={item.id}
                          onClick={() => deleteCartItem(item.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot id="my-cart-footer">
                  <tr>
                    <td colSpan={4}>
                      There are <b>{listCart.length}</b> items in your shopping
                      cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                      {total} USD
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className="alert alert-success" role="alert" id="mnotification">
            Add to cart successfully
          </div>
        </div>
      </div>
    </div>
  );
}
