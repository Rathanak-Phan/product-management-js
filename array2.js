// const user1 = {
//     id: 123,
//     name: "Symeng",
//     gander: "male",
//     age: 17
// };

// console.log(user1.id);
// console.log(user1.name);
// console.log(user1.gander);

console.log("--------------------------------");
const users = [
    {
        id: 1,
        username: "userone",
        email: "user1@gmail.com",
        password: "12345678",
        bio: "Frontend developer who loves coding."
    },
    {
        id: 2,
        username: "usertwo_",
        email: "user2@gmail.com",
        password: "876",
        bio: "UI/UX designer who enjoys creating beautiful interfaces."
    },
    {
        id: 3,
        username: "userthree",
        email: "user3@gmail.com",
        password: "344",
        bio: "Full-stack developer passionate about web development."
    },
    {
        id: 4,
        username: "userfour",
        email: "user4@gmail.com",
        password: "44332211",
        bio: "Software engineer who loves solving problems."
    },
    {
        id: 5,
        username: "userfive",
        email: "user5@gmail.com",
        password: "55667788",
        bio: "JavaScript enthusiast learning React."
    },
    {
        id: 6,
        username: "usertwo",
        email: "user2@gmail.com",
        password: "876",
        bio: "UI/UX designer who enjoys creating beautiful interfaces."
    }
];

console.log(users[0]);

// map: Convert to new array
console.log("--------------------------------");
const showEmail = users.map((user) => {
    return `${user.email}, ?`;
});
console.log(showEmail);

// filter: 
console.log("--------------------------------");
const weakPassword = users.filter((user) => {
    return user.password.length <= 3 && user.email === "user3@gmail.com";
});
console.log(weakPassword);

// find: 
console.log("--------------------------------");
const searchByPassword = users.find((pass) => {
    return pass.password.length <= 8;
});
console.log(searchByPassword);

// findIndex:
console.log("--------------------------------");
const userIndex = users.findIndex(user => user.username === "usertwo");
console.log(userIndex);

// some: 
console.log("--------------------------------");
const inputEmail = "user1@gmail.com";
const getUserByEmail = users.some(user => user.email === inputEmail); 

if (getUserByEmail) {
    console.log("Email already exist")
} else {
    console.log("Email don't exist");
}


// foreach
console.log("--------------------------------");
users.forEach(element => {
    console.log(element.id);
    console.log(element.username);
    console.log(element.email);
});

console.log("--------------------------------");
const showProduct = document.getElementById("show-products");

const name = document.getElementById("name");
const code = document.getElementById("code");
const price = document.getElementById("price");
const qty = document.getElementById("qty");
const image = document.getElementById("image");

const previewsImage = document.getElementById("previews-image");

const form = document.getElementById("form");
const saveBtn = document.getElementById("save-btn")

const products = [
    {
        name: "MacBook Air M2",
        code: "MB102",
        price: 899,
        qty: 12,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
        name: "Samsung Galaxy S24",
        code: "SG204",
        price: 749,
        qty: 18,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf"
    },
    {
        name: "Sony WH-1000XM5",
        code: "SW305",
        price: 349,
        qty: 25,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b"
    },
    {
        name: "Nike Air Max 270",
        code: "NK406",
        price: 150,
        qty: 30,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
        name: "Logitech MX Master 3S",
        code: "LM507",
        price: 99,
        qty: 22,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },
    {
        name: "Canon EOS R50",
        code: "CR608",
        price: 679,
        qty: 7,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    },
    {
        name: "Apple Watch Series 9",
        code: "AW709",
        price: 399,
        qty: 14,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12"
    },
    {
        name: "JBL Flip 6",
        code: "JF810",
        price: 129,
        qty: 35,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
    },
    {
        name: "Nintendo Switch OLED",
        code: "NS911",
        price: 349,
        qty: 9,
        image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e"
    },
    {
        name: "Dell UltraSharp Monitor",
        code: "DU012",
        price: 429,
        qty: 11,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
    }
];

function Display(data) {
    let row = "";

    data.forEach((element, index) => {
        row += `
            <tr>
                <td>${element.name}</td>
                <td>${element.code}</td>
                <td>${element.price}</td>
                <td>${element.qty}</td>
                <td>
                    <img src="${element.image}" alt="${element.name}" style="width: 40px;">
                </td>
                <td class="text-center">
                    <button 
                        data-bs-toggle="modal"
                        data-bs-target="#productModal"
                        onclick="openUpdateModal(${index})"
                        class="btn text-warning">Update</button>
                    <button 
                        onclick="Delete(${index}, '${element.name}')"
                        class="btn text-danger">Delete</button>
                </td>
            </tr>
        `
    });

    showProduct.innerHTML = row;
}

Display(products);

let isUpdate;
let updateIndex;

function openAddModal() {
    isUpdate = false;

    updateIndex = null;

    form.reset();
    previewsImage.setAttribute("src", "");
    saveBtn.textContent = "Add product";
}

function openUpdateModal(index) {
    isUpdate = true;
    updateIndex = index;

    name.value = products[updateIndex].name;
    code.value = products[updateIndex].code;
    price.value = products[updateIndex].price;
    qty.value = products[updateIndex].qty;
    image.value = products[updateIndex].image;

    previewsImage.setAttribute("src", `${image.value}`);
    saveBtn.textContent = "Update product";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isUpdate){
        products[updateIndex].name = name.value;
        products[updateIndex].code = code.value;
        products[updateIndex].price = price.value;
        products[updateIndex].qty = qty.value;
        products[updateIndex].image = image.value;

    } else {
        product = {
            name: name.value,
            code: code.value,
            price: price.value,
            qty: qty.value,
            image: image.value,
        }

        products.push(product);
    }

    console.log(products[updateIndex]);

    Display(products);
});

function Delete(index, product_name) {
    if (confirm(`Are sure to delete ${product_name}`)) {   
        products.splice(index, 1);
    }

    Display(products);
}

const search = document.getElementById("search");

search.addEventListener("input", () => {
    const result = products.filter(
        item => item.name.toLocaleLowerCase()
        .includes(search.value.toLocaleLowerCase()));

    Display(result);
});
