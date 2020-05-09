function applyStyle(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}

export default {
  bind: (element, binding) => {
    applyStyle(element, binding); // bind and update are typically used together to apply styles
  },
  update: (element, binding) => {
    applyStyle(element, binding);
  },
  inserted: {}, // hook when element is inserted into parent element
  componentUpdated: {}, // hook fires when all component childred have been updated
  unbind: {}, // hook fires when directive is unbound from its parent component
};
