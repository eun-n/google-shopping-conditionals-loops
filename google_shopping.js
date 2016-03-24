var data = require("./products.json")

// Write your solutions below
// 1. 
// var count = 0
// for (var i = 0; i < data["items"].length; i++) {
// 	if (data["items"][i].kind === "shopping#product") {
// 		count++;
// 	}
// } console.log(count);
// 25 items with shopping#product in "kind"

//2.
// for (var i = 0; i < data["items"].length; i++) {
// 	if (data.items[i].product.inventories[0].availability == "backorder") {
// 		console.log(data["items"][i]);
// 	}
// }


//3. 
// for (var i = 0; i < data["items"].length; i++) {
// 	if (data.items.[i].product.images.length >1) {
// 		console.log(data["items"][i]);
// 	}
// }

//4. 
// for (var i = 0; i < data["items"].length; i++) {
// 	if (data.items.[i].product.brand == "Canon") {
// 		console.log(data["items"][i]);
// 	}
// }

//5. 
// for (var i = 0; i < data["items"].length; i++) {
// 	if (data.items.[i].product.author.name == "eBay" && data.items.[i].product.brand == "Canon") {
// 		console.log(data["items"][i]);
// 	}
// }

// 6. *not working*
// for (var i = 0; i < data["items"].length; i++) {
// 	if (data.items.[i].product.images.length >1) {
// 		console.log(data.items.[i].brand + data.items.[i].inventories.price + data.items.[i].product.images[1]);
// 	}
// }
// console.log(data["items"]);