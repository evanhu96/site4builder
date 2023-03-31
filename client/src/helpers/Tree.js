export default class Node {
    constructor(id,parentId,tag, props, children,parent) {
      this.id = id
      this.parentId = parentId
      this.tag = tag;
      this.props = props;
      this.children = children;
      this.parent = parent
    }
  }