import React, { Component } from 'react'

export default class CartTotal extends Component {
    render() {
        let { renderCarts } = this.props;
        let elementCartInfo = (
            <tr>
                <th colSpan={6}>Empty product in your cart</th>
            </tr>
        );


        if (renderCarts != null && renderCarts.length > 0) {
            let subTotal = 0;
            renderCarts.forEach(item => {
                subTotal += parseFloat(item.product.price) * parseFloat(item.quantity);
            });
            elementCartInfo = (
                <tr>
                    <td colSpan={4}>
                        There are <b>{renderCarts.length}</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                        {subTotal} USD
                    </td>
                </tr>
            );
        }
        return (
            <>
                {elementCartInfo}
            </>
        )
    }
}
