import React from 'react/addons';
const { TestUtils } = React.addons;

function renderShallow(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

export { renderShallow };
