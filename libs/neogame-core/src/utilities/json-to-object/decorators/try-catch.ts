export function tryCatch<T>(fn: () => T): T | Error {
    try {
        return fn();
    } catch (error) {
        return error as Error;
    }
}
