# Assignment - Coffee Orders

You are the owner of a coffee shop and you want to manage the orders you receive from the customers.

Create an app which list all the coffee orders on a web page. You can also type in the email address in a textbox and search for a particular coffee order by email address. You should also be able to delete the coffee order. You should also be able to add a new coffee order. 

Coffee Order Web API Documentation

**Get all orders:**

https://troubled-peaceful-hell.glitch.me/orders

**Create new order:** 

`HTTP METHOD: POST`

https://troubled-peaceful-hell.glitch.me/orders

**Params**
```
email: String 
type: String
size: String (Small, Medium, Large)
price: Double 
```

**Get order by email:** 

https://troubled-peaceful-hell.glitch.me/orders/emailaddress

**Example:** 

https://troubled-peaceful-hell.glitch.me/orders/johndoe@gmail.com


**Delete order by email:** 

`HTTP METHOD: DELETE` 

https://troubled-peaceful-hell.glitch.me/orders/johndoe@gmail.com