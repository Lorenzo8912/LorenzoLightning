({
    handleShowRecord :function (component,event,helper){
    
  var showTheRecord= component.get("c.getTopFactorContact");
  
        showTheRecord.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
               var listaRitorno = response.getReturnValue();
               component.set("v.getTopFactorContact", listaRitorno);
      alert(JSON.stringify(component.get("v.getTopFactorContact")));
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
            else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
    }
})