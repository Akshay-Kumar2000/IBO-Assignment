/* 2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.
Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

/* Solution Question 2 => */

const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

function getUniqueProducts(listOfProducts) {
    let finalProducts = [];
    for (let i = 0; i < listOfProducts.length; i++) {
        let temp = listOfProducts[i];
        let flag = true;
        for (let j = 0; j < finalProducts.length; j++) {
            if (finalProducts[j].productName == temp.productName) {
                flag = false;
                finalProducts[j].quantity += temp.quantity;
                break;
            }
        }
        if (flag)
            finalProducts.push(temp);
    }
    console.log(finalProducts);
    return finalProducts;
}

getUniqueProducts(listOfProducts); 