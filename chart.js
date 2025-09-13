function createGrowthChart(ctx) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, 'rgba(255,215,0,0.4)');
  gradient.addColorStop(1, 'rgba(255,215,0,0)');

  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        label: 'Portfolio Value (USD)',
        data: [12000, 13500, 12800, 15000, 17000, 16500, 18000, 19500],
        borderColor: '#FFD700',
        backgroundColor: gradient,
        fill: true,
        tension: 0.3,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { ticks: { color: '#C0C0C0' } },
        y: { ticks: { color: '#C0C0C0' } }
      },
      plugins: {
        legend: { labels: { color: '#FFFFFF' } }
      }
    }
  });
}

function createAllocChart(ctx) {
  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: holdings.map(h => h.symbol),
      datasets: [{
        data: holdings.map(h => h.shares * h.price),
        backgroundColor: ['#0078D7', '#FFD700', '#1F305E']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom', labels: { color: '#C0C0C0' } }
      }
    }
  });
}

function createFOChart(ctx) {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: foData.labels,
      datasets: [
        {
          label: 'Futures',
          data: foData.futures,
          borderColor: '#0078D7',
          backgroundColor: 'rgba(0,120,215,0.2)',
          fill: true,
          tension: 0.3,
          pointRadius: 3
        },
        {
          label: 'Options',
          data: foData.options,
          borderColor: '#FFD700',
          backgroundColor: 'rgba(255,215,0,0.2)',
          fill: true,
          tension: 0.3,
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: { ticks: { color: '#C0C0C0' } },
        y: { ticks: { color: '#C0C0C0' } }
      },
      plugins: {
        legend: { labels: { color: '#FFFFFF' } }
      }
    }
  });
}