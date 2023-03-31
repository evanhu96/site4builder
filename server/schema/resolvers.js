const Element = require("../models/Element");
const Component = require("../models/Component");
const Site = require("../models/Site");
const fs = require("fs");
const path = require("path");

function writeFileToClient(comp) {
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "client",
    "src",
    "build",
    `${comp.tag}.js`
  );
  fs.mkdirSync(path.dirname(filePath), { recursive: true }); // create the directory if it doesn't exist
  fs.writeFile(filePath, comp.file, function (err) {
    if (err) throw err;
    console.log(`The file ${filePath} has been saved!`);
  });
  const cssFilePath = path.join(
    __dirname,
    "..",
    "..",
    "client",
    "src",
    "styles",
    `${comp.tag}.${comp.cssType}`
  );
  fs.mkdirSync(path.dirname(cssFilePath), { recursive: true }); // create the directory if it doesn't exist
  fs.writeFile(cssFilePath, comp.css, function (err) {
    if (err) throw err;
    console.log(`The file ${cssFilePath} has been saved!`);
  });
}

const resolvers = {
  Query: {
    element: async (parent, { _id }) => {
      const element = await Element.findById(_id);
      return element;
    },
    children: async (parent, { _id }) => {
      const element = await Element.findById(_id);
      const ids = await Element.find({
        _id: { $in: element.toObject().children },
      });
      console.log(ids);
      return Element.find({ _id: { $in: ids } });
    },
    component: async (parent, { tag }) => {
      console.log(tag);
      const comp = await Component.findOne({ tag: tag });
      console.log(comp);
      writeFileToClient(comp);

      return comp;
    },
    components: async (parent) => {
      const comps = await Component.find();

      return comps;
    },
    getSite: async (parent, { name }) => {
      const site = await Site.findOne({ name: name });
      return site;
    },sites: async (parent) => {
      const sites = await Site.find();
      return sites;
    }
  },
  Mutation: {
    createSite: async (parent, { name, elements }) => {
      console.log(name,'sitieioe');
      const site = new Site({
        name: name,
        elements: elements,
      });
      await site.save();
      return site;
    },
    updateSite: async (parent, { name, elements }) => {
      const site = await Site.findOneAndUpdate(
        { name: name },
        { elements: elements },
        { new: true }
      );
      return site;
    },
    createElement: async (parent, { tag, attributes, parentTag, type }) => {
      console.log("thisone");
      const element = new Element({
        tag: tag,
        attributes: attributes,
        parentTag: parentTag,
        type: type,
      });
      await element.save();
      return element;
    },
    updateElement: async (parent, { _id, tag, attributes, type, children }) => {
      const element = await Element.findOneAndUpdate(
        { _id: _id },
        { tag: tag, attributes: attributes, type: type, children: children },
        {
          new: true,
        }
      );
      if (!element) {
        throw new Error("Element not found");
      }
      return element;
    },
    deleteElement: async (parent, _id) => {
      console.log(_id);
      await Element.findOneAndDelete(_id);
      return `deleted element${_id}`;
    },
  },
};

module.exports = resolvers;
