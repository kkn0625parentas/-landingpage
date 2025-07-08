// ----- Header
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.remove('bg-transparent');
    header.classList.add('bg-emerald-950', 'shadow-md', 'shadow-gray-800');
  } else {
    header.classList.remove('bg-emerald-950', 'shadow-md', 'shadow-gray-800');
    header.classList.add('bg-transparent');
  }
});

// ----- Scroll navbar di header smooth
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let current = 'beranda'; // default jika tidak ada section yang terdeteksi
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('border-b-2', 'border-gray-50', 'text-gray-400');
    link.classList.add('hover:border-gray-400', 'hover:text-gray-400');

    if (link.getAttribute('href').includes(current)) {
      link.classList.add('border-b-2', 'border-gray-50');
      link.classList.remove('hover:border-gray-400', 'hover:text-gray-400');
    }
  });
}

window.addEventListener('scroll', setActiveLink);
window.addEventListener('DOMContentLoaded', setActiveLink); // set default saat halaman dimuat

document.querySelectorAll('a.nav-link').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

// Modal
// const card = document.getElementById('cardAnggota');
// const modal = document.getElementById('modalDetailAnggota');
// const modalContent = document.getElementById('modalContent');
// const btnClose = document.getElementById('btnCloseModal');

// card.addEventListener('click', () => {
//   modal.classList.remove('hidden');
//   // Trigger animation in
//   setTimeout(() => {
//     modalContent.classList.remove('opacity-0', 'scale-95');
//     modalContent.classList.add('opacity-100', 'scale-100');
//   }, 10);
// });

// btnClose.addEventListener('click', () => {
//   // Trigger animation out
//   modalContent.classList.remove('opacity-100', 'scale-100');
//   modalContent.classList.add('opacity-0', 'scale-95');

//   setTimeout(() => {
//     modal.classList.add('hidden');
//   }, 300); // match duration-300
// });
