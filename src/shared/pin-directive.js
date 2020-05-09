export default function (element, binding) { // this way we add both hooks bind: and update:
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}
