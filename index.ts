const sid = 'AC0558686bd46e8d068a657696b23cb8ee'

const auth_token = '7ea64dc01371ae6d9a3c1cc444d5a58b'

const twilio = require('twilio')(sid, auth_token)

twilio.messages.create({
    from: '+19258862605',
    to: '+5554996928800',
    body: 'Fala cupinxa!'
})
.then(message => console.log(message.sid))
.catch(err => console.log(err))