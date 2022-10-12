import {IStreamLogger} from "../../core/handlers/stream-logger.interface";
import {Log} from "./logger.decorator";

export class ConsoleLogger implements IStreamLogger {

    private static logger: ConsoleLogger;



    private constructor() {}


    public static getInstance(): ConsoleLogger {
        if (!ConsoleLogger.logger) {
            ConsoleLogger.logger = new ConsoleLogger();
        }
        return ConsoleLogger.logger;
    }

    end(): void {
        console.log(`Operation success`);
    }
    error(...args: any[]): void {
        console.log(...args)
    }

    log(...args: any[]): void {
        console.log(...args);
    }

}