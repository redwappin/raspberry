const mqtt = require('mqtt');

const client = mqtt.connect("mqtt://10.69.0.117:1883");

let data ={
    animal:'Pokemon',
    name:'Delbecq',
    surname:'Adeline',
    type:'Eau'
}
client.on('connect', function(){
    console.log("Connection établie");
    client.publish('test',JSON.stringify(data) ,function(){
        console.log("Message envoyé");
    });
  });

  client.onerror = function(error) {
    console.log('WebSocket Error: ' + error.message);
  };