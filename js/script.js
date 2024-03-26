// Define a class for Pizza
class Pizza {
    constructor(size, crust, sauce, vegetarianToppings, nonVegetarianToppings, specialToppings, slices, cheese, orderType, deliveryTime, deliveryLocation, specialInstructions, customerName, customerPhone) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.vegetarianToppings = vegetarianToppings;
        this.nonVegetarianToppings = nonVegetarianToppings;
        this.specialToppings = specialToppings;
        this.slices = slices;
        this.cheese = cheese;
        this.orderType = orderType;
        this.deliveryTime = deliveryTime;
        this.deliveryLocation = deliveryLocation;
        this.specialInstructions = specialInstructions;
        this.customerName = customerName;
        this.customerPhone = customerPhone;
    }

    // Method to generate description of the pizza
    getDescription() {
        return `
        Size: ${this.size}
        Crust: ${this.crust}
        Sauce: ${this.sauce}
        Vegetarian Toppings: ${this.vegetarianToppings.join(', ')}
        Non-Vegetarian Toppings: ${this.nonVegetarianToppings.join(', ')}
        Special Toppings: ${this.specialToppings.join(', ')}
        Slices: ${this.slices}
        Cheese: ${this.cheese}
        Order Type: ${this.orderType}
        Delivery Time: ${this.deliveryTime}
        Delivery Location: ${this.deliveryLocation}
        Special Instructions: ${this.specialInstructions}
        Customer Name: ${this.customerName}
        Customer Phone: ${this.customerPhone}
      `;
    }
}

// Function to handle form submission
function submitOrder(event) {
    event.preventDefault(); // Prevent default form submission

    // Capture form values
    const size = document.getElementById('pizzaSize').value;
    const crust = document.getElementById('crustType').value;
    const sauce = document.getElementById('sauce').value;
    const vegetarianToppings = Array.from(document.querySelectorAll('input[name="vegetarianToppings"]:checked')).map(topping => topping.value);
    const nonVegetarianToppings = Array.from(document.querySelectorAll('input[name="nonVegetarianToppings"]:checked')).map(topping => topping.value);
    const specialToppings = Array.from(document.querySelectorAll('input[name="specialToppings"]:checked')).map(topping => topping.value);
    const slices = document.getElementById('slices').value;
    const cheese = document.getElementById('cheese').value;
    const orderType = document.getElementById('orderType').value;
    const deliveryTime = document.getElementById('deliveryTime').value;
    const deliveryLocation = document.getElementById('deliveryLocation').value;
    const specialInstructions = document.getElementById('specialInstructions').value;

    // Capture customer details
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;

    // Create Pizza object
    const pizza = new Pizza(size, crust, sauce, vegetarianToppings, nonVegetarianToppings, specialToppings, slices, cheese, orderType, deliveryTime, deliveryLocation, specialInstructions, customerName, customerPhone);

    // Display pizza description
    const orderConfirmation = document.getElementById('orderConfirmation');
    orderConfirmation.innerHTML = `
    <p> student id : 1235300 [Pralav Adhikari]</p>
    <h2>Order Confirmation</h2>
    <p>Your order has been placed. Thank you for ordering!</p>
    <p>This is your order and your pizza:</p>
    <pre>${pizza.getDescription()}</pre>
    `;

    // Create and append the image
    const image = new Image();
    image.src = 'images/pizza_PNG43985.png'; // Replace with the correct path to your image
    image.width = 500;
    image.height = 400;
    orderConfirmation.appendChild(image);

    orderConfirmation.style.display = 'block'; // Show order confirmation
}

// Event listener for form submission
document.getElementById('pizzaForm').addEventListener('submit', submitOrder);


