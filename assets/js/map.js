document.addEventListener("DOMContentLoaded", (event) => {



  setTimeout(() => {
    document.querySelector('#loadIframeMap').innerHTML = `
      <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.574534380925!2d-82.53719932499095!3d27.945685714939994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c2f1f9bae877%3A0x39ac31cb4d66fb0f!2s5401%20W%20Kennedy%20Blvd%2C%20Tampa%2C%20FL%2033609!5e0!3m2!1ses-419!2sus!4v1695641626595!5m2!1ses-419!2sus"></iframe>
    `;
  }, 500);


})