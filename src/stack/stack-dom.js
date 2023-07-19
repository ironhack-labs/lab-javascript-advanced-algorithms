// ---------- [INITIAL SETUP] ----------

const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();


// ---------- [INITIAL SETUP] ----------

// ---------- [MIRROR] ----------

const clearStackInput = () => {
  stackInput.value = '';
};

// ---------- [MIRROR] ----------

// ---------- [MIRROR] ----------

const renderListStack = () => {
  warningTopStack.style.display = 'none';
  warningBottomStack.style.display = 'none';
  stackList.innerHTML = '';
  let length = newStack.display().length;
  let size = newStack.MAX_SIZE - length;
  newStack.display().forEach(item => {
    let li = document.createElement('li');
    li.className = 'active';
    li.innerText = item;
    stackList.appendChild(li);
  });
  for (let i = 0; i < size; i++) {
    let li = document.createElement('li');
    li.className = 'inactive';
    li.innerHTML = '&nbsp;';
    stackList.appendChild(li);
  }
};
renderListStack();

// ---------- [MIRROR] ----------

// ---------- [MIRROR] ----------

const generateWarningStack = type => {
  if (type === 'underflow') {
    warningBottomStack.style.display = 'block';
    warningBottomStack.innerText = type;
  } else if (type === 'overflow') {
    warningTopStack.style.display = 'block';
    warningTopStack.innerText = type;
  }
};

// ---------- [MIRROR] ----------

const addToStack = () => {
  if (newStack.push(stackInput.value) === 'Stack Overflow') {
    generateWarningStack('overflow');
  } else {
    clearStackInput();
    renderListStack();
  }
};

const removeFromStack = () => {
  if (newStack.pop() === 'Stack Underflow') {
    generateWarningStack('underflow');
  } else {
    renderListStack();
  }
};

// ---------- [INITIAL SETUP] ----------

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);

// ---------- [INITIAL SETUP] ----------