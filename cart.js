
		var cart =[];

        var Item = function(name, price, count){
        	this.name = name
        	this.price = price
        	this.count = count
        };

        function displayCart(){
            var cartArray = listCart();
            var output = '';
            for(var i in cartArray){
                output += "<li>"+cartArray[i].name+" :"+cartArray[i].count+"</li>"
            }
            $("#show-cart").html(output);
            $("#total-cart").html(totalCart());
        }

        function addItemToCart(name, price, count){
            for(var i in cart){
                if(cart[i].name === name){
                    cart[i].count += count;
                    return count;
                } 
            }
            var item = new Item(name, price, count);
            cart.push(item);
            saveCart();
        	
        };

        /*addItemToCart("Dumplings",49,0);
        addItemToCart("ChowMein",79,0);
        addItemToCart("Manchow", 30,0);
        addItemToCart("Pizza", 99,0);
        addItemToCart("Pasta",79,0);
        addItemToCart("GarlicBread",50,0);
        addItemToCart("CholeBhature",60,0);
        addItemToCart("Dosa",30,0);
        addItemToCart("PaneerParatha",40,0);
        addItemToCart("IceCreamCupcakes",60,0);
        addItemToCart("RedVelvetCake",80,0);
        addItemToCart("GulabJamun",20,0);*/


        function removeItem(){
            for(var i in cart){
                if(cart[i].name === name){
                    cart[i].count --;
                    if(cart[i].count === 0){
                        cart.splice(i, 1);
                    }
                    break;
                }
            }
            saveCart();
        }

        function removeItemFromCartAll(name){
            for(var i in cart){
                if(cart[i].name === name){
                    cart.splice(i,1);
                    break;
                }
            }
            saveCart();
        }


        
        function countCart(){
            var totalCount = 0;
            for(var i in cart){
                totalCount += cart[i].count;
            }
            return totalCount;
        }

        function totalCart(){
            var totalCost=0;
            for(var i in cart){
                totalCost += cart[i].price;
            }
            return totalCost;
        }

        function listCart(){
            var cartCopy = [];
            for(var i in cart){
                var item = cart[i];
                var itemCopy = {};
                for(var p in item){
                    itemCopy[p] = item[p];               
                }
                cartCopy.push(itemCopy);
            }
            return cartCopy;
        }

        function saveCart(){
            localStorage.setItem("shoppingCart", JSON.stringify(cart));
        }

        function loadCart(){
            cart = JSON.parse(localStorage.getItem("shoppingCart"));
        }

        function placed(){
        	alert("Order placed! Will soon be delivered. Thankyou!")
        }

        //loadCart();
        displayCart();

        var array = listCart();
        console.log(array);
       
		


