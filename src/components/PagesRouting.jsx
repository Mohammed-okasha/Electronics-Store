function PagesRouting({children}) {
    return (
        <section className="pages_routing">
            <div className="container">
                <div className="row">
                    <ul className="nav_links">
                        {children}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default PagesRouting;