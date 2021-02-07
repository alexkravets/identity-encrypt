'use strict'

const eccrypto = require('eccrypto-js')

const encrypt = async (publicKeyHex, object) => {
  const objectJson    = JSON.stringify(object)
  const messageBuffer = eccrypto.utf8ToBuffer(objectJson)

  const publicKeyBuffer = Buffer.from(publicKeyHex, 'hex')
  const encryptedObject = await eccrypto.encrypt(publicKeyBuffer, messageBuffer)

  const encryptedMessageJson = JSON.stringify({
    iv:  encryptedObject.iv.toString('hex'),
    ct:  encryptedObject.ciphertext.toString('hex'),
    epk: encryptedObject.ephemPublicKey.toString('hex'),
    mac: encryptedObject.mac.toString('hex')
  })

  return encryptedMessageJson
}

module.exports = encrypt
