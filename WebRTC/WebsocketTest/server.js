import { WebSocketServer } from 'ws';
let port = 8081;
let user = 0;

// 创建一个连接
const wss = new WebSocketServer({ port: 8081 });

wss.on('connection', function connection(ws, req) {
  console.log("创建一个新的连接");
  user++;
  conn.nickname = "user" + user;
  conn.fd = "user" + user;
  let mes = {};
  mes.type = "enter";
  mes.data = conn.nickname + "进入聊天室";
  broadcast(JSON.stringify(mes))

  // 向客户端推送消息
  ws.on("message", function (str) {
    console.log("回复" + str);
    mes.type = "message";
    mes.data = conn.nickname + "进来了";
    broadcast(JSON.stringify(mes));
  })

  // 监听关闭连接操作
  conn.on("close", function () {
    console.log("关闭连接");
    mes.type = "leave";
    mes.data = conn.nickname + "离开了"
    broadcast(JSON.stringify(mes))
  })

  // 错误处理
  ws.on("error", function (err) {
    console.log("监听到错误");
    console.log(err);
  })
})

let server = ws.createServer(function (conn) {
  

}).listen(port)

function broadcast(str) {
  wss.clients.forEach(client => {
    connnection.sendText(str);
  });
}
