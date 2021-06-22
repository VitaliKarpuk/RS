export const createComponentAppend = (tag, className, text, parent) => {
  const component = document.createElement(tag);
  if (className !== undefined) component.classList.add(className);
  if (text !== undefined) component.innerText = text;
  if (parent !== undefined) parent.append(component);
  return component;
};