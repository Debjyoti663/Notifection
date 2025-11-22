<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<style>
#popupModal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  animation: fadeIn 0.3s ease-in;
}
#popupContent {
  background: linear-gradient(135deg, #ff9a9e, #fecfef, #fecfef, #ff9a9e);
  margin: 15% auto;
  padding: 20px;
  border: none;
  border-radius: 20px;
  width: 80%;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  font-family: Arial, sans-serif;
  color: #333;
  animation: bounceIn 0.5s ease-out;
}
#closePopup {
  color: #ff4757;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  margin-top: -10px;
}
#closePopup:hover {
  color: #ff6b7a;
}
.popupMessage {
  font-size: 18px;
  margin-bottom: 15px;
  color: #2f3542;
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes bounceIn {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}
@media (max-width: 600px) {
  #popupContent { width: 90%; margin: 20% auto; }
}
</style>

<div id="popupModal">
  <div id="popupContent">
    <span id="closePopup"><i class="fas fa-times"></i></span>
    <div class="popupMessage">স্বাগতম আমার ব্লগে! এখানে দারুণ কনটেন্ট অপেক্ষা করছে। 😊</div>
    <button onclick="openWhatsAppAndClose()" style="background: #25D366; color: white; border: none; padding: 10px 20px; border-radius: 10px; cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center; gap: 5px; margin-top: 10px;">
      <i class="fab fa-whatsapp"></i> WhatsApp-এ যোগাযোগ করুন
    </button>
  </div>
</div>

<script>
window.addEventListener('load', function() {
  var lastShown = localStorage.getItem('popupLastShown');
  var now = Date.now();
  var twentyFourHours = 24 * 60 * 60 * 1000;
  
  if (!lastShown || (now - parseInt(lastShown) > twentyFourHours)) {
    setTimeout(function() {
      document.getElementById('popupModal').style.display = 'block';
    }, 5000);
    localStorage.setItem('popupLastShown', now);
  }
});

function closePopup() {
  document.getElementById('popupModal').style.display = 'none';
}

function openWhatsAppAndClose() {
  var phoneNumber = '91xxxxxxxxxx';  // আপনার ফোন নম্বর এখানে দিন (কান্ট্রি কোড সহ, যেমন 91 for India)
  var message = 'হ্যালো! আপনার ব্লগ থেকে যোগাযোগ করছি।';
  var whatsappUrl = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);
  window.open(whatsappUrl, '_blank');
  closePopup();
}

document.getElementById('closePopup').onclick = closePopup;
window.onclick = function(event) {
  if (event.target == document.getElementById('popupModal')) {
    closePopup();
  }
};
</script>
