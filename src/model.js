export class ContactPerson {
    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = `${name}-${phone}-${Math.random().toFixed(2)}`;
    }
}