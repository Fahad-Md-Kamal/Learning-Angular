export class LoggingService {
    logStatusChange(status: string) {
        console.log('A Server changed, new status: ' + status)
    }    
}