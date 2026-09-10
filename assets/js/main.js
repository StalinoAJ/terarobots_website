/**
 * TeraRobots India - Main Interactive Script
 * Lightweight, zero-dependency, memory-efficient vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sync Meta Domain Verification if configured in SITE_CONFIG
  if (window.SITE_CONFIG && window.SITE_CONFIG.META_VERIFICATION_KEY && window.SITE_CONFIG.META_VERIFICATION_KEY !== "YOUR_META_BUSINESS_VERIFICATION_KEY") {
    let metaTag = document.querySelector('meta[name="facebook-domain-verification"]');
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

    // Close mobile menu on clicking any link
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Interactive Insights Tabs & Dynamic Chart Update
  const insightTabs = document.querySelectorAll('.tab-item');
  const analyticsVal = document.getElementById('analyticsValue');
  const analyticsLabel = document.getElementById('analyticsLabel');
  const analyticsTrend = document.getElementById('analyticsTrend');
  const barPillars = document.querySelectorAll('.bar-pillar');

  const tabDatasets = {
    '01': {
      label: 'Lab & Innovation Footprint',
      value: '156k+',
      trend: '↑ 24.8% new learners',
      heights: ['45%', '60%', '55%', '85%', '95%', '70%', '50%'],
      activeDayIdx: 4
    },
    '02': {
      label: 'Active Engagements & Implementations',
      value: '2,291+',
      trend: '↑ 18.4% vs last term',
      heights: ['35%', '50%', '42%', '75%', '90%', '65%', '40%'],
      activeDayIdx: 4
    },
    '03': {
      label: '3D Prototyped Components',
      value: '4,850+',
      trend: '↑ 32.1% precision rate',
      heights: ['50%', '65%', '70%', '80%', '92%', '85%', '60%'],
      activeDayIdx: 4
    }
  };

  insightTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      insightTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const tabId = tab.getAttribute('data-tab-id');
      const data = tabDatasets[tabId];

      if (data && analyticsVal && analyticsLabel && analyticsTrend) {
        // Animate value change
        analyticsVal.style.opacity = '0';
        setTimeout(() => {
          analyticsLabel.textContent = data.label;
          analyticsVal.textContent = data.value;
          analyticsTrend.textContent = data.trend;
          analyticsVal.style.opacity = '1';
        }, 150);

        // Update bar pillars
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
        // Close other items
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

  // 6. Number Counter Animation on Scroll (IntersectionObserver)
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute('data-counter-target'));
          const suffix = el.getAttribute('data-counter-suffix') || '';
          const decimals = target % 1 !== 0 ? 1 : 0;
          let count = 0;
          const duration = 1200;
          const stepTime = 20;
          const totalSteps = duration / stepTime;
          const stepVal = target / totalSteps;

          const timer = setInterval(() => {
            count += stepVal;
            if (count >= target) {
              el.textContent = target.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
              clearInterval(timer);
            } else {
              el.textContent = count.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;
            }
          }, stepTime);

          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counterElements.forEach(el => observer.observe(el));
  }
});
