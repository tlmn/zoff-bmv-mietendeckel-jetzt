const React = require("react");
exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="1"
      type="text/javascript"
      src="/js/iframe.js"
    />
  ]);
};
