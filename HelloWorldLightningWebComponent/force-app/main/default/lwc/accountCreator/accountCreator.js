import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';

export default class AccountCreator extends LightningElement {

    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME_FIELD, TYPE_FIELD];

    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Account Created!",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}