// notification_gadget_bottomleft.js (সংশোধিত: সব দেখানোর জন্য ডিবাগ যোগ)
// আপনার হোস্টিং-এ /js/ ফোল্ডারে আপলোড করুন
(function() {
    'use strict';
    
    // আপনার সার্ভার URL সেট করুন
    const serverUrl = 'https://ptc.indianehub.store/get_notifications.php'; // এটি চেঞ্জ করুন যদি দরকার
    
    let notifications = [];
    let currentIndex = 0;
    
    // CSS ইনজেক্ট করুন (পজিশন: bottom-left, কালারফুল)
    const style = document.createElement('style');
    style.textContent = `
        .notification-popup {
            position: fixed; 
            bottom: 20px; 
            left: 20px; 
            width: 250px;
            background: linear-gradient(135deg, #2CA2AB 10%, #E30513 50%, #096CED 100%);
            color: white; 
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3); 
            z-index: 9999; 
            padding: 10px;
            animation: slideIn 0.4s ease;
            font-family: Arial, sans-serif;
        }
        @keyframes slideIn { 
            from { transform: translateX(-100%); opacity: 0; } 
            to { transform: translateX(0); opacity: 1; } 
        }
        .notification-content { text-align: center; }
        .notification-title { 
            display: block; 
            font-weight: bold; 
            margin-bottom: 4px; 
            font-size: 14px;
            color: #ffd700;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        .notification-message { 
            display: block; 
            margin-bottom: 4px; 
            font-size: 14px;
            color: #ffffff;
            line-height: 1.3;
        }
        .notification-amount { 
            display: block; 
            font-size: 13px;
            color: #05E3DF;
            font-weight: bold;
            margin-bottom: 8px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        }
        .notification-close { 
            position: absolute; 
            top: 4px; 
            right: 8px; 
            background: none; 
            border: none; 
            color: #ffffff;
            font-size: 18px; 
            cursor: pointer; 
            opacity: 0.9; 
            border-radius: 50%;
            padding: 2px;
            transition: background 0.2s, opacity 0.2s;
        }
        .notification-close:hover { 
            opacity: 1; 
            background: rgba(255, 107, 107, 0.2);
        }
    `;
    document.head.appendChild(style);
    
    // HTML স্ট্রাকচার ইনজেক্ট করুন
    const popupDiv = document.createElement('div');
    popupDiv.className = 'notification-popup';
    popupDiv.id = 'notificationPopup';
    popupDiv.style.display = 'none';
    popupDiv.innerHTML = `
        <div class="notification-content">
            <span class="notification-title" id="notificationTitle"></span>
            <span class="notification-message" id="notificationMessage"></span>
            <span class="notification-amount" id="notificationAmount"></span>
            <button class="notification-close" onclick="window.closePopup()">&times;</button>
        </div>
    `;
    document.body.appendChild(popupDiv);
    
    // ফাংশন ডিফাইন করুন
    window.closePopup = function() {
        document.getElementById('notificationPopup').style.display = 'none';
    };
    
    function fetchNotifications() {
        fetch(serverUrl)
            .then(response => response.json())
            .then(data => {
                console.log('ফেচ করা সব নোটিফিকেশন:', data); // ডিবাগ: কনসোলে সব দেখাবে (F12 > Console)
                if (data.length > 0) {
                    notifications = data; // সব ডাটা সেট
                    currentIndex = 0;
                    showNextNotification(); // প্রথম থেকে সব সিকোয়েন্স দেখাবে
                } else {
                    console.log('কোনো নোটিফিকেশন নেই – অ্যাডমিনে active সেট করুন');
                }
            })
            .catch(error => console.log('ফেচ এরর:', error));
    }
    
    function showNextNotification() {
        if (currentIndex < notifications.length) { // সব দেখানোর জন্য চেক
            const notif = notifications[currentIndex];
            document.getElementById('notificationTitle').textContent = notif.title || 'নতুন নোটিফিকেশন';
            document.getElementById('notificationMessage').textContent = notif.message;
            document.getElementById('notificationAmount').textContent = notif.amount ? 'অ্যামাউন্ট: ₹' + notif.amount : '';
            document.getElementById('notificationPopup').style.display = 'block';
            
            currentIndex++;
            setTimeout(() => {
                window.closePopup();
                if (currentIndex < notifications.length) {
                    setTimeout(showNextNotification, 5000); // পরবর্তী দেখানোর জন্য ২ সেকেন্ড ওয়েট
                }
            }, 10000); // প্রত্যেক ১০ সেকেন্ড দেখাবে
        } else {
            console.log('সব নোটিফিকেশন দেখানো শেষ – পরবর্তী ফেচে আপডেট হবে');
        }
    }
    
    // ইনিশিয়ালাইজ
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fetchNotifications);
    } else {
        fetchNotifications();
    }
    setInterval(fetchNotifications, 20000); // প্রতি ১০ সেকেন্ডে রিফ্রেশ (নতুন যোগ হলে সব আপডেট)
})();
