const areas = {
  eda: ['Ed', 'Análisis exploratorio', 'Hacer buenas preguntas es el primer paso. Explorar los datos permite reconocer patrones, detectar discrepancias y comprender el contexto antes de construir una solución.'],
  viz: ['Dv', 'Data visualization', 'Comunicar también es parte del análisis. Me interesa convertir información compleja en historias visuales claras que ayuden a comprender y tomar decisiones.'],
  ml: ['Ml', 'Machine learning', 'Explorar cómo los modelos aprenden de los datos y cómo ese aprendizaje puede aportar soluciones a problemas reales es una de las motivaciones de mi formación.'],
  ai: ['Ai', 'Inteligencia artificial', 'La curiosidad por las tecnologías emergentes impulsa mi aprendizaje continuo y mi participación en una comunidad dedicada a la Ciencia de Datos y la IA.'],
  pm: ['Pm', 'Modelado predictivo', 'Una de mis principales habilidades: estudiar relaciones y patrones para construir modelos que permitan anticipar comportamientos y explorar escenarios.'],
  lead: ['Ld', 'Liderazgo', 'Coordinar iniciativas académicas, organizar equipos y facilitar la comunicación. En Singularity pongo el liderazgo al servicio del aprendizaje y la colaboración.']
};
document.querySelectorAll('.skill').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.skill').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    const [symbol, title, description] = areas[button.dataset.skill];
    document.querySelector('.detail-symbol').replaceChildren(document.createTextNode(symbol), Object.assign(document.createElement('span'), {textContent: '↗'}));
    document.querySelector('#skill-title').textContent = title;
    document.querySelector('#skill-description').textContent = description;
  });
});
document.querySelector('.identity').addEventListener('click', event => {
  const card = event.currentTarget;
  const flipped = card.classList.toggle('flipped');
  card.setAttribute('aria-pressed', String(flipped));
  card.setAttribute('aria-label', flipped ? 'Ver frente de la tarjeta de Nátaly' : 'Girar tarjeta de Nátaly');
});
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('natalycardenasizaquita@gmail.com');
    status.textContent = 'Correo copiado. ¡Hablemos!';
  } catch {
    status.textContent = 'natalycardenasizaquita@gmail.com';
  }
});
let queued = false;
function updateProgress() {
  const available = document.documentElement.scrollHeight - innerHeight;
  document.querySelector('.progress').style.width = `${available > 0 ? scrollY / available * 100 : 0}%`;
  queued = false;
}
addEventListener('scroll', () => {if (!queued) {queued = true; requestAnimationFrame(updateProgress);}}, {passive: true});
addEventListener('resize', updateProgress);
updateProgress();
