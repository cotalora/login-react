import lottie from 'lottie-web';
import { defineLordIconElement } from "lord-icon-element";
import { AnimatedIconProps } from './interfaces/AnimatedIcon';

defineLordIconElement(lottie.loadAnimation);

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lord-icon': LordIconProps
        }
    }
}

interface LordIconProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    class?: string,
    target?: string,
    trigger?: string,
    src?: string,
    colors?: string,
}

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
