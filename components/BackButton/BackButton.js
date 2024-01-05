export const BackButton = ({ align = "left", buttonLabel, destination }) => {
    const alignMap = {
        left: "text-align",
        center: "text-center",
        right: "text-right"
    }
    return ( 
    <div className={alignMap[align]}>
        <a href={ destination } className="btn" id="button">
        <svg id="back-button-arrow" xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
                    <path fill="black" d="M24.3536 8.35355C24.5488 8.15829 24.5488 7.84171 24.3536 7.64645L21.1716 4.46447C20.9763 4.2692 20.6597 4.2692 20.4645 4.46447C20.2692 4.65973 20.2692 4.97631 20.4645 5.17157L23.2929 8L20.4645 10.8284C20.2692 11.0237 20.2692 11.3403 20.4645 11.5355C20.6597 11.7308 20.9763 11.7308 21.1716 11.5355L24.3536 8.35355ZM0 8.5H24V7.5H0V8.5Z"/>
                </svg> { buttonLabel }
        </a>
    </div>
    );
};