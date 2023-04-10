import { useMutation, useQuery } from "@apollo/client";
import {
  faArrowDown,
  faArrowUp,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import ReactDOMServer from "react-dom/server";
import { addComp } from "../helpers/addComp";
import { searchAndEdit } from "../helpers/searchForEdit";
import CardComp from "../siteComponents/CardComp";
import Navigation from "../siteComponents/Navigation";
import { CREATE_SITE, UPDATE_SITE } from "../utils/mutations";
import {
  GET_COMPONENT,
  GET_COMPONENTS,
  GET_SITE,
  GET_SITES,
} from "../utils/queries";
import App from "./Body";
import { SiteContext } from "./SiteContext";
import Tutorial from "./Tutorial";
function HTMLWrapper(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.element.outerHTML }} />;
}
var tmpSite = "";
var tmpList = [];
export default function Site() {
  const {
    tree,
    setSubmit,
    setEditId,
    setTree,
    setParentId,
    currentId,
    setCurrentId,
    parentId,
    show,
    setShow,
  } = useContext(SiteContext);
  const [siteName, setSiteName] = useState("");
  const {
    loading: loadingAllSites,
    data: dataAllSites,
    error: errorAllSites,
  } = useQuery(GET_SITES);
  const {
    loading: loadingSite,
    data: dataSite,
    error: errorSite,
    refetch: refetchSite,
  } = useQuery(GET_SITE);
  const [
    createSite,
    { data: createData, loading: createLoading, error: createError },
  ] = useMutation(CREATE_SITE, {
    variables: { name: "", elements: [] },
  });
  const handleSave = () => {
    if (siteName in sites) {
      updateSite({ name: siteName, elements: currentList });
    } else {
      createSite({ name: siteName, elements: currentList });
    }
  };
  const [
    updateSite,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_SITE, {
    variables: { name: "", elements: [] },
  });
  const { loading, data, error, refetch } = useQuery(GET_COMPONENT, {
    variables: { tag: "Navigation" },
  });
  const {
    loading: loading2,
    data: data2,
    error: error2,
    refetch: refetch2,
  } = useQuery(GET_COMPONENTS);

  if (error) {
    console.log(error);
  }
  if (data) {
    // console.log(data);
  }
  const sites = [];
  // if(dataAllSites.getSite){
  //   console.log(dataAllSites)
  //   dataAllSites.sites.forEach((site) => {
  //     console.log(site);
  //     sites.push(site.name)
  //   })
  // }

  const [site, setSite] = useState("");
  const [imports, setImports] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [props, setProps] = useState({});
  var htmlComponent;
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setParentId(id);
  };
  const handleSubmit = (el) => {
    setSubmit(true);
    setEditId(el);
  };
  const handleProps = (el) => {
    const element = el.target.value;
    console.log(element);
    if (element.slice(0, 1) === "{" && element.slice(-1) === "}") {
      console.log(element);
      const obj = JSON.parse(element);
      setProps((prev) => {
        return { ...prev, ...obj };
      });
    }
  };
  const handlePropSubmit = (e) => {
    e.preventDefault();
    console.log(searchAndEdit(tree, props, parentId));
  };
  const newComp = (element) => {
    setCurrentId((prev) => (prev += 1));
    const comp = addComp(element, currentId, parentId, tree);
    tmpSite = "";
    createApp(comp);
    setTree(comp);
    renderTree(comp);
  };
  var files = [];
  const createApp = (dom) => {
    if (!files.includes(dom.tag)) {
      refetch({ tag: dom.tag });
      // if (data) {
      //   console.log(data);
      // }
    }
    files.push(dom.tag);
    tmpList = files.filter((elem, index) => {
      return files.indexOf(elem) === index;
    });
    if (dom.children) {
      dom.children.forEach((element) => {
        tmpSite += createApp(element);
      });
      // console.log(tmpList);
      const list = tmpList.map((element) => {
        return `import ${element} from '../build/${element}'`;
      });
      setSite(tmpSite);
      setImports(list.join(";"));
    }
    return `<${dom.tag}/>`;
  };
  // console.log(site,imports);

  const renderTree = (dom) => {
    var component;

    if (dom) {
      if (dom.tag === "nav") {
        component = <Navigation />;
      } else if (dom.tag === "longCard") {
        component = (
          <>
            <CardComp />
          </>
        );
      } else {
        const tag = dom.tag;
        var children = "";
        dom.children.forEach((element) => {
          children += ReactDOMServer.renderToString(renderTree(element));
        });
        const stringElement = `<${tag}>${children}</${tag}>`;
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(stringElement, "text/html");

        component = <HTMLWrapper element={parsedHtml.body.firstChild} />;
      }
      return component;
    }
  };
  var string = `<ul id="myUL">`;
  const viewTree = (dom) => {
    if (dom) {
      if (dom.children.length) {
        string += `<li><span className="caret" >${dom.tag}</span><button className='add' id = ${dom.id} >+</button>
        </li><ul className="nested">
        `;
        dom.children.forEach((element) => {
          viewTree(element);
        });
        string += "</ul>";
      } else {
        string += `<li>${dom.tag}<button className='add' id = ${dom.id} >+</button></li>`;
      }
      return string;
    }
  };

  htmlComponent = renderTree(tree);
  const parser = new DOMParser();
  const parsedHtml = parser.parseFromString(
    viewTree(tree) + "</ul>",
    "text/html"
  );
  const treeView = <HTMLWrapper element={parsedHtml.body} />;
  document.addEventListener("click", (event) => {
    if (
      event.target.nodeName === "BUTTON" &&
      event.target.className === "add"
    ) {
      setParentId(parseInt(event.target.id.charAt(0)));
    }
  });
  const handleAdd = (tag) => {
    setCurrentList((prev) => [...prev, tag]);
    newComp(tag);
  };

  const handleRemove = (key) => {
    setCurrentList((prev) => {
      const newList = [...prev.slice(0, key), ...prev.slice(key + 1)];
      return newList;
    });
  };
  const handlePosition = (idx, newIdx) => {
    const temp = currentList[idx];
    const newList = [
      ...currentList.slice(0, idx),
      ...currentList.slice(idx + 1),
    ];
    newList.splice(newIdx, 0, temp);
    setCurrentList(newList);
  };
  const handleInputChange = (e) => {
    setSiteName(e.taget.value);
  };
  useEffect(() => {
    const tmpSite = currentList
      .map((element) => {
        return `<${element}/>`;
      })
      .join("");
    const uniqueList = [...new Set(currentList)];
    const tmpList = uniqueList
      .map((element) => {
        return `import ${element} from '../build/${element}'`;
      })
      .join(";");
    setSite(tmpSite);
    setImports(tmpList);
  }, [currentList]);
  const handleLoad = () => {
    refetchSite({ siteName: siteName });
    if (dataSite) {
      setCurrentList(dataSite.site.elements);
    }
  };
  return (
    <div>
      <Stack
        direction="horizontal"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span>
          <Button
            style={{ backgroundColor: "#66FF99" }}
            onClick={() => handleShow(0)}
          >
            Component Selector
          </Button>
        </span>
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "300px",
            marginRight: "200px",
          }}
        >
          <form>
            <input
              type="text"
              placeholder="siteName"
              value={siteName}
              onChange={handleInputChange}
            ></input>
            <Button style={{ backgroundColor: "#66FF99" }} onClick={handleSave}>
              Save
            </Button>
          </form>
          <Button style={{ backgroundColor: "#66FF99" }} onClick={handleLoad}>
            Load
          </Button>
        </span>
      </Stack>
      {htmlComponent}
      <Modal
        show={show}
        className="modal fade"
        id="modal"
        tabIndex="-1"
        role="dialog"
        size="lg"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                What section would you like to add
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Stack direction="horizontal" gap={5}>
              <ul
                style={{ width: "300px", height: "200px", overflowY: "scroll" }}
              >
                {data2 &&
                  data2.components.map((element, idx) => (
                    <li key={idx} onClick={() => handleAdd(element.tag)}>
                      {element.tag}
                    </li>
                  ))}
              </ul>
              <ul
                style={{ width: "300px", height: "200px", overflowY: "scroll" }}
              >
                {currentList.map((element, idx) => (
                  <li
                    key={idx}
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    {element}{" "}
                    <Button
                      variant="info"
                      onClick={() => handlePosition(idx, idx + 1)}
                    >
                      <FontAwesomeIcon icon={faArrowDown} />
                    </Button>
                    <Button
                      variant="info"
                      onClick={() => handlePosition(idx, idx - 1)}
                    >
                      <FontAwesomeIcon icon={faArrowUp} />
                    </Button>
                    <Button variant="danger" onClick={() => handleRemove(idx)}>
                      <FontAwesomeIcon icon={faMinus} />
                    </Button>
                  </li>
                ))}
              </ul>
            </Stack>
            <span>
              <Tutorial />
            </span>
          </div>
        </div>
      </Modal>
      <App imports={imports} site={site} />
    </div>
  );
}
