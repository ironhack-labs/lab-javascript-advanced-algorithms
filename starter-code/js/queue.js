var stackContainerSelector = ".js-stack-container";
var stackElement = '<div class="stack-element">Test</div>';

var MAX_SIZE = 8;
for (var i = 0; i < MAX_SIZE; ++i) {
  $(stackContainerSelector).append(stackElement);
}
