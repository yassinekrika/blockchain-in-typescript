export class Transaction {
  constructor(
    public amount: number,
    public from: string,
    public to: string
  ) { }

  toString() {
    return JSON.stringify(this)
  }
}
