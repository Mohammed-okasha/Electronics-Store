const ContactItem = ({ icon, text,  }) => {
    return (
        <li className="contact_item">
            {icon}
            <span className="text">
                {text}
            </span>
        </li>
    );
}

export default ContactItem;