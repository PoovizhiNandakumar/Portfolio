document.getElementById('QueryForm')
addEventListener('submit',function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const msg = document.getElementById('msg').value;

    if(!name || !msg) {
        alert('Please fill in all fields.');
        return;
    }
  alert('Form Submitted successfully!\nName: ' + name +'\nMessage: ' + msg);
  document.getElementById('QueryForm').reset();
});
