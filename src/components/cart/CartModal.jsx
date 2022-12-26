const CartModal = (prpos) => {
    // const { 
    //     isActiveModal,
    //     btnText,
    //     hideCartModal,
    //     handleRemoveProduct,
    // } = prpos;

    return (
        <div className="active_modal"
        >
            <div className="modal_box">
                <div className="modal_icon">
                    <span>!</span>
                </div>

                <div className="modal_content">
                    <h3 className="modal_title">
                        are you sure?
                    </h3>

                    <div className="modal_alert text-muted">
                        You won't be able to revert this!
                    </div>
                </div>

                <div className="modal_actions">
                    <button type="button"
                        className="modal_btn"
                    >
                    </button>

                    <button type="button"
                        className="modal_btn cancel"
                    >
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartModal;