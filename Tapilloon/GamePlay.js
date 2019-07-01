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
  res.sendFile(__dirname + '/GamePlay.html');
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

//プレイヤー情報
let CHAR_LIST = {};
let ZINDEX = 1000;

io.on('connection', (socket)=>{
  // ユーザー接続時のメッセージ
  console.log(`ユーザー「${socket.id}」が接続しました`);

  socket.on("login", (data)=>{
    // 初期座標を決定
    const pos = {
      x: getInitPos(MAX_WIDTH),
      y: getInitPos(MAX_HEIGHT)
    };

  //マスターに追加
  CHAR_LIST[data.token]
})

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
