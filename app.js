
let sortedCustomerOrderArray =[];
let orderidnumber =0;
let burgerarray = [

    {
        itemcode: "1001",
        itemname: "Classic Burger (Large)",
        price: 750.00,
        discount: 0,
        type: "burger",
    }, {
        itemcode: "1002",
        itemname: "Classic Burger (Regular) ",
        price: 1500.00,
        discount: 15,
        type: "burger",
    }, {
        itemcode: "1003",
        itemname: "Turkey Burger",
        price: 1600.00,
        discount: 0,
        type: "burger",

    }, {
        itemcode: "1004",
        itemname: "Chicken Burger (Large) ",
        price: 1400.00,
        discount: 0,
        type: "burger",

    }, {
        itemcode: "1005",
        itemname: "Chicken Burger (Regular)  ",
        price: 800.00,
        discount: 20,
        type: "burger",

    }, {
        itemcode: "1006",
        itemname: "Cheese Burger (Large) ",
        price: 1000.00,
        discount: 0,
        type: "burger",
    }, {
        itemcode: "1007",
        itemname: "Cheese Burger (Regular) ",
        price: 600.00,
        discount: 0,
        type: "burger",
    }, {
        itemcode: "1008",
        itemname: "Bacon Burger ",
        price: 650.00,
        discount: 15,
        type: "burger",

    }, {
        itemcode: "1009",
        itemname: "Shawarma Burger",
        price: 800.00,
        discount: 0,
        type: "burger",

    }, {
        itemcode: "1010",
        itemname: "Olive Burger ",
        price: 1800.00,
        discount: 0,
        type: "burger",

    }, {
        itemcode: "1012",
        itemname: "Double-Cheese Burger ",
        price: 1250.00,
        discount: 20,
        type: "burger",

    }, {
        itemcode: "1013",
        itemname: "Crispy Chicken Burger (Regular) ",
        price: 1200.00,
        discount: 0,
        type: "burger",

    }, {
        itemcode: "1014",
        itemname: "Crispy Chicken Burger (Regular) ",
        price: 1600.00,
        discount: 10,
        type: "burger",

    }, {
        itemcode: "1015",
        itemname: "Paneer Burger ",
        price: 900.00,
        discount: 0,
        type: "burger",


    }, {
        itemcode: "1038",
        itemname: "Fried Chicken (Small)  ",
        price: 1200.00,
        discount: 0,
        type: "Chicken"

    }, {
        itemcode: "1039",
        itemname: " Fried Chicken (Regular) ",
        price: 2300.00,
        discount: 10,
        type: "Chicken"

    }, {
        itemcode: "1040",
        itemname: "Fried Chicken (Large)  ",
        price: 3100.00,
        discount: 5,
        type: "Chicken"

    }, {
        itemcode: "1041",
        itemname: "Fried Chicken (Large)  ",
        price: 2400.00,
        discount: 0,
        type: "Chicken"

    }, {
        itemcode: "1042",
        itemname: "Devilled Chicken (Large)  ",
        price: 900.00,
        discount: 0,
        type: "Chicken"

    }, {
        itemcode: "1043",
        itemname: " BBQ Chicken (Regular) ",
        price: 2100.00,
        discount: 0,
        type: "Chicken"

    }, {
        itemcode: "1044",
        itemname: " Pepsi (330ml)  ",
        price: 990.00,
        discount: 5,
        type: "Beverages"
    }, {

        itemcode: "1045",
        itemname: " Coca-Cola (330ml)  ",
        price: 1230.00,
        discount: 0,
        type: "Beverages"
    }, {

        itemcode: "1046",
        itemname: " Sprite (330ml)   ",
        price: 1500.00,
        discount: 3,
        type: "Beverages"
    }, {

        itemcode: "1047",
        itemname: " Mirinda (330ml)  ",
        price: 850.00,
        discount: 7,
        type: "Beverages"
    }, {
        itemcode: "1025",
        itemname: "Steak Fries (Large) ",
        pricelkr: 1200.00,
        discount: 0,
        type: "fries",
    }, {
        itemcode: "1026",
        itemname: "Steak Fries (Medium)",
        pricelkr: 600.00,
        discount: 0,
        type: "fries",
    }, {
        itemcode: "1027",
        itemname: "French Fries (Large)",
        pricelkr: "800.00",
        discount: 0,
        type: "fries",
    }, {
        itemcode: "1028",
        itemname: "French Fries (Medium)",
        pricelkr: 650.00,
        discount: 0,
        type: "fries",
    }, {
        itemcode: "1029",
        itemname: "French Fries (Small)",
        pricelkr: 450.00,
        discount: 0,
        type: "fries",
    }, {
        itemcode: "1030",
        itemname: "Sweet Potato Fries (Large)",
        pricelkr: 600.00,
        discount: 0,
        type: "fries",
    }, {
        itemcode: "1031",
        itemname: "Chicken n Cheese Pasta ",
        pricelkr: 1600.00,
        discount: 15,
        type: "pasta",
    }, {
        itemcode: "1032",
        itemname: "Chicken Penne Pasta ",
        pricelkr: 1700.00,
        discount: 0,
        type: "pasta",
    }, {
        itemcode: "1033",
        itemname: "Ground Turkey Pasta Bake",
        pricelkr: 2900.00,
        discount: 0,
        type: "pasta",
    }, {
        itemcode: "1034",
        itemname: "Creamy Shrimp Pasta ",
        pricelkr: 2000.00,
        discount: 0,
        type: "pasta",
    }, {
        itemcode: "1035",
        itemname: "Lemon Butter Pasta",
        pricelkr: 1950.00,
        discount: 0,
        type: "pasta",
    }, {
        itemcode: "1036",
        itemname: "Tagliatelle Pasta",
        pricelkr: 2400.00,
        discount: 0,
        type: "pasta",
    },
    {
        itemcode: "1037",
        itemname: "Baked Ravioli",
        pricelkr: 2000.00,
        discount: 0,
        type: "pasta",
    },



];

let customerArray = [
    {
        phonenumber: "01",
        name: "methmin",
        address: "horana",
        nic: "123"


    }, {
        phonenumber: "02",
        name: "kaveesha",
        address: "horana",
        nic: "123"

    }, {
        phonenumber: "03",
        name: "Sitheme",
        address: "horana",
        nic: "123"

    }, {
        phonenumber: "04",
        name: "heshan",
        address: "horana",
        nic: "123"

    }]
let cartArray = [];
let placedOrderArray =[];




/////////////////////////////////////////////////////////////////////////////////////PLACE ORDER//////////////////////////////////////////////////////////////////////////////////
function searchItems() {
    
    let count = 0;
    burgerarray.forEach(element => {
        if (count == 0 && element.itemname.toLocaleLowerCase().includes(document.getElementById("itemSearchBar").value)) {
            
            console.log("searching");
        
            
            document.getElementById("root").innerHTML = ` <div class="col m-2" >    
            <div class="card border-2 border-warning" style="width: 18rem;">
                <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.itemname}.</h5>
                  <p class="card-text text-danger">Rs. ${element.price}</p>
                  <p class="card-text text-danger">Discount: ${element.discount}</p>
                  <button class="btn bg-warning" onclick="addToCart(${Number(element.itemcode)})">Add To Card</button>
                  <button type="button" onclick="deleteItem(${Number(element.itemcode)})">Delete</button>  
                   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${element.itemcode}">Update</button> 
                  </div>
              </div>
            </div>
            
            
      <!-- Modal -->
      <div class="modal fade" id="${element.itemcode}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="text"  id=${element.itemcode+"itemname"} value="${element.itemname}" >
                <input type="text"  id=${element.itemcode+"price"} value="${element.price}">
                <input type="text"  id=${element.itemcode+"discount"} value="${element.discount}">
                <input type="text"  id=${element.itemcode+"type"} value="${element.type}"> 
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="refeshItemPage()">Close</button>
              <button type="button" class="btn btn-primary" onclick="updateItem(${String(element.itemcode)})">Update</button>  
            </div>
          </div>
        </div>
      </div>
            `
            count++;

        } else if(count != 0 && element.itemname.toLocaleLowerCase().includes(document.getElementById("itemSearchBar").value)) {
            document.getElementById("root").innerHTML += ` <div class="col m-2" >    
            <div class="card border-2 border-warning" style="width: 18rem;">
                <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.itemname}.</h5>
                  <p class="card-text text-danger">Rs. ${element.price}</p>
                  <p class="card-text text-danger">Discount: ${element.discount}</p>
                  <button class="btn bg-warning" onclick="addToCart(${Number(element.itemcode)})">Add To Card</button>
                    <button type="button" onclick="deleteItem(${Number(element.itemcode)})">Delete</button>
                     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${element.itemcode}">Update</button>  
                  </div>
              </div>
            </div>
            
             <!-- Modal -->
      <div class="modal fade" id="${element.itemcode}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body"> 
                <input type="text"  id=${element.itemcode+"itemname"} value="${element.itemname}" >
                <input type="text"  id=${element.itemcode+"price"} value="${element.price}">
                <input type="text"  id=${element.itemcode+"discount"} value="${element.discount}">
                <input type="text"  id=${element.itemcode+"type"} value="${element.type}"> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="refeshItemPage()">Close</button>
              <button type="button" class="btn btn-primary" onclick="updateItem(${element.itemcode})">Update</button>  
            </div>
          </div>
        </div>
      </div>
            `
        }
    });
}
function itemStore() {

    let count = 0;
    burgerarray.forEach(element => {
        if (count == 0) {
            document.getElementById("header").innerHTML = `
                <input type="text" id="itemSearchBar">
                <button type="button" onclick="searchItems()">serach</button>
                     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Add Item
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="text" placeholder="Product Name" id="addItemName">
                <input type="text" placeholder="Phone Number" id="addItemId">
                <input type="text" placeholder="Price" id="addItemPrice">
                <input type="text" placeholder="Discoount" id="addItemDiscount"> 
                <input type="text" placeholder="Type" id="addItemType"> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onclick="addNewItem()" class="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
                `

            document.getElementById("root").innerHTML = ` <div class="col m-2" >    
            <div class="card border-2 border-warning" style="width: 18rem;">
                <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.itemname}.</h5>
                  <p class="card-text text-danger">Rs. ${element.price}</p>
                  <p class="card-text text-danger">Discount: ${element.discount}</p>
                  <button class="btn bg-warning" onclick="addToCart(${Number(element.itemcode)})">Add To Card</button>
                  <button type="button" onclick="deleteItem(${Number(element.itemcode)})">Delete</button>  
                   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${element.itemcode}">Update</button> 
                  </div>
              </div>
            </div>
            
            
      <!-- Modal -->
      <div class="modal fade" id="${element.itemcode}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="text"  id=${element.itemcode+"itemname"} value="${element.itemname}" >
                <input type="text"  id=${element.itemcode+"price"} value="${element.price}">
                <input type="text"  id=${element.itemcode+"discount"} value="${element.discount}">
                <input type="text"  id=${element.itemcode+"type"} value="${element.type}"> 
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="refeshItemPage()">Close</button>
              <button type="button" class="btn btn-primary" onclick="updateItem(${String(element.itemcode)})">Update</button>  
            </div>
          </div>
        </div>
      </div>
            `
            count++;

        } else if (count != 0) {
            document.getElementById("root").innerHTML += ` <div class="col m-2" >    
            <div class="card border-2 border-warning" style="width: 18rem;">
                <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.itemname}.</h5>
                  <p class="card-text text-danger">Rs. ${element.price}</p>
                  <p class="card-text text-danger">Discount: ${element.discount}</p>
                  <button class="btn bg-warning" onclick="addToCart(${Number(element.itemcode)})">Add To Card</button>
                    <button type="button" onclick="deleteItem(${Number(element.itemcode)})">Delete</button>
                     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${element.itemcode}">Update</button>  
                  </div>
              </div>
            </div>
            
             <!-- Modal -->
      <div class="modal fade" id="${element.itemcode}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body"> 
                <input type="text"  id=${element.itemcode+"itemname"} value="${element.itemname}" >
                <input type="text"  id=${element.itemcode+"price"} value="${element.price}">
                <input type="text"  id=${element.itemcode+"discount"} value="${element.discount}">
                <input type="text"  id=${element.itemcode+"type"} value="${element.type}"> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="refeshItemPage()">Close</button>
              <button type="button" class="btn btn-primary" onclick="updateItem(${element.itemcode})">Update</button>  
            </div>
          </div>
        </div>
      </div>
            `
        }
    });
}

function refeshItemPage(){
    itemStore();
}

function addNewItem(){
    burgerarray.push({
        itemcode: document.getElementById("addItemId").value,
        itemname: document.getElementById("addItemName").value,
        price: Number(document.getElementById("addItemPrice").value),
        discount: Number(document.getElementById("addItemDiscount").value),
        type: document.getElementById("addItemType").value,
    })
    document.getElementById("root").innerHTML += ` <div class="col m-2" >    
    <div class="card border-2 border-warning" style="width: 18rem;">
        <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${document.getElementById("addItemName").value}.</h5>
          <p class="card-text text-danger">Rs. ${document.getElementById("addItemPrice").value}</p>
          <p class="card-text text-danger">Discount: ${document.getElementById("addItemDiscount").value}</p>
          <button class="btn bg-warning" onclick="addToCart(${Number(document.getElementById("addItemId").value)})">Add To Card</button>
            <button type="button" onclick="deleteItem(${Number(document.getElementById("addItemId").value)})">Delete</button>
            <button type="button" onclick="updateItem(${Number(document.getElementById("addItemId").value)}) ">Update</button>
          </div>
      </div>
    </div>`
    
}

function deleteItem(itemCode) {

    if(confirm("Do you Comferm Delete") == true){

    for (let i = 0; i < burgerarray.length; i++) {
        if (burgerarray[i].itemcode == itemCode) {
            burgerarray.splice(i, 1);
            break;
        }
    }
    itemStore();
    }
}

function updateItem(itemCode) {
  console.log(itemCode);

  let i = 0;
  burgerarray.forEach(element => {
    if(element.itemcode == itemCode){
        burgerarray[i].itemname = document.getElementById(element.itemcode+"itemname").value
        burgerarray[i].price = document.getElementById(element.itemcode+"price").value
        burgerarray[i].discount = document.getElementById(element.itemcode+"discount").value
        burgerarray[i].type = document.getElementById(element.itemcode+"type").value
        return;
    }
    i++;
  });
  
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////ADD TO CART///////////////////////////////////////////////////////////////////////////////////////////////////////////////


function addToCart(itemCode) {
    burgerarray.forEach(element => {
        if (element.itemcode == itemCode) {
            cartArray.push({
                itemcode: element.itemcode,
                itemname: element.itemname,
                price: element.price,
                discount: element.discount,
                type: element.type
            });
        }
    });

}

function cartItem() {
    let total = 0;
    let discount = 0;
    let count = 0;
    if(cartArray.length==0){
        document.getElementById("root").innerHTML =``
    }
    cartArray.forEach(element => {
        if (count == 0) {


            document.getElementById("root").innerHTML = ` <div class="col m-2" >    
            <div class="card border-2 border-warning" style="width: 18rem;">
                <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.itemname}.</h5>
                  <p class="card-text text-danger">Rs. ${element.price}</p>
                  <p class="card-text text-danger">Discount: ${element.discount}</p>
                  <button class="btn bg-warning" onclick="addToCart(${Number(element.itemcode)})">Add To Card</button>
                  <button type="button" onclick="deleteItem(${Number(element.itemcode)})">Delete</button>  
                  <button type="button" onclick="updateItem(${Number(element.itemcode)})">Update</button>  
                  </div>
              </div>
            </div>`
            count++;
              
            if (element.discount != 0){
                total += Number(element.price - (element.price*element.discount/100));
                discount +=  (element.price*element.discount/100);

            }else {
                total += Number(element.price);
                discount +=  0;

            }

        } else if (count != 0) {
            document.getElementById("root").innerHTML += ` <div class="col m-2" >    
            <div class="card border-2 border-warning" style="width: 18rem;">
                <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.itemname}.</h5>
                  <p class="card-text text-danger">Rs. ${element.price}</p>
                  <p class="card-text text-danger">Discount: ${element.discount}</p>
                  <button class="btn bg-warning" onclick="addToCart(${Number(element.itemcode)})">Add To Card</button>
                    <button type="button" onclick="deleteItem(${Number(element.itemcode)})">Delete</button>
                    <button type="button" onclick="updateItem(${Number(element.itemcode)}) ">Update</button>
                  </div>
              </div>
            </div>`
           
           
            if (element.discount != 0){
                total += Number(element.price - (element.price*element.discount/100));
                discount +=  (element.price*element.discount/100);

            }else {
                total += Number(element.price);
                discount +=  0;

            }
        
            
        }

    });
    document.getElementById("header").innerHTML = `
            <h1>${total}</h1>    

              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Place Order</button>
      
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="alerat">
               
                <input type="text" placeholder="phone number" id="orderCustomerNumber">  

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onclick="placeOrder(${total})" class="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>

            `
}

let date = new Date()

function placeOrder(total){
    let date = new Date()
    let isCustomer = false;
   
       customerArray.forEach(element => {
           if(element.phonenumber ==  document.getElementById("orderCustomerNumber").value){
               isCustomer = true;    
           }
       });
   
   if(isCustomer){
       placedOrderArray.push({
             orderKey : String(orderidnumber),
           phonenumber : document.getElementById("orderCustomerNumber").value,
           orderId : cartArray,
           date : date.getFullYear(),
           total : total
       })
       orderidnumber ++;
       cartArray = []; 
       
   
       console.log(placedOrderArray);
   }else{
       console.log("Invalid Customer");
       document.getElementById("alerat").innerHTML += `<button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="customer()">Invalid Customer</button>`
       
   }    
   }


/////////////////////////////////////////////////////////////////////////////CUSTOMER //////////////////////////////////////////////////////////////////////////////////////////////////////////////


function searchCustomer() {
    console.log("c");
    
    let count = 0;
    customerArray.forEach(element => {
        if (count == 0 && element.name.toLocaleLowerCase().includes(document.getElementById("customerSearchBar").value) || element.phonenumber.toLocaleLowerCase().includes(document.getElementById("customerSearchBar").value) ) {
        
            document.getElementById("root").innerHTML = ` <div class="col m-2" >    
            <div class="card border-2 border-warning" style="width: 18rem;">
                <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.name}.</h5>
                  <p class="card-text text-danger">Rs. ${element.phonenumber}</p>
                  <button type="button" onclick="deleteCustomer(${Number(element.phonenumber)})">Delete</button>  
                     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${count}">Update</button>  
                  </div>
              </div>
            </div>

            

            <!-- Modal -->
            <div class="modal fade" id="${count++}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">hi</button>
                </div>
                <div class="modal-body">
                <div>
                <input type="text"  id="${element.phonenumber+"name"}" value="${element.name}">
                <input type="text"  id="${element.phonenumber+"phonenumber"}" value="${element.phonenumber}">
                <input type="text"  id="${element.phonenumber+"address"}" value="${element.address}">
                <input type="text"  id="${element.phonenumber+"nic"}" value="${element.nic}"> 
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" onclick="updateCustomer(${String(element.phonenumber)})">Update</button>
                </div>
                </div>
            </div>
            </div>`
        } else if (count != 0 && element.name.toLocaleLowerCase().includes(document.getElementById("customerSearchBar").value)||element.phonenumber.toLocaleLowerCase().includes(document.getElementById("customerSearchBar").value) ) {
            document.getElementById("root").innerHTML += ` <div class="col m-2" >    
            <div class="card border-2 border-warning" style="width: 18rem;">
                <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.name}.</h5>
                  <p class="card-text text-danger">Rs. ${element.phonenumber}</p>
                  <button type="button" onclick="deleteCustomer(${Number(element.phonenumber)})">Delete</button>  
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${count}">Update</button>  
                  </div>
              </div>
            </div>


            <!-- Modal -->
            <div class="modal fade" id="${count++}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">hi</button>
                </div>
                <div class="modal-body">
                <div>
                <input type="text"  id="${element.phonenumber+"name"}" value="${element.name}">
                <input type="text"  id="${element.phonenumber+"phonenumber"}" value="${element.phonenumber}">
                <input type="text"  id="${element.phonenumber+"address"}" value="${element.address}">
                <input type="text"  id="${element.phonenumber+"nic"}" value="${element.nic}"> 
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="updateCustomer(${String(element.phonenumber)})">Update</button>
                </div>
                </div>
            </div>
            </div>

            `
        }
    });
}

function customer() {
    
    let count = 0;
    customerArray.forEach(element => {
        if (count == 0) {
            document.getElementById("header").innerHTML = `
                <input type="text" id="customerSearchBar">
                <button type="button" onclick="searchCustomer()">serach</button>

                 <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Add Custonmer
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="text" placeholder="name" id="addcustomername">
                <input type="text" placeholder="phone number" id="addcustomeernumber">
                <input type="text" placeholder="Address" id="addcustomeraddress">
                <input type="text" placeholder="Nic" id="addcustomerNic"> 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" onclick="addNewCustomer()" class="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>

  


                `
            document.getElementById("root").innerHTML = ` <div class="col m-2" >    
            <div class="card border-2 border-warning" style="width: 18rem;">
                <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.name}.</h5>
                  <p class="card-text text-danger">Rs. ${element.phonenumber}</p>
                  <button type="button" onclick="deleteCustomer(${Number(element.phonenumber)})">Delete</button>  
                     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${count}">Update</button>  
                  </div>
              </div>
            </div>

            

            <!-- Modal -->
            <div class="modal fade" id="${count++}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">hi</button>
                </div>
                <div class="modal-body">
                <div>
                <input type="text"  id="${element.phonenumber+"name"}" value="${element.name}">
                <input type="text"  id="${element.phonenumber+"phonenumber"}" value="${element.phonenumber}">
                <input type="text"  id="${element.phonenumber+"address"}" value="${element.address}">
                <input type="text"  id="${element.phonenumber+"nic"}" value="${element.nic}"> 
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" onclick="updateCustomer(${String(element.phonenumber)})">Update</button>
                </div>
                </div>
            </div>
            </div>`
        } else if (count != 0) {
            document.getElementById("root").innerHTML += ` <div class="col m-2" >    
            <div class="card border-2 border-warning" style="width: 18rem;">
                <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${element.name}.</h5>
                  <p class="card-text text-danger">Rs. ${element.phonenumber}</p>
                  <button type="button" onclick="deleteCustomer(${Number(element.phonenumber)})">Delete</button>  
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${count}">Update</button>  
                  </div>
              </div>
            </div>


            <!-- Modal -->
            <div class="modal fade" id="${count++}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">hi</button>
                </div>
                <div class="modal-body">
                <div>
                <input type="text"  id="${element.phonenumber+"name"}" value="${element.name}">
                <input type="text"  id="${element.phonenumber+"phonenumber"}" value="${element.phonenumber}">
                <input type="text"  id="${element.phonenumber+"address"}" value="${element.address}">
                <input type="text"  id="${element.phonenumber+"nic"}" value="${element.nic}"> 
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="updateCustomer(${String(element.phonenumber)})">Update</button>
                </div>
                </div>
            </div>
            </div>

            `
        }
    });
}

function updateCustomer(phonenumber){
  
    console.log(phonenumber);
    
    let i = 0;
    customerArray.forEach(element => {
        
        
        if(element.phonenumber == phonenumber){
            customerArray[i].name =  document.getElementById(element.phonenumber+"name").value;
            customerArray[i].phonenumber = document.getElementById(element.phonenumber+"phonenumber").value;;
            customerArray[i].address = document.getElementById(element.phonenumber+"address").value;;
            customerArray[i].nic = document.getElementById(element.phonenumber+"nic").value;;
            console.log(customerArray);
            return;
        }
        
        i++  
    });
}

function addNewCustomer(){

    customerArray.push({
        name: document.getElementById("addcustomername").value,
        phonenumber: document.getElementById("addcustomeernumber").value,
        address: document.getElementById("addcustomeraddress").value,
        nic: document.getElementById("addcustomerNic").value
    })
    console.log(customerArray);
    document.getElementById("root").innerHTML += ` <div class="col m-2" >    
    <div class="card border-2 border-warning" style="width: 18rem;">
        <img class="card-img-top" src="https://freshchoicenelson.co.nz/wp-content/uploads/2019/06/free-range-chicken-nelson.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${document.getElementById("addcustomername").value}.</h5>
          <p class="card-text text-danger">Rs. ${document.getElementById("addcustomeernumber").value}</p>
          <button type="button" onclick="deleteCustomer(${(document.getElementById("addcustomeernumber").value)})">Delete</button>  
          <button type="button" onclick="updateItem(${Number(document.getElementById("addcustomeernumber").value)})">Update</button>  
          </div>
      </div>
    </div>`
}

function deleteCustomer(phonenumber){

    if(confirm("Do you comferm Delete") == true ){
    for (let i = 0; i < customerArray.length; i++) {
        if (customerArray[i].phonenumber == phonenumber) {
            customerArray.splice(i, 1);
            break;
        }
    }
    customer();
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////ORDER PAGE 3 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function orderPage(){

    
    document.getElementById("header").innerHTML =``

    document.getElementById("root").innerHTML = `
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Order Id</th>
      <th scope="col">Date</th>
      <th scope="col">Phone Number</th>
      <th scope="col">View</th>
      <th scope="col">Total</th>
      <th scope="col">Delete</th>
      
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody id ="orderPaeTable" >
   
  </tbody>
</table>

 `

let index = 0;
let count =0;
placedOrderArray.forEach(element => {
    console.log("orderId");
    
    console.log(element.orderId);
    console.log("orderId///");
    document.getElementById("orderPaeTable").innerHTML += `<tr>
      <th scope="row">ODR${element.orderKey}</th>
      <th scope="row">${element.date}</th>
      <td colspan="1">${element.phonenumber}</td>
      <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${index}" >
      View More Details
      </button></td>
      
      <td colspan="1">RS.${element.total}</td>
        <td><button type="button " onclick="deleteOrder(${element.orderKey})"class="btn btn-danger" >Delete</button></td>
        <td><button type="button"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#V${count}">Update</button>  </td>
        




 <div class="modal fade" id="V${count++}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog  modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" onclick="refreshOrderPage()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div>
                <input type="text"  id="${element.orderKey+"date"}" value="${element.date}">
              
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick ="refreshOrderPage()" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary" onclick="updateOrder(${element.orderKey})">Update</button>
                </div>
                </div>
            </div>
            </div>
       
 


<!-- Modal -->
<div class="modal fade" id="${index++}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog  modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="moreDetailsPopUpBody">
      <div>
        ${orderMoreDetails(element.orderId)}
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>
    `

});

}

function refreshOrderPage() {
    orderPage();
}


function deleteOrder(orderKey){
    console.log(orderKey);
    
   
    for (let i = 0; i< placedOrderArray.length ;i++){
        if(placedOrderArray [i].orderKey == orderKey){
        placedOrderArray.splice(i,1)
        console.log(placedOrderArray);
        break;
            
            
        }

    }
    orderPage();
}

function updateOrder(orderKey){
    console.log("KEY : "+orderKey);
    
 
    for (let i = 0; i < placedOrderArray.length; i++) {
         if (placedOrderArray[i].orderKey == orderKey ){
            placedOrderArray[i].date = document.getElementById(placedOrderArray [i].orderKey+"date").value;            
            break;
         }
        
    }
    
}

function orderMoreDetails(selectedItemsArray){
   console.log("slected ITems");
   
    console.log(selectedItemsArray);
var textBody = ``;

 selectedItemsArray.forEach(element => {
    textBody += `<h1>${element.itemname}</h1><br>`
  
});

return (textBody);
}




//////////////////////////////////////////////////////REPORTS////////////////////////////////////////////////////////////////////////////////////////////////////


function Reportpage() {


    document.getElementById("header") .innerHTML = `
                    
                    <button type="button" onclick="monthlyReports()">Monthly Reports </button>
                    <button type="button" onclick="viewCustomerReports()"> Customer Reports</button>
                    <button type="button" onclick="annualReports()"> Annual Reports</button>
    
    `
}

function monthlyReports (){

    document.getElementById("header") .innerHTML = `
                <input type="text" id="monthselect">                    
                <button type="button" onclick="searchmonthlyReports()">Monthly Reports </button>

                


  `

  document.getElementById("root").innerHTML =`
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody id="monthreportbody">
    
  </tbody>
</table>  `
   

}

function searchmonthlyReports(){
    placedOrderArray.forEach(element => {
        if(String(element.date).includes(document.getElementById("monthselect").value)){
            document.getElementById("monthreportbody").innerHTML =`
        <tr>
      <th scope="row">1</th>
      <td>${element.orderKey}</td>
      <td>${element.date}</td>
      <td>${element.total}</td>
     </tr>
    
            
            `            
            
        }
        
    });

}


function viewCustomerReports() {
let isExits = false;

    for (let index = 0; index < placedOrderArray.length; index++) {
        
        let i = 0;
        for (; i < sortedCustomerOrderArray.length; i++) {
         console.log("running");
         
            if(sortedCustomerOrderArray[i].phonenumber == placedOrderArray[index].phonenumber){
                console.log("running if");
                isExits = true;
                break;
            }
        }
        if(!isExits){
            sortedCustomerOrderArray.push({
                phonenumber : placedOrderArray[index].phonenumber,
                custTotal : placedOrderArray[index].total,
                orderIdArray : [placedOrderArray[index].orderKey]
            })
            isExits =false;
        }else{
            isExits =false;
            sortedCustomerOrderArray[i].custTotal += placedOrderArray[index].total,
            sortedCustomerOrderArray[i].orderIdArray.push(placedOrderArray[index].orderKey)
        }
        }
      console.log("this is Before sorted array");
    console.log(sortedCustomerOrderArray); 
    console.log("this is  Aftersorted array");
    sortedCustomerOrderArray.sort((a,b)=>b.custTotal - a.custTotal);
        console.log(sortedCustomerOrderArray);


    

    document.getElementById("header") .innerHTML = `
    <input type="text" id="customerSearch">                    
    <button type="button" onclick="searchCustomerReports()">Monthly Reports </button>
`

document.getElementById("root").innerHTML =`
<table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">First</th>
<th scope="col">Last</th>
<th scope="col">Handle</th>
</tr>
</thead>
<tbody id="customerReportbody">
${searchCustomerReports()}
</tbody>
</table>  `

}

function searchCustomerReports() {
    let body = ``
    sortedCustomerOrderArray.forEach(element => {
        body += `   <tr>
      <th scope="row">1</th>
      <td>${element.phonenumber}</td>
      <td></td>
      <td>${element.custTotal}</td>
      <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${element.phonenumber}" >
      View More Details
      </button></td>
      
   
      <!-- Modal -->
      <div class="modal fade" id="${element.phonenumber}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-2" aria-labelledby="staticBackdropLabel12" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel12">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" >
            <div>
           <ul class="list-group" id="customerDetailsPop">
           ${loadOrderList(element.orderIdArray)}
            </ul>
            </div>
            </div>
             
            </div>
          </div>
        </div>
      </div>
       
 
     `
    });
    return (body);
}

function loadOrderList(oIdArray) {
    let body = ``;
    oIdArray.forEach(element => {
        for (let index = 0; index < placedOrderArray.length; index++) {
            if(element == placedOrderArray[index].orderKey){
                placedOrderArray[index].orderId.forEach(ele => {
                    body +=`<li class="list-group-item">${ele.itemname}</li>`  
                });
                break;
            }
        }
    });
    return(body);
}

function annualReports() {
    
    document.getElementById("header") .innerHTML = `
    <input type="text" id="yearSearch" placeholder="Enter Year">                    
    <button type="button" onclick="searchYearReports()">Search</button>
`

document.getElementById("root").innerHTML =`
<table class="table">
<thead>
<tr>
<th scope="col">Item Name</th>
<th scope="col">Item Price</th>
<th scope="col">Total</th>
<th scope="col">Count</th>
</tr>
</thead>
<tbody id="customerReportbody">

</tbody>
</table>  `

}

let itemSaleCountArray =[];
for (let index = 0; index < burgerarray.length; index++) {
    itemSaleCountArray.push({
        total:0,
        count:0
    });
}


function searchYearReports() {
    let hasRecord = false ;
    console.log(itemSaleCountArray.length);
    
    for (let index = 0; index < placedOrderArray.length; index++) {
         for (let i = 0; i < placedOrderArray[index].orderId.length; i++) {
            for (let ii = 0; ii < burgerarray.length; ii++) {

                
                if(placedOrderArray[index].orderId[i].itemcode == burgerarray[ii].itemcode && document.getElementById("yearSearch").value == placedOrderArray[index].date){
                    console.log(placedOrderArray[index].total);
                    hasRecord=true;
                    itemSaleCountArray[ii].total+=placedOrderArray[index].orderId[i].price;
                    itemSaleCountArray[ii].count+=1;
                    break;
                }   
            }      
         }  
    }

    let body =``;
    let place =0;
    burgerarray.forEach(element => {
        body += ` <tr>
      <th scope="row">${element.itemname}</th>
      <td>${element.price}</td>
      <td>${itemSaleCountArray[place].total}</td>
      <td>${itemSaleCountArray[place++].count}</td>
     </tr>`
    })
    if(hasRecord){
        document.getElementById("customerReportbody").innerHTML = body;
    }else{
        document.getElementById("customerReportbody").innerHTML = `<tr>
      <th scope="row" colspan="4" class="text-xl-center"> No records</th>
     </tr>`
    }
    itemSaleCountArray =[];
    for (let index = 0; index < burgerarray.length; index++) {
        itemSaleCountArray.push({
            total:0,
            count:0
        });
    }
}