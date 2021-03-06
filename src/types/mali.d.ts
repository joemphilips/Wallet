/** Declaration file generated by dts-gen */

declare module 'mali' {
  export default class Mali {
    constructor(...args: any[]);

    addService(...args: any[]): void;

    callback(...args: any[]): void;

    close(...args: any[]): void;

    inspect(...args: any[]): void;

    onerror(...args: any[]): void;

    start(...args: any[]): void;

    toJSON(...args: any[]): void;

    use(...args: any[]): void;

    static defaultMaxListeners: number;

    static init(): void;

    static listenerCount(emitter: any, type: any): any;

    static usingDomains: boolean;
  }

  export interface Request {
    call: any;
    req: any;
    metadata: any;
    type: string;
    getMetadata: any;
    get: any;
  }

  export interface Response {
    call: any;
    type: string;
    metadata: any;
    status: any;
    res: any;
    set: (field: string, val: string) => void;
    get: (field: string) => void;
    getMetaData: () => any;
    sendMetaData: (arg: any) => void;
    getStatus: (field: string) => any;
    setStatus: (field: string, val: void) => void;
    getStatusMetadata: () => void;
  }

  export interface Context {
    name: string;
    fullName: string;
    service: string;
    package: string;
    // TODO: do not use any
    app: any;
    call: any;
    request: Request;
    response: Response;
    req: any;
    type: string;
    metadata: string;
    get: () => any;
    res: any;
    set: (arg: any) => void;
    sendMetadata: () => void;
    getStatus: () => any;
    setStatus: (arg: any) => void;
  }
}
