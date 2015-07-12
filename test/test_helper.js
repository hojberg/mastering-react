import jsdom from 'jsdom';
import React from 'react/addons';
const { TestUtils } = React.addons;

function setupFakeDOM() {
  global.document = jsdom.jsdom("<!doctype html><html><body></body></html>");
  global.window = document.parentWindow;
  global.navigator = { userAgent: "node.js" };
  require('react/lib/ExecutionEnvironment').canUseDOM = true
}

function renderShallow(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

export { renderShallow, setupFakeDOM };
