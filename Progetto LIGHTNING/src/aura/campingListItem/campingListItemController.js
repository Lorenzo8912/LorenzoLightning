({
    packItem : function(component, event, helper) {
        var checkbox = component.get("v.item");
        checkbox.Packed__c= true;
        component.set("v.pulsante",checkbox);
        component.set("v.pulsante.disabled",true);
    }
})