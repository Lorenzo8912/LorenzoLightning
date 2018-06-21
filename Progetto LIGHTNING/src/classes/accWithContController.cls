public class accWithContController {
 
    Id currentRecord = apexpages.currentpage().getparameters().get('id');

 @AuraEnabled
 public static list <Account> fetchAccount() {

    
    // query 10 records from account with their relevant contacts and return query.
    List <Account> lstOfAcc = [select Name, AnnualRevenue, BillingState, (select LastName from contacts) from Account LIMIT 5];
    return lstOfAcc;
 }

 @AuraEnabled
 public static list<Contact> getFactorFromLeadOrContact(){
    Id recordPagina= apexpages.currentpage().getparameters().get('id');
    List<Contact> factorList = [Select PredictiveFactor__c from Contact where Id=:recordPagina];

    return factorList;
 }
}