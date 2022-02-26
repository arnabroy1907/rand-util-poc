type Log = {
    info: Function,
    warn: Function,
    error: Function
}

const logDisplayer = (level: string, message: string, { ...args }: any) => {
    const timestamp = new Date().getTime();
    const logObject = {
        message: message,
        level: level.toUpperCase(),
        timestamp: timestamp,
        metadata: args? { ...args } : undefined
    }
    console.log(`${JSON.stringify(logObject)}`);
}

const log: Log = {

    /**
     * Logger function INFO level
     * @param message 
     * @param args 
     */
    info: (message: string, { ...args }: any) => {
        logDisplayer('info', message, { ...args });
    },

    /**
     * Logger function WARNING level
     * @param message 
     * @param args 
     */
    warn: (message: string, { ...args }: any) => {
        logDisplayer('warn', message, { ...args });
    },

    /**
     * Logger function ERROR level
     * @param message 
     * @param args 
     */
    error: (message: string, { ...args }: any) => {
        logDisplayer('error', message, { ...args });
    }
}

export default log;