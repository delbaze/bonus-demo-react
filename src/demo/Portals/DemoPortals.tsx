import { createPortal } from "react-dom";

function Modal() {
  return createPortal(<div className="modal">Ma modal</div>, document.getElementById("modal-portal")!)
}
function DemoPortals() {
  return (
    <div>
      DemoPortals
      <Modal />
    </div>
  );
}

export default DemoPortals;
