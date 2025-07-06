document.addEventListener('DOMContentLoaded', function () {
    var newsletterBtn = document.getElementById('newsletter');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function () {
            alert('Newsletter sign-up coming soon!');
        });
    }
});
