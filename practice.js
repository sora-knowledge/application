// const text = document.getElementById('text');
// const btn = document.getElementById('btn');
// const box = document.getElementById('box');

// btn.addEventListener('click', () => {
  // box.textContent += text.value;
  // const textbox = [];
  // textbox += text.value;
// });

let output = '';
new Vue({
  el: '#example',
  data: {
    change: '',
    content: '',
  },
  computed: {
    textBox() {
      output += this.content;
      console.log(output);
      return output;
    },
  },
});