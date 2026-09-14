// Task-1

const apiUrl = "https://fakestoreapi.com/products";

fetch(apiUrl)
    .then(response => response.json())
    .then(products => {

        console.log(" ALL PRODUCTS ");

        
        products.forEach(product => {
            console.log(`Title: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Category: ${product.category}`);
            console.log("");
        });

        const productDetails = products.map(product => {
            return {
                title: product.title,
                price: product.price
            };
        });

        console.log(" TITLE AND PRICE ");
        console.log(productDetails);

        const expensiveProducts = products.filter(product => {
            return product.price > 100;
        });

        console.log(" PRODUCTS ABOVE $100 ");
        console.log(expensiveProducts);

        const electronicsProduct = products.find(product => {
            return product.category === "electronics";
        });

        console.log(" FIRST ELECTRONICS PRODUCT ");
        console.log(electronicsProduct);

        const totalPrice = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log(`Total Price: $${totalPrice.toFixed(2)}`);

        const sortedProducts = [ products].sort((a, b) => {
            return b.price - a.price;
        });

        console.log(" HIGHEST TO LOWEST ");

        sortedProducts.forEach(product => {
            console.log(`${product.title} - $${product.price}`);
        });
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("API operation completed.");
    });



//  Task 2 — Product Category Dashboard


const apiUrl = "https://fakestoreapi.com/products";

function getCategoryCount(products, category) {
    return products.filter(product => {
        return product.category === category;
    }).length;
}

function calculateAverage(products) {
    const total = products.reduce((sum, product) => {
        return sum + product.price;
    }, 0);

    return total / products.length;
}

fetch(apiUrl)
    .then(response => response.json())
    .then(products => {

        const sortedProducts = [ products].sort((a, b) => {
            return b.price - a.price;
        });

        const highestPrice = sortedProducts[0].price;

        const lowestPrice = sortedProducts[sortedProducts.length - 1].price;

        const averagePrice = calculateAverage(products);

        console.log("PRODUCT DASHBOARD ");

        console.log(`Total Products: ${products.length}`);

        console.log(
            `Electronics: ${getCategoryCount(products, "electronics")}`
        );

        console.log(
            `Jewelery: ${getCategoryCount(products, "jewelery")}`
        );

        console.log(
            `Men's Clothing: ${getCategoryCount(products, "men's clothing")}`
        );

        console.log(
            `Women's Clothing: ${getCategoryCount(products, "women's clothing")}`
        );

        console.log(`Highest Price: $${highestPrice}`);
        console.log(`Lowest Price: $${lowestPrice}`);
        console.log(`Average Price: $${averagePrice.toFixed(2)}`);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Dashboard completed.");
    });


// Task 3 — User & Post API

const usersUrl = "https://jsonplaceholder.typicode.com/users";
const postsUrl = "https://jsonplaceholder.typicode.com/posts";


fetch(usersUrl)
    .then(response => response.json())
    .then(users => {

        console.log(" USER NAMES ");

        users.forEach(user => {
            console.log(user.name);
        });

        console.log(" USER NAME + EMAIL ");

        users.forEach(user => {
            console.log(`${user.name} - ${user.email}`);
        });

        const user5 = users.find(user => {
            return user.id === 5;
        });

        console.log(" USER ID 5 ");
        console.log(user5);

     
        const cityUsers = users.filter(user => {
            return user.address.city === "Gwenborough";
        });

        console.log("USERS FROM GWENBOROUGH ");
        console.log(cityUsers);

       
        return fetch(postsUrl);
    })
    .then(response => response.json())
    .then(posts => {

      
        const userPosts = posts.filter(post => {
            return post.userId === 1;
        });

        console.log(" POSTS BY USER ID 1 ");
        console.log(userPosts);


        console.log(`User ID 1 Post Count: ${userPosts.length}`);

        const longTitlePost = posts.find(post => {
            return post.title.length > 50;
        });

        console.log(" FIRST LONG TITLE POST ");
        console.log(longTitlePost);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("User and Post API completed.");
    });



// Task 4 — API + Search

const apiUrl = "https://fakestoreapi.com/products";

function searchProducts(products, category, maxPrice) {

    const result = products.filter(product => {
        return product.category === category &&
               product.price <= maxPrice;
    });

    return result;
}

const category = prompt("Enter product category:");

const maxPrice = Number(prompt("Enter maximum price:"));

fetch(apiUrl)
    .then(response => response.json())
    .then(products => {

        const result = searchProducts(
            products,
            category,
            maxPrice
        );

        console.log(" SEARCH RESULT ");

        if (result.length === 0) {
            console.log("No products found.");
        } else {

            result.forEach(product => {
                console.log(`Title: ${product.title}`);
                console.log(`Price: $${product.price}`);
                console.log(`Category: ${product.category}`);
                console.log("-----");
            });
        }
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Search completed.");
    });

// Task 5 — API Shopping Cart

const apiUrl = "https://fakestoreapi.com/products";

fetch(apiUrl)
    .then(response => response.json())
    .then(products => {

        console.log("AVAILABLE PRODUCTS ");

        products.forEach(product => {
            console.log(
                `ID: ${product.id} | ${product.title} | $${product.price}`
            );
        });

        const id1 = Number(prompt("Enter first product ID:"));
        const id2 = Number(prompt("Enter second product ID:"));

        const cart = [];

        const product1 = products.find(product => {
            return product.id === id1;
        });

        const product2 = products.find(product => {
            return product.id === id2;
        });

        if (product1) {
            cart.push(product1);
        }

        if (product2) {
            cart.push(product2);
        }

        console.log(" CART ");

        cart.forEach((product, index) => {
            console.log(`Product ${index + 1}: ${product.title}`);
            console.log(`Price: $${product.price}`);
        });

       
        const total = cart.reduce((sum, product) => {
            return sum + product.price;
        }, 0);

        let discount = 0;

        if (total > 200) {
            discount = 20;
        } else if (total > 100) {
            discount = 10;
        }

        const discountAmount = total * discount / 100;

        const finalAmount = total - discountAmount;

        console.log(`Total: $${total.toFixed(2)}`);
        console.log(`Discount: ${discount}%`);
        console.log(`Final Amount: $${finalAmount.toFixed(2)}`);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Shopping cart completed.");
    });


// Task 6 — FakeStore Product Report


const apiUrl = "https://fakestoreapi.com/products";

fetch(apiUrl)
    .then(response => response.json())
    .then(products => {

        console.log("========== PRODUCT REPORT ==========");

        console.log(`Total Products: ${products.length}`);

   
        const productNames = products.map(product => {
            return product.title;
        });

        console.log("\nProduct Names:");

        productNames.forEach(name => {
            console.log(`- ${name}`);
        });

        const expensiveProducts = products.filter(product => {
            return product.price > 100;
        });

        console.log("\nProducts Above $100:");

        expensiveProducts.forEach(product => {
            console.log(`${product.title} - $${product.price}`);
        });


        const electronicsProduct = products.find(product => {
            return product.category === "electronics";
        });

        console.log("\nElectronics Product:");

        if (electronicsProduct) {
            console.log(
                `${electronicsProduct.title} - $${electronicsProduct.price}`
            );
        }

     alue
        const totalValue = products.reduce((total, product) => {
            return total + product.price;
        }, 0);

        console.log(
            `\nTotal Product Value: $${totalValue.toFixed(2)}`
        );

        const anyAbove500 = products.some(product => {
            return product.price > 500;
        });

        console.log(`\nAny Product Above $500: ${anyAbove500}`);

        const allAbove1 = products.every(product => {
            return product.price > 1;
        });

        console.log(`All Products Above $1: ${allAbove1}`);

        const sortedProducts = [ products].sort((a, b) => {
            return b.price - a.price;
        });

        console.log("\nHighest → Lowest:");

        sortedProducts.forEach(product => {
            console.log(
                `${product.title} - $${product.price}`
            );
        });

        console.log("\n REPORT COMPLETED ");
    })
    .catch(error => {
        console.log("API Error:", error);
    })
    .finally(() => {
        console.log("API request completed.");
    });
