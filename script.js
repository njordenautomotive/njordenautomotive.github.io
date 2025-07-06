document.addEventListener('DOMContentLoaded', function () {
    var newsletterBtn = document.getElementById('newsletter');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function () {
            alert('Newsletter sign-up coming soon!');
        });
    }

    var prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduce) {
        initEnergy();
        initOrb();
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(function(el) {
        observer.observe(el);
    });
});

function initEnergy() {
    var canvas = document.getElementById('energy-canvas');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    var particles = [];
    for (var i = 0; i < 30; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speed: 0.2 + Math.random() * 0.5,
            size: 1 + Math.random() * 2
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(111,224,255,0.3)';
        particles.forEach(function(p) {
            p.x += p.speed;
            if (p.x > canvas.width + 20) p.x = -20;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(update);
    }
    update();
}

function initOrb() {
    var canvas = document.getElementById('orb-canvas');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    var t = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var radius = 40 + 10 * Math.sin(t);
        var x = canvas.width / 2;
        var y = canvas.height * 0.2;
        var grad = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
        grad.addColorStop(0, 'rgba(111,224,255,0.8)');
        grad.addColorStop(1, 'rgba(111,224,255,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        t += 0.02;
        requestAnimationFrame(draw);
    }
    draw();
}
