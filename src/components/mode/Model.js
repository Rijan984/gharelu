import React from "react";
import { useModal } from "react-hooks-use-modal";

function Model() {
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  return (
    <div>
      <button onClick={open} className="btn btn-outline-danger">
        Logout
      </button>
      <Modal>
        <form>
          <input />
        </form>
        <div className="white rounded">
          <h4>Do you want to logout?</h4>
          <p>Click No if you don't want to logout.</p>
          <div>
            <button className="btn btn-danger">Yes</button>
            <button className="btn btn-primary" onClick={close}>
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Model;
