
const Loader = ({LoadingGif}) => {
    return (
        <div className="loading">
            <img src={LoadingGif} alt="loading-gif" />
        </div>
    );
};

export default Loader;