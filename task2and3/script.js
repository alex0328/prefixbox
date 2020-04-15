window.addEventListener("load", function(){
    //task 2
    const tagToListener = document.getElementsByClassName("product-data").item(2).firstElementChild;
    const takeTextChange = document.getElementsByClassName("product-data").item(1).firstElementChild;
    const originalParentInner1 = takeTextChange.innerHTML;
    const originalParentInner2 = tagToListener.innerHTML;

    // possible to create forEach and find proper data value

    const toClick = tagToListener.addEventListener("click", function() {
        if (takeTextChange.innerHTML == originalParentInner1) {
            tagToListener.innerHTML = originalParentInner1
            takeTextChange.innerHTML = originalParentInner2
        } else {
            tagToListener.innerHTML = originalParentInner2
            takeTextChange.innerHTML = originalParentInner1
        }
    });
    //task 3
    document.querySelectorAll('.product').forEach(item => {
        item.addEventListener('click', event => {
            let productId = item.getElementsByClassName("product-data").item(0).dataset.identifier,
                productName = item.getElementsByClassName("product-name").item(0).innerHTML,
                productPrice = item.getElementsByClassName("product-price").item(0).innerHTML;
                alert(`Product name: ${productName} \n Product ID: ${productId} \n Product Price: ${productPrice}`)
        });
      });
});