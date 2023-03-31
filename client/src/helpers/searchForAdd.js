export const searchAndAdd = (id, tree, newData) => {
  var updatedTree;
  var updatedNode;
  var updatedChildren;
  const binarySearchAndUpdate = (node, search, update) => {
    if (search === node.id) {
      // remove old child with update.id
      //

      if (node.children.length) {
        if (node.children.some((obj) => obj.id === update.id)) {
          updatedChildren = node.children.map((obj) => {
            if (obj.id === update.id) {
              return update;
            } else {
              return obj;
            }
          });
          updatedNode = { ...node, children: updatedChildren };
        } else {
          updatedChildren = [...node.children, update];
          updatedNode = { ...node, children: updatedChildren };
        }
      } else {
        updatedChildren = [update];
        updatedNode = { ...node, children: updatedChildren };
      }
      binarySearchAndUpdate(tree, updatedNode.parentId, updatedNode);
    } else {
      // if current is not dad, recurse with children to find
      for (var i = 0; i < node.children.length; i++) {
        binarySearchAndUpdate(node.children[i], search, update);
      }
    }
  };
  binarySearchAndUpdate(tree, id, newData);
  return updatedNode;
};
