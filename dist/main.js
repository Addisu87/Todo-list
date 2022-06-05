/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/displayTodos.js":
/*!*********************************!*\
  !*** ./modules/displayTodos.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n\n\nconst DisplayTodos = () => {\n  let todos = JSON.parse(localStorage.getItem('todos')) || [];\n\n  const todoList = document.querySelector('#todo-list');\n  todoList.innerHTML = '';\n\n  todos\n    .sort((a, b) => a.index - b.index)\n    .forEach((todo) => {\n      const todoItem = document.createElement('div');\n      todoItem.classList.add('todo-item');\n\n      const label = document.createElement('label');\n\n      const input = document.createElement('input');\n      input.type = 'checkbox';\n      input.checked = todo.done;\n      label.appendChild(input);\n\n      const span = document.createElement('span');\n      span.classList.add('bubble');\n      label.appendChild(span);\n\n      const content = document.createElement('div');\n      content.classList.add('todo-content');\n      content.innerHTML = `<input type=\"text\" value=\"${todo.content}\" readonly>`;\n\n      const actions = document.createElement('div');\n      actions.classList.add('actions');\n\n      const edit = document.createElement('button');\n      edit.classList.add('edit');\n      edit.innerHTML = 'Edit';\n      actions.appendChild(edit);\n\n      const deleteButton = document.createElement('button');\n      deleteButton.classList.add('delete');\n      deleteButton.innerHTML = 'Delete';\n      actions.appendChild(deleteButton);\n\n      todoItem.appendChild(label);\n      todoItem.appendChild(content);\n      todoItem.appendChild(actions);\n\n      todoList.appendChild(todoItem);\n\n      if (todo.done) {\n        todoItem.classList.add('done');\n      }\n\n      input.addEventListener('change', (e) => {\n        todo.done = e.target.checked;\n        localStorage.setItem('todos', JSON.stringify(todos));\n\n        if (todo.done) {\n          todoItem.classList.add('done');\n        } else {\n          todoItem.classList.remove('done');\n        }\n        DisplayTodos();\n      });\n\n      edit.addEventListener('click', () => {\n        const input = content.querySelector('input');\n        input.removeAttribute('readonly');\n        input.focus();\n        input.addEventListener('blur', (e) => {\n          input.setAttribute('readonly', true);\n          todo.content = e.target.value;\n          localStorage.setItem('todos', JSON.stringify(todos));\n          DisplayTodos();\n        });\n      });\n\n      deleteButton.addEventListener('click', () => {\n        todos = todos.filter((task) => task !== todo);\n        localStorage.setItem('todos', JSON.stringify(todos));\n        DisplayTodos();\n      });\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayTodos);\n\n\n//# sourceURL=webpack://webpack-demo/./modules/displayTodos.js?");

/***/ }),

/***/ "./modules/removeAll.js":
/*!******************************!*\
  !*** ./modules/removeAll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _displayTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodos.js */ \"./modules/displayTodos.js\");\n\n\n\nconst clearAllTasks = () => {\n  const clearTasks = document.querySelector('#completed');\n  clearTasks.innerHTML = '';\n\n  const removeAll = document.createElement('button');\n  removeAll.classList.add('completed');\n  removeAll.innerHTML = 'Remove All';\n\n  clearTasks.appendChild(removeAll);\n\n  removeAll.addEventListener('click', () => {\n    const todos = JSON.parse(localStorage.getItem('todos')) || [];\n    const notRemoved = todos.filter((todo) => !todo.done);\n    localStorage.clear('todos');\n    localStorage.setItem('todos', JSON.stringify(notRemoved));\n    (0,_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAllTasks);\n\n\n//# sourceURL=webpack://webpack-demo/./modules/removeAll.js?");

/***/ }),

/***/ "./modules/showAlert.js":
/*!******************************!*\
  !*** ./modules/showAlert.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/style.css */ \"./src/style.css\");\n\n\nconst showAlert = (message, className) => {\n  const div = document.createElement('div');\n  div.className = `alert alert-${className}`;\n  div.appendChild(document.createTextNode(message));\n  const form = document.querySelector('#new-todo-form');\n  const submitBtn = document.querySelector('#submit-btn');\n  form.insertBefore(div, submitBtn);\n\n  // Vanish in 2 seconds\n  setTimeout(() => document.querySelector('.alert').remove(), 2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showAlert);\n\n\n//# sourceURL=webpack://webpack-demo/./modules/showAlert.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary: #3d3d29;\\n  --blue: #3a82ee;\\n  --light: #eee;\\n  --white: #fff;\\n  --grey: #888;\\n  --dark: #313154;\\n  --danger: #f41e1b;\\n  --success: rgb(29, 186, 29);\\n  --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\\n  --dark-blue: 0 0 4px rgba(58, 130, 238, 0.75);\\n  --pink: #ec4899;\\n  --purple: #8b5cf6;\\n}\\n\\n/* End of Variables */\\n\\n/* Resets */\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'montserrat', sans-serif;\\n  overflow: hidden;\\n}\\n\\ninput:not([type='radio']):not([type='checkbox']),\\nbutton {\\n  appearance: none;\\n  border: none;\\n  outline: none;\\n  background: none;\\n  cursor: initial;\\n}\\n\\n/* End of Resets */\\n\\nbody {\\n  background: var(--light);\\n  color: var(--dark);\\n}\\n\\nsection {\\n  margin-top: 2rem;\\n  margin-bottom: 2rem;\\n  padding-left: 1.5rem;\\n  padding-right: 1.5rem;\\n}\\n\\nh3 {\\n  color: var(--dark);\\n  font-size: 1rem;\\n  font-weight: 400;\\n  margin-bottom: 0.5rem;\\n}\\n\\nh4 {\\n  color: var(--grey);\\n  font-size: 0.875rem;\\n  font-weight: 700;\\n  margin-bottom: 0.5rem;\\n}\\n\\n.create-todo input[type='text'] {\\n  display: block;\\n  width: 100%;\\n  font-size: 1.125rem;\\n  padding: 1rem 1.5rem;\\n  color: var(--dark);\\n  background-color: #fff;\\n  border-radius: 0.5rem;\\n  box-shadow: var(--shadow);\\n  margin-bottom: 1.5rem;\\n}\\n\\n.create-todo .alert-success {\\n  color: var(--success);\\n}\\n\\n.create-todo .alert-danger {\\n  color: var(--danger);\\n}\\n\\ninput[type='radio'],\\ninput[type='checkbox'] {\\n  display: none;\\n}\\n\\n.bubble {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 999px;\\n  border: 2px solid var(--blue);\\n  box-shadow: var(--dark-blue);\\n}\\n\\n.bubble::after {\\n  content: '';\\n  display: block;\\n  opacity: 0;\\n  width: 0;\\n  height: 0;\\n  background-color: var(--blue);\\n  box-shadow: var(--dark-blue);\\n  border-radius: 999px;\\n  transition: 0.2s ease-in-out;\\n}\\n\\ninput:checked ~ .bubble::after {\\n  width: 10px;\\n  height: 10px;\\n  opacity: 1;\\n}\\n\\n.create-todo input[type='submit'] {\\n  display: block;\\n  width: 100%;\\n  font-size: 1.125rem;\\n  padding: 1rem 1.5rem;\\n  color: var(--pink);\\n  background-image: linear-gradient(to right, var(--pink), var(--purple));\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  border-radius: 0.5rem;\\n  cursor: pointer;\\n  transition: 0.4s ease-out;\\n}\\n\\n.create-todo input[type='submit']:hover {\\n  opacity: 0.8;\\n}\\n\\n.create-todo input[type='submit']:active {\\n  opacity: 0.6;\\n}\\n\\n.todo-list .list {\\n  margin: 1rem 0;\\n}\\n\\n.todo-list .todo-item {\\n  display: flex;\\n  align-items: center;\\n  background-color: var(--white);\\n  padding: 1rem;\\n  border-radius: 0.5rem;\\n  box-shadow: var(--shadow);\\n  margin-bottom: 1rem;\\n}\\n\\n.todo-item label {\\n  display: block;\\n  margin-right: 0.5rem;\\n  cursor: pointer;\\n}\\n\\n.todo-item .todo-content {\\n  flex: 1 1 0%;\\n}\\n\\n.todo-item .todo-content input {\\n  color: var(--dark);\\n  font-size: 1.125rem;\\n}\\n\\n.todo-item .actions {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.todo-item .actions button {\\n  display: block;\\n  padding: 0.5rem;\\n  border-radius: 0.25rem;\\n  color: var(--white);\\n  cursor: pointer;\\n  transition: 0.4s ease-in-out;\\n}\\n\\n.todo-item .actions button:hover {\\n  opacity: 0.75;\\n}\\n\\n.todo-item .actions .edit {\\n  margin-right: 0.5rem;\\n  background-image: linear-gradient(to right, var(--pink), var(--purple));\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n}\\n\\n.todo-item .actions .delete {\\n  color: var(--danger);\\n}\\n\\n#completed button {\\n  display: block;\\n  width: 100%;\\n  font-size: 1.125rem;\\n  padding: 1rem 1.5rem;\\n  color: var(--pink);\\n  background-image: linear-gradient(to right, var(--pink), var(--purple));\\n  -webkit-background-clip: text;\\n  -webkit-text-fill-color: transparent;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  border-radius: 0.5rem;\\n  cursor: pointer;\\n  transition: 0.2s ease-out;\\n}\\n\\n.todo-item.done .todo-content input {\\n  text-decoration: line-through;\\n  color: var(--grey);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/displayTodos.js */ \"./modules/displayTodos.js\");\n/* harmony import */ var _modules_removeAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/removeAll.js */ \"./modules/removeAll.js\");\n/* harmony import */ var _modules_showAlert_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/showAlert.js */ \"./modules/showAlert.js\");\n\n\n\n\n\nwindow.addEventListener('load', () => {\n  const todos = (JSON.parse(localStorage.getItem('todos')) || []).filter(\n    (todo) => todo.content !== '',\n  );\n  const newTodoForm = document.querySelector('#new-todo-form');\n\n  newTodoForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n\n    const todo = {\n      content: e.target.elements.content.value,\n      done: false,\n      createdAt: new Date().getTime(),\n    };\n\n    // Validate\n    if (todo.content === '') {\n      (0,_modules_showAlert_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('Please fill in the field', 'danger');\n    } else {\n      (0,_modules_showAlert_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('To-do list added', 'success');\n      todos.push(todo);\n      localStorage.setItem('todos', JSON.stringify(todos));\n      (0,_modules_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n\n    // Reset the form\n    e.target.reset();\n  });\n\n  (0,_modules_displayTodos_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_modules_removeAll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;