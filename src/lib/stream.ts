import { Readable, Writable } from 'stream';

// stream for encrypting/decrypting WalletService data
export class EncryptStream extends Writable {}

export class DecryptStream extends Readable {}
