({
    clickCreateItem : function(component, event, helper) {
        
        var validItem = true;
        
        //verifica settaggio nome
        var nameField = component.find("campItemName"); //creo una variabile che prende il nome dal component
        var campName = nameField.get("v.value"); //creo un'altra var che prende il valore 
        if ($A.util.isEmpty(campName)) //formula che serve a fare check validità
        {
            validItem = false;
            nameField.set("v.errors", [{message: "Camping Item name can't be blank."}]);
        }
        else
        {
            nameField.set("v.errors", null);
        }
        
        // controllo field quantità
        var quantityField = component.find("quantity");
        var quantityValue = quantityField.get("v.value");
        if ($A.util.isEmpty(quantityValue) || quantityValue == 0)
        {
            validItem = false;
            quantityField.set("v.errors", [{message : "Quantity cannot be 0 or blank."}]);
        }
        else
        {
            quantityField.set("v.errors", null);
        }
        
        // controllo field price
        var priceField = component.find("price");
        var priceValue = priceField.get("v.value");
        if ($A.util.isEmpty(priceValue) || priceValue == 0)
        {
            validItem = false;
            priceField.set("v.errors", [{message : "Price cannot be 0 or blank."}]);
        }
        else
        {
            priceField.set("v.errors", null);
        }
        
        if (validItem)
        {
            var newItemRef = component.get("v.newItem");
            console.log("Create Camping Item: " + JSON.stringify(newItemRef));
            
            var theItems = component.get("v.items");
 
            var newItem = JSON.parse(JSON.stringify(newItemRef));    
            theItems.push(newItem);
            component.set("v.items", theItems);
            
            component.set("v.newItem", 
                          {'sobjectType' : 'Camping_Item__c',
                           'Name' : '',
                           'Quantity__c' : 0,
                           'Price__c' : 0,
                           'Packed__c' : false});   
        }
        
    }
})