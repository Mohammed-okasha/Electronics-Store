import { advantagesItems } from "../../assets/data/advantagesItems";
//!==========================================================
const AdvantagesItems = () => {

    return (
        <div className="advantages_items">
            {advantagesItems.map((item, index) => {
                const {icon, title, description: desc} = item;

                return (
                    <div key={index} className="item">
                        <span className="icon">
                            {icon}
                        </span>

                        <div className="content">
                            <h3 className="title">{title}</h3>
                            <p className="text-muted">{desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AdvantagesItems;