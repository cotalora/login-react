import lottie from 'lottie-web';
import { defineLordIconElement } from "lord-icon-element";
import { AnimatedIconProps } from './interfaces/AnimatedIcon';

defineLordIconElement(lottie.loadAnimation);

export const AnimatedIcon = ({ target, trigger, src, colors, className }: AnimatedIconProps) => {
    return (
        <>
            <lord-icon
                class={className}
                target={target}
                trigger={trigger}
                src={src}
                colors={
                    `primary:${colors?.primary},secondary:${colors?.secondary}`
                }
            />
        </>
    )
}
