export const searchAndEdit = (tree,props,id) => {
  const editId = id;
  console.log(id,tree,props);
  var updatedNode;
  var updatedChildren;
  const binarySearchAndUpdate = (node, search, update) => {
    if (search === node.id) {
      // remove old child with update.id
      //
      if (editId === search) {
        updatedNode = { ...node, props: update };
      } else {
        updatedChildren = node.children.map((obj) => {
          if (obj.id === update.id) {
            return update;
          } else {
            return obj;
          }
        });
        updatedNode = { ...node, children: updatedChildren };

        binarySearchAndUpdate(tree, updatedNode.parentId, updatedNode);
      }
      binarySearchAndUpdate(tree, updatedNode.parentId, updatedNode);
    } else {
      // if current is not dad, recurse with children to find
      for (var i = 0; i < node.children.length; i++) {
        binarySearchAndUpdate(node.children[i], search, update);
      }
    }
  };
  binarySearchAndUpdate(tree, id, props);
  return updatedNode;
};
