import {Component, mergeProps, splitProps} from 'solid-js';
import styles from './styles.module.css';

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: Component<ButtonProps> = (props) => {
    props = mergeProps({size: 'small' as ButtonProps['size']}, props);
    const [local, rest] = splitProps(props, [
        'primary',
        'size',
        'backgroundColor',
        'label',
    ]);

    return (
        <button
            {...rest}
            type="button"
            classList={{
                [styles.storybookButtonSmall]: local.size === 'small',
                [styles.storybookButtonMedium]: local.size === 'medium',
                [styles.storybookButtonLarge]: local.size === 'large',
                [styles.storybookButton]: true,
                [styles.storybookButtonPrimary]: local.primary === true,
                [styles.storybookButtonSecondary]: local.primary === false,
            }}
            style={{'background-color': local.backgroundColor}}
        >
            {local.label}
        </button>
    );
};
