
const PrevenirTeclaEspacio = () => {

    const handleKeyDown = (e) => {
        if (e.key === ' ') {
        e.preventDefault();
        alert('No se puede ingresar espacios !')
        // Puedes agregar un mensaje de error o realizar otra acción aquí si deseas.
        }
    };

    return (
        <div>
        <label>
            Ingrese un valor:
            <input type="text" onKeyDown={handleKeyDown} />
        </label>
        </div>
    );
};

export default PrevenirTeclaEspacio;
