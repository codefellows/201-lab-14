/* global Cart */
'use strict';

const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

function renderCart() {
  loadCart();
  clearCart();
  showCart();
  state.cart.updateCounter();
}

function clearCart() {
  const tableRows = document.querySelectorAll('#cart tbody tr');
  console.log(tableRows);

  for(let i = 0; i <= tableRows.length; i++){
    if(tableRows[i]){
      tableRows[i].remove();
    }
  }
}


function showCart() {

  const tbody = document.querySelector('#cart tbody');

  for(let i = 0; i < state.cart.items.length; i++){
    let tr = document.createElement('tr');
    let deleteLink = document.createElement('button');
    deleteLink.classList.add('deleteButton');
    deleteLink.id = i;
    deleteLink.textContent = 'x';
    tr.appendChild(deleteLink);

    // quantity
    let quantityCell = document.createElement('td');
    quantityCell.textContent = state.cart.items[i].quantity;
    tr.appendChild(quantityCell);

    // item
    let productCell = document.createElement('td');
    productCell.textContent = state.cart.items[i].product;
    tr.appendChild(productCell);

    tbody.appendChild(tr);
  }
}



function removeItemFromCart(event) {

  // >>>>>>> FOR JAYE'S BRILIANT MASTER PLAN
  let targetId = event.target.id;
  let deleteButtons = document.querySelectorAll('deleteButton');
  for(let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', removeItemFromCart);
  }
  state.cart.removeItem(targetId);
  renderCart();



}
renderCart();