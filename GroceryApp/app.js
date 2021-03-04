const nameTextBox = document.getElementById("nameTextBox")
const addressTextBox = document.getElementById("addressTextBox")
const submitButton = document.getElementById("submitButton")
const storeContainer = document.getElementById("storeContainer")

submitButton.addEventListener('click', function() {
    const storeName = nameTextBox.value
    const storeAddress = addressTextBox.value

    db.collection("stores")
    .add({
        name: storeName,
        address: storeAddress,
        items: [
            //itemsArray
        ]
    }).then(function(docRef) {
        getAllStores()
    })
    nameTextBox.value = ""
    addressTextBox.value = ""
})

function deleteStore(documentId) {
    db.collection("stores")
        .doc(documentId)
        .delete()
        .then(() => {
            getAllStores()  
        })
}

function getAllStores() {
    storeContainer.innerHTML = ""

    db.collection("stores")
        .get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let data = doc.data()
                let storeItem = `<div
                                    <label><b>${data.name}</b></label>
                                    <li><i>${data.address}</i></li>
                                    <input type="text" id="'${data.name}'ItemsTextBox" placeholder="Item"/>
                                    <button onclick="'${data.items}'.push('${data.name}'ItemsTextBox.value)">Add Item</button>
                                    <div>
                                        <li>${data.items}</li>
                                    </div>
                                    <button onclick="deleteStore('${doc.id}')">Delete</button>
                                </div>`
                storeContainer.insertAdjacentHTML('beforeend', storeItem)
            })
        })
}

getAllStores()
