import * as crypto from 'crypto'
import { Wallet } from './components/wallet'

function main() {
  const yassine = new Wallet()
  const bob = new Wallet()
  const alice = new Wallet()

  console.log('blockchain runing...')

  yassine.sendMoney(50, bob.publicKey)
  bob.sendMoney(23, alice.publicKey)
  alice.sendMoney(5, bob.publicKey)
}

main()