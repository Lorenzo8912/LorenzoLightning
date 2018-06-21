({
    doInit: function(component, event, helper) {
		
        var service = new accServ(component);    
        service.findAll($A.getCallback(function(error, data) {
            // TODO: Implement error handling
            component.set("v.accounts", data);                           
        }));
        
    }
})