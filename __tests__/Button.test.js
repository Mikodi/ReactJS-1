import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MsgButton from "../../../button";

describe("Button", () => {
    it("calls when clicked", () => {
        const handleClick = jest.fn();
        const btnText = "add";
        const component = render(<MsgButton btnText={btnText} onClick={handleClick} />);

        const clickBtn = component.getByRole('button');
        fireEvent(clickBtn, new MouseEvent('click', { bubbles: true }));

        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})