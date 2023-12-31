import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content, textColor }) => {
    return <>
    <div className="max-w-[1350px] mx-auto">
    <span className="text-[18px]">
    <p 
    className={`${getTextAlign(textAlign)}`}
    style={{ color: textColor }}
    dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }} />
    </span>
    </div>
    </>;
};