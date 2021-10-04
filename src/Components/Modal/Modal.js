import Modal from "react-modal";

function CustomModal({ visible, onClose, afterOpen, contentLabel, children }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "30px",
    },
  };
  return (
    <Modal
      isOpen={visible}
      onAfterOpen={afterOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel={contentLabel}
    >
      {children}
    </Modal>
  );
}

export default CustomModal;
