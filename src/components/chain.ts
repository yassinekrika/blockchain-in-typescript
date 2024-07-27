import { Block } from "./block"
import { Transaction } from "./transaction"
import * as crypto from 'crypto'

export class Chain {
  public static instance = new Chain()
  chain: Block[]

  constructor() {
    this.chain = [new Block('', new Transaction(100, 'genesis', 'yassine'))]
  }

  get lastBlock() {
    return this.chain[this.chain.length - 1]
  }

  mine(nonce: number) {
    let solution = 1
    console.log('mining...')

    while (true) {
      const hash = crypto.createHash('MD5')
      hash.update((nonce + solution).toString()).end()

      const attempt = hash.digest('hex')

      if (attempt.substr(0, 4) === '0000') {
        console.log(`Solved: ${solution}`)
        return solution
      }

      solution += 1
    }
  }

  addBlock(transaction: Transaction, senderPublicKey: string, signature: Buffer) {
    const verifier = crypto.createVerify('SHA256')
    verifier.update(transaction.toString())

    const isValid = verifier.verify(senderPublicKey, signature)

    if (isValid) {
      const newBlock = new Block(this.lastBlock.hash, transaction)
      this.mine(newBlock.nonce)
      this.chain.push(newBlock)
    }
  }
}
