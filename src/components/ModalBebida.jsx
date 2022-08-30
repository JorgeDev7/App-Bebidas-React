import { Modal, Image, ModalBody, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalBebida = () => {

    const { modal, handleModalClick, receta, cargando } = useBebidas();

    const mostrarIngredientes = () => {
        let ingredientes = [];

        for (let i = 1; i < 16; i++) {
            if (receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    return (
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image
                    src={receta.strDrinkThumb}
                    alt={`Imagen Receta ${receta.strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{receta.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2>Ingredients and Measures</h2>
                        {mostrarIngredientes()}
                        <h2>Instructions</h2>
                        {receta.strInstructions}
                    </div>
                </Modal.Body>
                <Button
                    variant="danger"
                    className="text-uppercase w-100"
                    type="button"
                    onClick={handleModalClick}
                >Cerrar</Button>
            </Modal>
        )
    )
}

export default ModalBebida