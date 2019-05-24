webpackJsonp([1],{91:function(t,n){t.exports="## Tree\n\n\u8bb8\u591a\u4e1c\u897f\u90fd\u53ef\u4ee5\u7528\u6811\u7ed3\u6784\u8868\u793a\uff0c\u5982\u76ee\u5f55\uff0c\u7ec4\u7ec7\u5c42\u6b21\u7ed3\u6784\uff0c\u751f\u7269\u5206\u7c7b\uff0c\u7b49\u3002\u6811\u7ec4\u4ef6\u662f\u8868\u793a\u8fd9\u4e9b\u4e8b\u7269\u4e4b\u95f4\u5c42\u6b21\u5173\u7cfb\u7684\u4e00\u79cd\u65b9\u5f0f\u3002\u8fd8\u53ef\u4ee5\u5c55\u5f00\uff0c\u6298\u53e0\u548c\u9009\u62e9\u6811\u4e2d\u7684\u6811\u8282\u70b9\u3002\n\n## \u4f7f\u7528\n\n```html\n<m-tree id='myTree' checkbox node=\"{\n\ttitle: 'p-0',\n\tid: 1,\n\ticon: 'account_balance_wallet',\n\tchildren: [\n\t\t{\n\t\t\ttitle: 'p-1',\n\t\t\tid: 2,\n\t\t\ticon: 'assignment_ind',\n\t\t\tchildren: [\n\t\t\t\t{ title: 'p-2', id: 3, icon: 'chrome_reader_mode', checked: true },\n\t\t\t\t{ title: 'p-2.5', id: 13, icon: 'chrome_reader_mode' }\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\ttitle: 'p-4',\n\t\t\tid: 4,\n\t\t\ticon: 'extension',\n\n\t\t\tchildren: [\n\t\t\t\t{\n\t\t\t\t\ttitle: 'p-5', id: 5, selected: true, icon: 'dashboard', checked: true,\n\t\t\t\t\tdisabled: true\n\t\t\t\t},\n\t\t\t\t{ title: '\u9879\u76ee\u516d', id: 6, icon: 'favorite' },\n\t\t\t\t{ title: '\u9879\u76ee7', id: 7 }\n\t\t\t]\n\t\t},\n\t\t{\n\t\t\ttitle: 'p-11',\n\t\t\tid: 14,\n\t\t\ticon: 'group_work',\n\t\t\tchildren: [\n\t\t\t\t{\n\t\t\t\t\ttitle: 'p-12', id: 12, icon: 'fingerprint', checked: true\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}\">\n</m-tree>\n```\n\n## Javascript\n\n```js\nvar myTree = document.querySelector('#myTree')\nvar nodeData = myTree.props.node\n\nmyTree.addEventListener('check', (evt) => {\n\tconst node = getNodeById(evt.detail.id, nodeData)\n\tif (!node.children) {\n\t\tnode.checked = evt.detail.checked\n\t} else {\n\t\tcheckAll(node, evt.detail.state !== 'checked')\n\t}\n\tmyTree.setAttribute('node', nodeData)\n})\n\n\nmyTree.addEventListener('toggle', (evt) => {\n\tconst node = getNodeById(evt.detail.id, nodeData)\n\tnode.close = !node.close\n\tmyTree.setAttribute('node', nodeData)\n})\n\nmyTree.addEventListener('nodeclick', (evt) => {\n\tconst pre = getNodeById(evt.detail.pre, nodeData)\n\tpre.selected = false\n\tconst node = getNodeById(evt.detail.id, nodeData)\n\tnode.selected = true\n\tmyTree.setAttribute('node', nodeData)\n})\n\n\nfunction checkAll(node, checked) {\n\tnode.children && node.children.forEach(child => {\n\t\tchild.checked = checked\n\t\tcheckAll(child, checked)\n\t})\n}\n\nfunction getNodeById(id, node) {\n\tif (node.id === id) return node\n\tif (node.children) {\n\t\tfor (let i = 0, len = node.children.length; i < len; i++) {\n\t\t\tlet child = node.children[i]\n\t\t\tlet target = getNodeById(id, child)\n\t\t\tif (target) {\n\t\t\t\treturn target\n\t\t\t}\n\t\t}\n\t}\n}\n```\n\n## API\n\n### Props\n\n```jsx\n{\n\tnode: obj,\n\tcheckbox: boolean\n}\n```\n\n### Event\n\n```jsx\n{\n\ttoggle: function, \n\tnodeclick: function,\n\tcheck: function\n}\n```\n"}});
//# sourceMappingURL=1.406443fe.chunk.js.map