export function l(...args) {
  console.log.apply(null, args);
  const element = document.createElement('div');
  const message = args.map((result) =>
    (result && Array.isArray(result)) || typeof result === 'object'
      ? JSON.stringify(result, null, 4)
      : String(result)
  );
  element.innerHTML = message.join('\n');
  document.body.appendChild(element);
  return args;
}

if (window) {
  window.l = l;
}
