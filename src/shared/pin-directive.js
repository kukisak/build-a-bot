export default {
  bind: (element, binding) => {
    console.log('arg:', binding.arg, 'modifiers:', binding.modifiers);
    element.style.position = 'absolute';
    element.style.bottom = '5px';
    element.style.right = '5px';
  },
};
