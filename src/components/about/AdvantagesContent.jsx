import AdvantagesItems from "./AdvantagesItems";
//!=========================================================
const AdvantagesContent  = () => {
    return (
        <div className="advantages_content">
            <div className="advantages_title">
                <h2>
                    For two decades,
                    Digitaz has been at the forefront of e-commerce.
                </h2>
                <p className="text-muted">
                    Suspendisse enim turpis, dictum sed, iaculis a,
                    nisi. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Donec id justo
                </p>

            </div>

            <AdvantagesItems />
        </div>
    );
};

export default AdvantagesContent;