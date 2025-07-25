
function scanBluetooth() {
  navigator.bluetooth.requestDevice({ acceptAllDevices: true })
    .then(device => alert('Connected to: ' + device.name))
    .catch(error => alert('Bluetooth error: ' + error));
}

function share() {
  if (navigator.share) {
    navigator.share({
      title: 'Dodo Speaker',
      text: 'Join my Dodo Speaker session!',
      url: window.location.href
    }).catch(err => console.error('Share failed:', err));
  } else {
    alert('Web Share API not supported.');
  }
}

function generateQRCode() {
  const qrContainer = document.getElementById('qr');
  qrContainer.innerHTML = '';
  QRCode.toCanvas(document.createElement('canvas'), window.location.href, function (error, canvas) {
    if (error) console.error(error);
    qrContainer.appendChild(canvas);
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}
