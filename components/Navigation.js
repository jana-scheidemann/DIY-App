import Link from "next/link";
import { useState } from "react";
import ModalAdd from "./ModalAdd";
export default function Navigation({ onAddProject }) {
  const [modalAdd, setModalAdd] = useState(false);
  function toggleAddModal() {
    setModalAdd(!modalAdd);
  }
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/favorites">Favorite Projects</Link>
        </li>
      </ul>
      <button type="button" onClick={toggleAddModal}>
        Add New Project
      </button>
      {modalAdd && (
        <ModalAdd
          onAddProject={onAddProject}
          onToggleAddModal={toggleAddModal}
        />
      )}
    </nav>
  );
}
