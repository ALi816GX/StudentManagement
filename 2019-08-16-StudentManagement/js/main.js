

const addStudent = function (currentNode, inputValue) {
    if (currentNode.isLeaf() === true) {
        currentNode.parentNode.appendChild(new Ext.tree.TreeNode({text: inputValue}));
    } else {
        currentNode.appendChild(new Ext.tree.TreeNode({text: inputValue, leaf: true}));
    }
};

const addClassFromRoot = function (className) {
    Ext.getCmp('tree').getRootNode().appendChild(new Ext.tree.TreeLoader({text: className, children: []}));
};


const deleteNode = function (chosedNode) {
    if (chosedNode.parentNode) {
        Ext.Msg.alert("Tips", "Really Delete？", function (button) {
            if (button === 'ok') {
                chosedNode.remove();
            }
        });
    }
};

const addStudentByMsgBox = function (chosedNode) {
    Ext.MessageBox.prompt("Add Student", "Please input the student name:", function (button, text) {
        if (button === 'ok') {
            addStudent(chosedNode, text);
        }
    });
};

const addClassByMsgBox = function () {
    Ext.MessageBox.prompt("Add Class", "Please input the class name:", function (button, text) {
        if (button === 'ok') {
            addClassFromRoot(text);
        }
    });
};

const addStudentByClickButton = function () {
    var inputValue = Ext.getCmp('inputValue').getValue();
    if (currentNode != null) {
        console.log(currentNode.isLeaf());
        addStudent(currentNode, inputValue);
    }
};