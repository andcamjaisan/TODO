import { useState } from 'react';
import { useTareas } from './hooks/useTareas';
import { Header } from './components/Layout/Header';
import { Board } from './components/Layout/Board';
import { Modal } from './components/UI/Modal';
import { TareaForm } from './components/Tarea/TareaForm';
import styles from './App.module.css';

function App() {
  const { tareas, loading, error, crear, actualizar, eliminar } = useTareas();
  const [modal, setModal] = useState({ open: false, modo: 'crear', tarea: null });

  const abrirCrear = () => setModal({ open: true, modo: 'crear', tarea: null });
  const abrirEditar = (tarea) => setModal({ open: true, modo: 'editar', tarea });
  const cerrarModal = () => setModal({ open: false, modo: 'crear', tarea: null });

  const handleSubmit = async (data) => {
    if (modal.modo === 'crear') {
      await crear(data);
    } else {
      await actualizar(modal.tarea.id, data);
    }
    cerrarModal();
  };

  const handleDelete = async (id) => {
    await eliminar(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header onNewTarea={abrirCrear} loading={loading} />
        <Board 
          tareas={tareas} 
          onEdit={abrirEditar} 
          onDelete={handleDelete}
          loading={loading}
          error={error}
        />
        
        <Modal
          isOpen={modal.open}
          onClose={cerrarModal}
          title={modal.modo === 'crear' ? 'Nueva Tarea' : 'Editar Tarea'}
        >
          <TareaForm
            tarea={modal.tarea}
            onSubmit={handleSubmit}
            onCancel={cerrarModal}
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;