// script.js
function copyToClipboard(elementId) {
    const inputElement = document.getElementById(elementId);
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert(`${inputElement.value}가 복사되었습니다!`);
  }
  