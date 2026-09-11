(() => {
  const token = document.querySelector('#token'), error = document.querySelector('#error'), header = document.querySelector('#header-output'), payload = document.querySelector('#payload-output'), claims = document.querySelector('#claims'), list = document.querySelector('#claims-list'), toast = document.querySelector('#toast');
  let toastTimer;
  const decodePart = value => { const b64 = value.replace(/-/g, '+').replace(/_/g, '/'); const padded = b64 + '='.repeat((4 - b64.length % 4) % 4); return new TextDecoder().decode(Uint8Array.from(atob(padded), char => char.charCodeAt(0))); };
  const notify = message => { toast.textContent = message; toast.classList.add('visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('visible'), 1800); };
  const date = seconds => new Intl.DateTimeFormat(undefined, {dateStyle:'medium', timeStyle:'medium'}).format(new Date(seconds * 1000));
  function reset() { header.innerHTML = '<code>// Token header will appear here</code>'; payload.innerHTML = '<code>// Token payload will appear here</code>'; header.classList.remove('has-content'); payload.classList.remove('has-content'); document.querySelectorAll('.copy-button').forEach(button => button.disabled = true); claims.hidden = true; error.hidden = true; }
  function renderClaims(data) {
    const fields = [['iss','Issuer'],['sub','Subject'],['aud','Audience'],['iat','Issued at'],['nbf','Not before'],['exp','Expires']].filter(([key]) => Object.hasOwn(data, key));
    if (!fields.length) { claims.hidden = true; return; }
    list.replaceChildren();
    fields.forEach(([key, label]) => { const group = document.createElement('div'), dt = document.createElement('dt'), dd = document.createElement('dd'); dt.textContent = label; let value = data[key]; if (['iat','nbf','exp'].includes(key) && typeof value === 'number') { value = date(value); if (key === 'exp' && data[key] * 1000 < Date.now()) dd.className = 'expired'; } dd.textContent = Array.isArray(value) ? value.join(', ') : String(value); group.append(dt, dd); list.append(group); });
    claims.hidden = false;
  }
  function parse() {
    const value = token.value.trim(); if (!value) { reset(); return; }
    try { const parts = value.split('.'); if (parts.length !== 3 || !parts[0] || !parts[1]) throw new Error('A JWT must contain three dot-separated sections.'); const h = JSON.parse(decodePart(parts[0])), p = JSON.parse(decodePart(parts[1])); header.textContent = JSON.stringify(h, null, 2); payload.textContent = JSON.stringify(p, null, 2); header.classList.add('has-content'); payload.classList.add('has-content'); document.querySelectorAll('.copy-button').forEach(button => button.disabled = false); error.hidden = true; renderClaims(p); }
    catch (reason) { reset(); error.textContent = reason.message === 'A JWT must contain three dot-separated sections.' ? reason.message : 'This does not appear to be a valid JWT with JSON header and payload.'; error.hidden = false; }
  }
  token.addEventListener('input', parse);
  document.querySelector('#clear').addEventListener('click', () => { token.value = ''; reset(); token.focus(); });
  document.querySelectorAll('.copy-button').forEach(button => button.addEventListener('click', async () => { try { await navigator.clipboard.writeText(document.querySelector(`#${button.dataset.copy}`).textContent); notify('Copied to clipboard'); } catch { notify('Copy unavailable in this browser'); } }));
  document.querySelector('#theme-toggle').addEventListener('click', event => { const dark = document.documentElement.dataset.theme !== 'dark'; document.documentElement.dataset.theme = dark ? 'dark' : ''; event.currentTarget.setAttribute('aria-pressed', String(dark)); event.currentTarget.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} theme`); event.currentTarget.querySelector('.theme-label').textContent = dark ? 'Light' : 'Dark'; });
})();
