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

    var orbs = [];
    var rows = 3;
    var cols = 3;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            orbs.push({
                x: (j + 0.5) / cols,
                y: (i + 0.5) / rows,
                base: 30 + Math.random() * 20,
                t: Math.random() * Math.PI * 2
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        orbs.forEach(function(o) {
            o.t += 0.02;
            var radius = o.base + 10 * Math.sin(o.t);
            var x = o.x * canvas.width;
            var y = o.y * canvas.height;
            var grad = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
            grad.addColorStop(0, 'rgba(111,224,255,0.8)');
            grad.addColorStop(1, 'rgba(111,224,255,0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(draw);
    }
    draw();
}
