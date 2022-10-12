export function Log(error?: string) {
    return (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>): TypedPropertyDescriptor<(...args: any[]) => any> | void => {

        let currDate: string = new Date().toLocaleDateString();
        const oldValue = descriptor.value
        if (error) {
            console.log('------------------------------------------ERROR------------------------------------------');
            console.log(currDate);
            if (oldValue) oldValue();
            console.log('------------------------------------------ERROR------------------------------------------');
        }

        descriptor.value = () => {
            console.log('------------------------------------------||------------------------------------------');
            console.log(currDate);
            if (oldValue) oldValue();
            console.log('------------------------------------------||------------------------------------------');
        }
    }
}