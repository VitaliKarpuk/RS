const createComponentAppendChild = (tag, className, text, parent) => {
  const component = document.createElement(tag);
  if (className !== undefined) component.classList.add(className);
  if (text !== undefined) component.innerText = text;
  if (parent !== undefined) parent.appendChild(component);
  return component;
};

export default createComponentAppendChild;