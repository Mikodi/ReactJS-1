import React from 'react';
import { render } from "@testing-library/react";
import { ProfileView } from '../Profil/profileView';

describe('ProfileView', () => {
    it("render Hello + name", () => {
        const name = "Ann";
        const component = render(<ProfileView name={name} />);

        component.getByText(`Hello, ${name}`);
    })
})

