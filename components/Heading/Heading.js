import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({textAlign, content, level }) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: {__html: content},
        className: `border-stone-950 dark:border-stone-300 border-l-2 pl-[20px] pt-[10px] pb-[10px] mb-[30px] font-secondary uppercase font-bold mx-auto max-w-[1450px] ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`,
    });
    return tag;
};