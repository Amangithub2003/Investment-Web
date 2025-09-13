// Navigation
document.querySelectorAll('.sidebar nav li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.sidebar li.active').classList.remove('active');
    item.classList.add('active');
    document.querySelector('.panel.active').classList.remove('active');
    document.getElementById(item.dataset.target).classList.add('active');
  });
});

// Populate holdings table
const holdingsTbody = document.getElementById('holdingsTable');
holdings.forEach(h => {
  const value = (h.shares * h.price).toFixed(2);
  holdingsTbody.innerHTML += `
    <tr>
      <td>${h.symbol}</td>
      <td>${h.shares}</td>
      <td>$${h.price.toFixed(2)}</td>
      <td>$${value}</td>
    </tr>`;
});

// Populate markets table
const marketsTbody = document.getElementById('marketsTable');
markets.forEach(m => {
  const cls = m.change >= 0 ? 'up' : 'down';
  marketsTbody.innerHTML += `
    <tr>
      <td>${m.index}</td>
      <td>${m.last.toFixed(2)}</td>
      <td class="${cls}">${m.change.toFixed(2)}</td>
    </tr>`;
});

// Populate analytics stats
document.getElementById('statROI').textContent = analytics.roi;
document.getElementById('statVolatility').textContent = analytics.volatility;
document.getElementById('statDrawdown').textContent = analytics.drawdown;

// Populate AI insights
const insightsList = document.getElementById('insightsList');
insights.forEach(text => {
  const li = document.createElement('li');
  li.textContent = text;
  insightsList.appendChild(li);
});

// Initialize charts after DOM load
window.addEventListener('DOMContentLoaded', () => {
  const growthCtx = document.getElementById('growthChart').getContext('2d');
  createGrowthChart(growthCtx);

  const allocCtx = document.getElementById('allocChart').getContext('2d');
  createAllocChart(allocCtx);

  const foCtx = document.getElementById('foChart').getContext('2d');
  createFOChart(foCtx);
});