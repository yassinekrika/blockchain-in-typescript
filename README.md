# Blockchain Implementation in TypeScript

This project is a simple implementation of a blockchain and wallet system in TypeScript, using Node.js. It demonstrates basic concepts of blockchain such as blocks, transactions, and proof of work, as well as digital signatures for secure transactions.

## Features

- **Blockchain**: Contains blocks that store transactions.
- **Transactions**: Transfers of funds between wallets.
- **Wallets**: Generate public/private key pairs for secure transactions.
- **Proof of Work**: Simple mining mechanism to validate new blocks.

## Getting Started

### Prerequisites

Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yassinekrika/blockchain-in-typescript.git
   cd blockchain-in-typescript
   ````

2. **Install dependencies**

   ```bash
   npm install
   ```


### Running the Project
To compile and run the project
1. **Compile the TypeScript code**

   ```bash
   npx tsc
   ```

2. **Run the compiled JavaScript code**

   ```bash
   node dist/index.js
   ```

### Project Structure
```
/src
  |_index.ts
  |_/components
    |_transaction.ts
    |_block.ts
    |_chain.ts
    |_wallet.ts
```

### Hashing with SHA-256

SHA-256 is a cryptographic hash function that produces a 256-bit (32-byte) hash value. It is widely used in various security applications and protocols, including SSL/TLS and blockchain. Hash functions like SHA-256 are used to ensure data integrity by producing a unique hash for a given input, which changes significantly even with minor changes to the input.

To learn more about SHA-256, visit [this article on SHA-256](https://en.wikipedia.org/wiki/SHA-2).

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SHA-2.svg/1280px-SHA-2.svg.png">

### Cryptography with RSA

RSA (Rivest-Shamir-Adleman) is a widely used asymmetric cryptographic algorithm that relies on a pair of keys: a public key for encryption and a private key for decryption. RSA is commonly used for secure data transmission, digital signatures, and encryption of sensitive data.

To learn more about RSA cryptography, visit [this article on RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)).

<img src="https://www.twilio.com/content/dam/twilio-com/global/en/blog/legacy/2018/what-is-public-key-cryptography/19DfiKodi3T25Xz7g9EDTyvF9di2SzvJo6JebRJaCN-1P_c1fMqGtrAyZzxGGucG0bcmR8UwNes-gS.png">
