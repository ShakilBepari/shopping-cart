
function handleProductChange(isIncrese,product,productTotal){
    const productInput = document.getElementById(product);
    const productCount = parseInt(productInput.value)
    let productNewCount = productCount;
    if(isIncrese == true){
        productNewCount = productNewCount + 1;
    }
    if(isIncrese == false && productNewCount > 0){
        productNewCount = productNewCount - 1;
    }
    productInput.value = productNewCount;
    let proTotal = 0;
    if(product == 'case-count'){
        proTotal = productNewCount * 59;
    }
    if(product == 'phone-count'){
        proTotal = productNewCount * 1219;
    }
    document.getElementById(productTotal).innerText = '$' + proTotal;
    calculateTotalInfo()
}

function calculateTotalInfo(){
    const phoneCount = getInfo('phone-count')
    const caseCount = getInfo('case-count');
    const totalAmount =  (phoneCount * 1219) + (caseCount * 59);
    document.getElementById('subtotal-count').innerText = '$' + totalAmount;
    const tax = Math.round(totalAmount * 0.1);
    document.getElementById('tax').innerText = '$' + tax;
    document.getElementById('grandtotal-count').innerText = '$' + (totalAmount + tax);
}

function getInfo(id){
    const Input = document.getElementById(id);
    const Count = parseInt(Input.value)
    return Count;
}