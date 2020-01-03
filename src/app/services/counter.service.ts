export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    increamentActiveToInactive () {
        this.activeToInactiveCounter++;
        console.log( 'Account Inactivated: ' + this.activeToInactiveCounter);
    }

    increamentInactiveToActive () {
        this.inactiveToActiveCounter++;
        console.log( 'Account Activated: ' + this.inactiveToActiveCounter);
    }
}