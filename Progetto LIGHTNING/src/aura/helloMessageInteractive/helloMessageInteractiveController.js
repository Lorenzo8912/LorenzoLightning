({
    handleClick : function(component, event, helper) {
        var btnClicked = event.getSource(); // questo è il bottone
        var btnMessage = btnClicked.get("v.label"); // questo è la label del bottone
        component.set("v.message",btnMessage); //modifica del messaggio
    },

    handleClick2: function(component,event,helper){
        var newMessage= event.getSource().get("v.label");
        console.log("handleClick2: Message: " + newMessage);
        component.set("v.message",newMessage);
    },

    handleClick3: function(component,event,helper){
        component.set("v.message",event.getSource().get("v.label"));
    }
})