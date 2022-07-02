import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const reference = useRef(null);
    if (!reference.current) { reference.current = document.createElement("div"); }

    useEffect(() => {
        const modal = document.getElementById("modal");
        modal.appendChild(reference.current);
        return () => modal.removeChild(reference.current);
    }, []);

    return createPortal(<div>{ children }</div>, reference.current);
}

export default Modal;