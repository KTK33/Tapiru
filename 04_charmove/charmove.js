/**
 * Socket.ioを使用したキャラ移動
 * https://socket.io/get-started/chat/
 */

//--------------------------------------
// モジュール読み込み
//--------------------------------------
const port = 3000;
const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

//--------------------------------------
// Webサーバ
//--------------------------------------
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/charmove.html');
});
app.get('/image/:file', (req, res)=>{
  res.sendFile(__dirname + '/image/' + req.params.file);
});
http.listen(port, ()=>{
  console.log(`listening on *:${port}`);
});

//--------------------------------------
// Socket.io
//--------------------------------------
io.on('connection', (socket)=>{
  // ユーザー接続時のメッセージ
  console.log(`ユーザー「${socket.id}」が接続しました`);

  socket.on('movechar', (data)=>{
    // ToDo: イベント処理を記述
    // すべてのクライアントにデータ送信
    io.emit('movechar',data);
  });

  // 切断
  socket.on('disconnect', ()=>{
    console.log(`ユーザー「${socket.id}」が切断しました`);
  });
});
