var data = require("./products.json")

// Write your solutions below
1. 
var count = 0
for (var i = 0; i < data["items"].length; i++) {
	if (data["items"][i].kind === "shopping#product") {
		count++;
	}
} console.log(count);
// 25 items with shopping#product in "kind"

2.
for (var i = 0; i < data["items"].length; i++) {
	if (data.items[i].product.inventories[0].availability == "backorder") {
		console.log(data["items"][i].product.title +":"+ data.items[i].product.inventories[0].availability);
	}
}


3. 
for (var i = 0; i < data["items"].length; i++) {
	if (data["items"][i].product.images.length >1) {
		console.log(data["items"][i].product.title + ":" + data["items"][i].product.images.length);
	}
}

4. 
for (var i = 0; i < data["items"].length; i++) {
	if (data["items"][i].product.brand == "Canon") {
		console.log(data["items"][i].product.title + ":" +data["items"][i].product.brand);
	}
}

5. 
for (var i = 0; i < data["items"].length; i++) {
	if (data["items"][i].product.author.name == "eBay" && data["items"][i].product.brand == "Canon") {
		console.log(data["items"][i].product.title + ":" + data["items"][i].product.author.name + ":" + data["items"][i].product.brand);
	}
}

6.
for (var i = 0; i < data["items"].length; i++) {
		console.log(data["items"][i].product.brand, data["items"][i].product.inventories[0].price, data["items"][i].product.images[0].link);
	}