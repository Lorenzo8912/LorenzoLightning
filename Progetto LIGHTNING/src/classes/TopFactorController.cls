public with sharing class TopFactorController {
	@AuraEnabled
   public static List<Contact> getTopFactorContact() {
       
       List<Contact> contactList = [SELECT Id, AccountId, Account.Name,FirstName, LastName,MobilePhone, Phone,Email
       FROM Contact ORDER BY LastModifiedDate];
       
       return contactList;
   }
}