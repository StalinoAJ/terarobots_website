/**
 * TeraRobots India - Main Interactive Script
 * Zero-dependency, memory-efficient vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sync Meta Domain Verification if configured in SITE_CONFIG
  if (window.SITE_CONFIG && window.SITE_CONFIG.META_VERIFICATION_KEY && window.SITE_CONFIG.META_VERIFICATION_KEY !== "YOUR_META_BUSINESS_VERIFICATION_KEY") {
    const metaTag = document.querySelector('meta[name="facebook-domain-verification"]');
    if (metaTag) {
      metaTag.setAttribute('content', window.SITE_CONFIG.META_VERIFICATION_KEY);
    }
  }

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Interactive Insights Tabs
  const insightTabs = document.querySelectorAll('.tab-item');
  const analyticsVal = document.getElementById('analyticsValue');
  const analyticsLabel = document.getElementById('analyticsLabel');
  const analyticsTrend = document.getElementById('analyticsTrend');
  const barPillars = document.querySelectorAll('.bar-pillar');

  const tabDatasets = {
    '01': {
      label: 'Industrial Tours & Lab Explorations',
      value: '2,291+',
      trend: '↑ 18.4% institutional visits',
      heights: ['40%', '60%', '55%', '80%', '95%', '70%', '45%']
    },
    '02': {
      label: '3D Prototyped Components & Hardware',
      value: '4,850+',
      trend: '↑ 32.1% precision rate',
      heights: ['35%', '50%', '42%', '75%', '90%', '65%', '40%']
    },
    '03': {
      label: 'STEM Field Trip Students Inspired',
      value: '156k+',
      trend: '↑ 26.5% community growth',
      heights: ['50%', '65%', '70%', '85%', '92%', '80%', '60%']
    }
  };

  insightTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      insightTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const tabId = tab.getAttribute('data-tab-id');
      const data = tabDatasets[tabId];

      if (data && analyticsVal && analyticsLabel && analyticsTrend) {
        analyticsVal.style.opacity = '0';
        setTimeout(() => {
          analyticsLabel.textContent = data.label;
          analyticsVal.textContent = data.value;
          analyticsTrend.textContent = data.trend;
          analyticsVal.style.opacity = '1';
        }, 150);

        barPillars.forEach((bar, idx) => {
          if (data.heights[idx]) {
            bar.style.height = data.heights[idx];
          }
        });
      }
    });
  });

  // 4. FAQ Accordion Interaction
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (header) {
      header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 5. Smooth Scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 6. Number Counter Animation on Scroll
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-counter-target'));
          const suffix = el.getAttribute('data-counter-suffix') || '';
          let count = 0;
          const duration = 1000;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const stepVal = target / totalSteps;

          const timer = setInterval(() => {
            count += stepVal;
            if (count >= target) {
              el.textContent = Math.round(target).toLocaleString() + suffix;
              clearInterval(timer);
            } else {
              el.textContent = Math.round(count).toLocaleString() + suffix;
            }
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
  }
});
