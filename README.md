# Seed_To_Address Generating Bitcoin Address ,Public and  Private Key


1.)Take the string user entered to generate a private key.The generated private key is a number.
Private Key = SHA256("Blockchain is awesome")
Private Key New  = Base58Encode(Version No + Private Key + Compression Flag + Checksum)

2.)Now apply elliptic curve multiplication(ECDSA) on the private key,  to generate a public key.
Public Key = Private Key * Constant Point

3.)Lastly,use one-way cryptographic hash functionto generate a bitcoin address
Bitcoin address  = Base58Encode(RIPEMD160(SHA256(Public key)))


![alt text]https://imgur.com/a/pHNco


