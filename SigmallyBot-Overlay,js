    let title = document.createElement("h1");
    title.innerHTML = 'CzBot | By Cursed';
    title.style = 'z-index: 99995; position: absolute; left: 50%; top: 10%; transform: translateX(-50%); text-align: center; color: #fff;';
    document.body.appendChild(title);

    let Background = document.createElement("div");
    Background.innerHTML = `
<div id="Background__inner" style="height: 100%; width: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;">
    <span id="status" style="margin: 10px 0;">enabled</span>
    <div id="options" style="display: none;">
        <span style="color: #fff;">reload speed (ms):</span>
        <input type="number" id="ReloadSpeed" value="1000" style="margin: 10px 0;">
    </div>
    <button id="toggleBot" style="outline: none; background-color: #333; border-radius: 5px; border: none; color: #fff; padding: 10px 25px; font-size: 16px; margin: 5px 0;"></button>
</div>
`;
    Background.style = "z-index: 99992; position: absolute; left: 0%; top: 0%; height: 100vh; width: 100%; background-color: #222;";
    document.body.appendChild(Background);

    let status = document.getElementById("status");
    status.style = "font-size: 24px; color: #fff;";

    let options = document.getElementById("options");

    let toggleBot = document.getElementById("toggleBot");
    toggleBot.addEventListener("click", function() {
        let ISE = localStorage.getItem("scriptEnabled") === "true";

        if (ISE) {
            toggleBot.innerText = "Start";
            status.innerText = "status: disabled";
            options.style.display = "block";
            localStorage.setItem("scriptEnabled", false);
        } else {
            toggleBot.innerText = "Stop";
            status.innerText = "status: enabled";
            options.style.display = "none";
            localStorage.setItem("scriptEnabled", true);
            location.reload();
        }
    });

    if (localStorage.getItem("scriptEnabled") === "true") {
        toggleBot.innerText = "Stop";
        status.innerText = "status: enabled";
        options.style.display = "none";
        function Bot() {
            let ReloadSpeed = localStorage.getItem("ReloadSpeed") || 1000;
            setTimeout(() => {
                let play = document.getElementById("play-btn");
                play.click();
                setTimeout(() => {
                    location.reload();
                }, 200);
            }, ReloadSpeed);
        }
        Bot();
        document.getElementById("ReloadSpeed").addEventListener("change", function() {
            localStorage.setItem("ReloadSpeed", this.value);
        })
    } else {
        toggleBot.innerText = "Start";
        status.innerText = "status: disabled";
        options.style.display = "block";
    }
