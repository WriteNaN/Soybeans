import { Connection, PublicKey } from "@solana/web3.js";

export default async function getAccountInfo(publicKey: PublicKey, connection: Connection) {
    const account = await connection.getAccountInfo(publicKey);
}