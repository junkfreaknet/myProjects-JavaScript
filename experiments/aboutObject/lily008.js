
//Employee
function Employee(){

    this.name='';
    this.dept='general';

}

//Manager
function Manager(){

    Employee.call(this);
    this.reports=[];

}

Manager.prototype=Object.create(Employee.prototype);
Manager.prototype.constructor=Manager;

//WorkBee
function WorkerBee(){
    
    Employee.call(this);
    this.projects=[];

}

WorkerBee.prototype=Object.create(WorkerBee.prototype);
WorkerBee.prototype.constructor=WorkerBee;

//SalesPerson
function SalesPerson(){

    WorkerBee.call(this);
    this.dept='sales';
    this.quota=100;

}

SalesPerson.prototype=Object.create(SalesPerson.prototype);
SalesPerson.prototype.constructor=SalesPerson;

//Engineer
function Engineer(){

    WorkerBee.call(this);
    this.dept='engineer';
    this.machine='';

}

Engineer.prototype=Object.create(Engineer.prototype);
Engineer.prototype.constructor=Engineer;
