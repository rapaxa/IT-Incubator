import IconSprite from '../../assets/images/code-svg.svg'
import {IconPropsType} from "../../types/styles/icons.ts";


export const Icon = (props:IconPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"} fill="#42446E" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${IconSprite}#${props.iconId}`}></use>
        </svg>
    )
}
