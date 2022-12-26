const Ovetlay = ({isOpen, closeMenu}) => {
    return (
        <div className={`overlay ${isOpen ? "active" : ""}`}
            onClick={closeMenu}
        >
        </div>
    );
};

export default Ovetlay;