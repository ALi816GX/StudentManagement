

const addStudent = function (currentNode, inputValue) {
    if (currentNode.isLeaf() === true) {
        currentNode.parentNode.appendChild(new Ext.tree.TreeNode({text: inputValue,icon:'resource/student.png',leaf: true}));
    } else {
        currentNode.appendChild(new Ext.tree.TreeNode({text: inputValue,icon:'resource/student.png',leaf: true}));
    }
};

const addClassFromRoot = function (className) {
    Ext.getCmp('tree').getRootNode().appendChild(new Ext.tree.TreeLoader({text: className, icon:'resource/class.png', children: []}));
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
