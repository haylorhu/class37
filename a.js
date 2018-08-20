var APP_ID = '1u5wKsX8BJpvufKlHM0uXaGu-gzGzoHsz';
var APP_KEY = 'jRVKXcWt8i5Ig35Rj63fxMMY';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
  .then(function (messages) {
    let array = messages.map((item)=>item.attributes)
    array.forEach((item)=>{
      let li = document.createElement('li')
      li.innerText = item.content
      let messageList = document.querySelector('#messageList')
      messageList.appendChild(li)
    }

  )
})

let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit',function(e){

  e.preventDefault()
  let content = myForm.querySelector('input[name=content]').value
  var Message = AV.Object.extend('Message')
  var message = new Message()
  message.save({
    content: content
  }).then(function(object){
    alert('存入')
  })

  

})


// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// 