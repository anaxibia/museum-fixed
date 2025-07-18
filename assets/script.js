const element = document.getElementById("image-compare");
  
const viewer = new ImageCompare(element).mount();


document.querySelectorAll('.amount-group').forEach(group => {
  const increaseBtn = group.querySelector('.increase');
  const decreaseBtn = group.querySelector('.decrease');
  const countSpan = group.querySelector('.count');

  let count = parseInt(countSpan.textContent);

  increaseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    countSpan.textContent = count;
  });

  decreaseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (count > 0) {
      count--;
      countSpan.textContent = count;
    }
  });
});