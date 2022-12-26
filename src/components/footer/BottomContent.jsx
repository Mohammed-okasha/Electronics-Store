import paymentsIcons from "../../assets/images/payments-icons.png";

const BottomContent = () => {
    return (
        <div className="bottom_content_wrapper">
            <div className="copyRight">
                &copy; 2022 <span> mohammed sherif </span>
                all right reserved
            </div>

            <div className="payment_methods">
                <img src={paymentsIcons}
                    alt="payments icons"
                    className="icons"
                />
            </div>
        </div>
    );
}

export default BottomContent;