document.getElementById('dice-button').addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        const advice = data.slip;
        document.getElementById('advice-number').innerText = `Advice #${advice.id}`;
        document.getElementById('advice-text').innerText = `"${advice.advice}"`;
      })
      .catch(error => console.error('Error fetching advice:', error));
  });
  