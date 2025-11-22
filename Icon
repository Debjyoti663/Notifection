<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notification Bell with Popup for Blogger</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        .bell-container {
            position: relative;
            cursor: pointer;
            font-size: 40px;
            color: #333;
            display: inline-block;
            animation: ring 1s ease-in-out infinite alternate; /* Optional: বেল অ্যানিমেশন নতুন নোটিফিকেশনের জন্য */
        }

        .bell {
            display: block;
        }

        .red-dot {
            position: absolute;
            top: -5px;
            right: -10px;
            width: 12px;
            height: 12px;
            background-color: #ff0000;
            border-radius: 50%;
            border: 2px solid #fff;
            box-shadow: 0 0 3px rgba(255,0,0,0.5);
        }

        .popup {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.4);
            animation: fadeIn 0.3s;
        }

        .popup-content {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 15% auto;
            padding: 20px;
            border-radius: 10px;
            width: 80%;
            max-width: 400px;
            text-align: center;
            color: white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            animation: slideIn 0.3s ease-out;
        }

        .close {
            color: white;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }

        .close:hover {
            color: #ccc;
        }

        .icon {
            font-size: 50px;
            margin-bottom: 10px;
        }

        h2 {
            margin: 10px 0;
            color: #fff;
        }

        p {
            margin: 10px 0;
            line-height: 1.4;
        }

        @keyframes fadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
        }

        @keyframes slideIn {
            from {transform: translateY(-50px); opacity: 0;}
            to {transform: translateY(0); opacity: 1;}
        }

        @keyframes ring {
            from { transform: rotate(-5deg); }
            to { transform: rotate(5deg); }
        }
    </style>
</head>
<body>
    <div class="bell-container" onclick="showPopup()">
        <span class="bell">🔔</span>
        <span class="red-dot"></span>
    </div>
    
    <div id="popup" class="popup">
        <div class="popup-content">
            <span class="close" onclick="hidePopup()">&times;</span>
            <div class="icon">🎉</div>
            <h2>সফলতা!</h2>
            <p>আপনার কাজ সম্পন্ন হয়েছে। এটি একটি কালারফুল নোটিফিকেশন।</p>
        </div>
    </div>

    <script>
        function showPopup() {
            document.getElementById('popup').style.display = 'block';
            // Optional: ক্লিক করলে লাল ডট লুকিয়ে ফেলুন (unread মার্কার রিমুভ)
            document.querySelector('.red-dot').style.display = 'none';
        }
        function hidePopup() {
            document.getElementById('popup').style.display = 'none';
        }
    </script>
</body>
</html>
