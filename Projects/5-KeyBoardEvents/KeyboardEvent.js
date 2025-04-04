const insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
  event.preventDefault();
  insert.innerHTML = `
    <div class='keyTable'>
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <th>${event.key === ' ' ? 'Space' : event.key}</th>
          <th>${event.keyCode}</th>
          <th>${event.code}</th>
        </tr>
      </table>
    </div>
  `;
});
