'use strict'

const eccrypto = require('eccrypto-js')

const decrypt = async (privateKeyHex, encryptedMessageJson) => {
  const _ = JSON.parse(encryptedMessageJson)

  const encryptedObject = {
    iv:             Buffer.from(_.iv, 'hex'),
    ciphertext:     Buffer.from(_.ct, 'hex'),
    ephemPublicKey: Buffer.from(_.epk, 'hex'),
    mac:            Buffer.from(_.mac, 'hex')
  }

  const privateKeyBuffer = Buffer.from(privateKeyHex, 'hex')
  const decryptedBuffer  = await eccrypto.decrypt(privateKeyBuffer, encryptedObject)

  const objectJson = decryptedBuffer.toString()
  const object = JSON.parse(objectJson)

  return object
}

module.exports = decrypt
