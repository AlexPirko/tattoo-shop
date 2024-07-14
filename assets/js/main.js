const phoneNumbers = {
    viber: '+1 (23) 45678901',
    phone: '+1 (23) 87654321',
    telegram: '@mr.tattooin',
};

function showNumber(service, element) {
    const phoneNumberElement = document.getElementById('phone-number');
    phoneNumberElement.textContent = phoneNumbers[service];

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab) => tab.classList.remove('active'));

    element.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const defaultTab = document.querySelector('.tab');
    showNumber('phone', defaultTab);
});

document.querySelectorAll('.tab').forEach((tab) => {
    tab.addEventListener('click', function () {
        const service = this.textContent.toLowerCase();
        showNumber(service, this);
    });
});
