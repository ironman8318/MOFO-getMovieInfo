import React from "react";
import classes from "./Input.module.css";

const input = props => {
    let inputElement;
    switch (props.elementType) {
        case "input":
            inputElement = (
                <input
                    onChange={props.changed}
                    {...props.elementConfig}
                    value={props.value}
                    className={classes.input}
                />
            );
            break;
        case "select":
            const options = props.elementConfig.options.map(el => {
                return (
                    <option value={el.value} key={el.value}>
                        {" "}
                        {el.displayValue}{" "}
                    </option>
                );
            });
            inputElement = (
                <select
                    onChange={props.changed}
                    value={props.value}
                    className={classes.input}
                >
                    {" "}
                    {options}{" "}
                </select>
            );
            break;
        default:
            inputElement = (
                <input
                    onChange={props.changed}
                    {...props.elementConfig}
                    value={props.value}
                    className={classes.input}
                />
            );
    }
    const result = (
        <div
            className={
                props.specialStyle
                    ? classes.inputGroupTitle
                    : classes.inputGroup
            }
        >
            <label>{props.label}</label>
            {inputElement}
        </div>
    );

    return result;
};
export default input;
