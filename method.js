if (Meteor.isServer) {
  const { foo } = require("/imports/foo.js")
  foo.bar()
} else {
  console.log('client')
}