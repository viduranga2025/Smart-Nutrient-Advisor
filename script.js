function calculateFertilizer() {
    const crop = document.getElementById('cropType').value;
    const landSize = parseFloat(document.getElementById('landSize').value);
    const resultBox = document.getElementById('resultBox');

    if (isNaN(landSize) || landSize <= 0) {
        alert("Acres ගණන නිවැරදිව ඇතුළත් කරන්න macho!");
        return;
    }

    // NPK rates per acre (සමාන්‍ය අගයන් - උදාහරණයක් ලෙස)
    const rates = {
        paddy: { n: 50, p: 20, k: 30 },
        maize: { n: 60, p: 25, k: 25 },
        vegetables: { n: 40, p: 30, k: 40 },
        tea: { n: 80, p: 15, k: 30 }
    };

    const selectedRate = rates[crop];
    
    const nitro = selectedRate.n * landSize;
    const phos = selectedRate.p * landSize;
    const potas = selectedRate.k * landSize;
    const total = nitro + phos + potas;

    document.getElementById('nitro').innerText = nitro;
    document.getElementById('phos').innerText = phos;
    document.getElementById('potas').innerText = potas;
    document.getElementById('totalWeight').innerText = `Total Fertilizer Needed: ${total}kg`;

    resultBox.classList.remove('hidden');
}