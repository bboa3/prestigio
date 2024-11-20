const LoadingIndicator: React.FC = () => (
  <div className="preloader">
    <button className="th-btn preloaderCls">Cancel Preloader </button>
    <div className="preloader-inner">
      <span className="loader"></span>
    </div>
  </div>
)

export default LoadingIndicator;