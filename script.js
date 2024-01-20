// 接続ボタンにイベントリスナーを設定
document.querySelector('#connect-btn').addEventListener('click', function() {
  if (!navigator.bluetooth) {
    console.error('Web Bluetooth APIはこのブラウザでは利用できません。');
    return;
  }

  // デバイスの選択
  navigator.bluetooth.requestDevice({
    // 例えば、以下のようにオプションを指定できます。
    // filters: [{ services: ['battery_service'] }] // 特定のサービスを提供するデバイスに絞る
    acceptAllDevices: true // すべてのデバイスを表示（セキュリティリスクが伴うため注意）
  })
  .then(device => {
    console.log(`選択されたデバイス: ${device.name}`);
    // ここでデバイスへの接続処理を続けます。
    // return device.gatt.connect();
  })
  //.then(server => {
    // GATTサーバーに接続した後の処理
  //})
  .catch(error => {
    console.error(`デバイス選択時にエラーが発生しました: ${error}`);
  });
});
