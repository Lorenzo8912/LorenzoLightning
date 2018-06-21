({
    doInit: function(component, event, helper) {
     //call apex class method
     var action = component.get('c.getFactorFromContact');
     action.setCallback(this, function(response) {
      //store state of response
      var state = response.getState();
      if (state === "SUCCESS") {
       //set response value in ListOfAccount attribute on component.
       component.set('v.PredFact', response.getReturnValue());
      }
     });
     $A.enqueueAction(action);
    },
   })