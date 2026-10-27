// 1. Toggle Dark / Light Mode
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Mode Terang';
    } else {
        themeToggleBtn.textContent = '🌙 Mode Gelap';
    }
});

// 2. Toggle Cara Kerja
const toggleCaraKerjaBtn = document.getElementById('toggleCaraKerjaBtn');
const caraKerjaContainer = document.getElementById('cara-kerja');

toggleCaraKerjaBtn.addEventListener('click', () => {
    caraKerjaContainer.classList.toggle('hidden');
    if (caraKerjaContainer.classList.contains('hidden')) {
        toggleCaraKerjaBtn.textContent = 'Lihat Cara Kerja (+)';
    } else {
        toggleCaraKerjaBtn.textContent = 'Tutup Cara Kerja (−)';
    }
});
// Navigasi Cara Kerja
const navCaraKerja = document.querySelector('nav a[href="#cara-kerja"]');
if (navCaraKerja) {
    navCaraKerja.addEventListener('click', () => {
        caraKerjaContainer.classList.remove('hidden');
        toggleCaraKerjaBtn.textContent = 'Tutup Cara Kerja (−)';
    });
}

// 3. Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const trackCards = document.querySelectorAll('.track-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Ubah tombol aktif
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selectedGenre = button.getAttribute('data-genre');

        trackCards.forEach(card => {
            const cardGenre = card.getAttribute('data-genre');
            if (selectedGenre === 'all' || selectedGenre === cardGenre) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// 4. Search Bar
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();

    trackCards.forEach(card => {
        const title = card.querySelector('.track-title').textContent.toLowerCase();
        const producer = card.querySelector('.track-producer').textContent.toLowerCase();

        if (title.includes(keyword) || producer.includes(keyword)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
});

// 5. Accordion FAQ
const accordionBtns = document.querySelectorAll('.accordion-btn');

accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
        const icon = btn.querySelector('span');
        icon.textContent = item.classList.contains('active') ? '−' : '+';
    });
});

// 6. Modal Form Sewa
const rentModal = document.getElementById('rentModal');
const selectedTrackName = document.getElementById('selectedTrackName');

function openRentModal(trackName) {
    selectedTrackName.textContent = "Track: " + trackName;
    rentModal.classList.remove('hidden');
}

function closeRentModal() {
    rentModal.classList.add('hidden');
}

function handleFormSubmit(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    alert(`Terima kasih ${nama}! Pesanan sewa kamu sedang diproses. Cek email untuk instruksi pembayaran.`);
    closeRentModal();
    document.getElementById('rentForm').reset();
}

