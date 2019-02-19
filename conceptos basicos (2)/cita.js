export default class Appointment {
    constructor(pacientName, pacientAge, date, hour, insuranceID, lastConsultation) {
        this._pacientName = pacientName.toUpperCase();
        this._pacientAge = pacientAge;
        this._date = date;
        this._hour = hour;
        this._insuranceID = insuranceID;
        this._lastConsultation = "----";
    }

    printf() {
        console.log(`${this._pacientName}, ${this._pacientAge}, ${this._date}, ${this._hour}, ${this._insuranceID}, ${this._lastConsultation}`);
    }

    // Gets
    
    get pacientName() {
        return this._pacientName;
    }

    get pacientAge() {
        return this._pacientAge;
    }

    get date() {
        return this._date;
    }

    get hour() {
        return this._hour;
    }

    get insuranceID() {
        return this._insuranceID;
    }

    // Sets

    set pacientName(pacientName) {
        this._pacientName = pacientName.toUpperCase();
    }

    set pacientAge(pacientAge) {
        this._pacientAge = pacientAge;
    }

    set date(date) {
        this._date = date;
    }

    set hour(hour) {
        this._hour = hour;
    }

    set insuranceID(insuranceID) {
        this._insuranceID = insuranceID;
    } 
}