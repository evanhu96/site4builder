import { searchAndAdd } from "./searchForAdd";
import Node from "./Tree";
export const addComp = (element, id, parentId, tree) => {
  const node = new Node(id, parentId, element, {}, [],false);
  // binary search

  return searchAndAdd(parentId, tree, node);
  // setTree(tmpTree);
};
