document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.remove('no-js');
    var overlay = document.getElementById('transition-overlay');
    var newsletterBtn = document.getElementById('newsletter');
    if (newsletterBtn) {
        newsletterBtn.addEventListener('click', function () {
            alert('Newsletter sign-up coming soon!');
        });
    }

    var prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduce) {
        initEnergy();
        initWaves();
        initOrb();
    }


    if (overlay) {
        setTimeout(function () {
            overlay.classList.remove('active');
            document.body.classList.add('loaded');
        }, 400);

        document.querySelectorAll('a[href]').forEach(function(link) {
            link.addEventListener('click', function (e) {
                var href = link.getAttribute('href');
                if (!href || href.startsWith('#') || link.id === 'newsletter') return;
                if (link.target === '_blank' || e.metaKey || e.ctrlKey) return;
                e.preventDefault();
                overlay.classList.add('active');
                setTimeout(function () {
                    window.location.href = href;
                }, 500);
            });
        });
    } else {
        document.body.classList.add('loaded');
    }
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

function initWaves() {
    var canvas = document.getElementById('wave-canvas');
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext('2d');
    var w, h;
    var waves = [];

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        waves = [
            { y: h * 0.3, amp: 20, speed: 0.6, off: Math.random() * Math.PI * 2 },
            { y: h * 0.5, amp: 25, speed: 0.4, off: Math.random() * Math.PI * 2 },
            { y: h * 0.7, amp: 30, speed: 0.5, off: Math.random() * Math.PI * 2 }
        ];
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = 'rgba(111,224,255,0.25)';
        ctx.lineWidth = 2;
        waves.forEach(function(wv) {
            wv.off += 0.01 * wv.speed;
            ctx.beginPath();
            for (var x = 0; x <= w; x++) {
                var y = wv.y + Math.sin(x * 0.01 + wv.off) * wv.amp;
                if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();
        });
        requestAnimationFrame(draw);
    }
    draw();
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
    var orbCount = 9;
    for (var i = 0; i < orbCount; i++) {
        orbs.push({
            x: Math.random(),
            y: Math.random(),
            base: 30 + Math.random() * 20,
            t: Math.random() * Math.PI * 2
        });
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
