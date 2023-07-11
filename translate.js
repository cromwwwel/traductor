let isSpanish = true;

function traducir() {
    const spanish = document.getElementById('h2_spanish');
    const eng = document.getElementById('h2_English');
    if (isSpanish) {
        isSpanish = false;
        spanish.style.display = 'none';
        eng.style.display = 'block';
    } else {
        isSpanish = true;
        spanish.style.display = 'block';
        eng.style.display = 'none';
    }


}