const coffeeURL = 'https://troubled-peaceful-hell.glitch.me/orders'
const getOrderByEmailButton = document.getElementById("getOrderByEmailButton")
const deleteOrderButton = document.getElementById("deleteOrderButton")
const getAllOrdersButton = document.getElementById("getAllOrdersButton")
const addOrderButton = document.getElementById("addOrderButton")
const addEmailTextBox = document.getElementById("addEmailTextBox")
const typeTextBox = document.getElementById("typeTextBox")
const sizeTextBox = document.getElementById("sizeTextBox")
const priceTextBox = document.getElementById("priceTextBox")

// View All Coffee Orders
getAllOrdersButton.addEventListener('click', function () {
    viewAllOrders()
})

function viewAllOrders() {
    let requestAllOrders = new XMLHttpRequest()
    requestAllOrders.addEventListener('load', function () {
        let coffeeOrders = JSON.parse(this.responseText)
        coffeeOrdersItems = coffeeOrders.map((order) => {
            return `<li>
                        <div>${order.email}</div>
                        <div>${order.type}</div>
                        <div>${order.size}</div>
                        <div>$${order.price}</div>
                    </li>
            `
        })
        coffeeOrdersUL.innerHTML = coffeeOrdersItems.join("")
    })
    console.log()
    requestAllOrders.open('GET', coffeeURL)
    requestAllOrders.send()
}

// View Coffee Orders By Email
getOrderByEmailButton.addEventListener('click', function () {
    viewByEmail(emailTextBox.value)
})

function viewByEmail(email) {
    let requestOrderByEmail = new XMLHttpRequest()
    requestOrderByEmail.addEventListener('load', function () {
        let order = JSON.parse(this.responseText)
        let coffeeOrdersItems =
            `<li>
                        <div>${order.email}</div>
                        <div>${order.type}</div>
                        <div>${order.size}</div>
                        <div>$${order.price}</div>
                    </li>
            `
        coffeeOrdersUL.innerHTML = coffeeOrdersItems
    })

    requestOrderByEmail.open('GET', `https://troubled-peaceful-hell.glitch.me/orders/${email}`)
    requestOrderByEmail.send()
}

deleteOrderButton.addEventListener('click', function () {
    deleteByEmail(emailTextBox.value)
})

function deleteByEmail(email) {
    let requestDeleteOrder = new XMLHttpRequest()
    requestDeleteOrder.open('DELETE', `https://troubled-peaceful-hell.glitch.me/orders/${email}`)
    requestDeleteOrder.send()

}

// Add Coffee Order
addOrderButton.addEventListener('click', function () {
    event.preventDefault()
    const email = addEmailTextBox.value
    const type = typeTextBox.value
    const size = sizeTextBox.value
    const price = priceTextBox.value

    const requestParams = {
        email: email,
        type: type,
        size: size,
        price: parseInt(price)
    }

    let requestNewOrder = new XMLHttpRequest()
    requestNewOrder.addEventListener('load', function () {
        console.log(this.responseText)
    })

    requestNewOrder.open('POST', coffeeURL)
    requestNewOrder.setRequestHeader('Content-Type', 'application/json')
    requestNewOrder.send(JSON.stringify(requestParams))
})