const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value'),
  };
  
  let counterValue = Number(refs.span.textContent);
  refs.decrementBtn.addEventListener('click', onDecrement);
  
  function onDecrement() {
    counterValue -= 1;
    refs.span.textContent = counterValue;
  
  }
  
  refs.incrementBtn.addEventListener('click', onIncrement);
  
  function onIncrement() {
    counterValue += 1;
    refs.span.textContent = counterValue;

  }