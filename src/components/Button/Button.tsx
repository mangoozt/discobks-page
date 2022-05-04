import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    text: string
    onClick: () => void;
    disabled: boolean
}

export default class Button extends React.Component<ButtonProps, {}> {
    public static defaultProps = {
        text: "imabutton",
        disabled: false,
        onClick: () => {}
    };
    public render() {
        return (
            <button className={styles.Button} data-testid="Button" onClick={this.props.onClick} disabled={this.props.disabled}>
                {this.props.text}
            </button>
        );
    }
}
