import Button from "./atoms/Button"
import CenteredView from "./atoms/CenteredView"

import CenteredActivityIndicator from "./molecules/CenteredActivityIndicator"
import PrimaryButton from "./molecules/PrimaryButton"

import { defaultTheme } from "./theme";

const Atom = {
    Button,
    CenteredView
};

const Molecules = {
    CenteredActivityIndicator,
    PrimaryButton
};

export {
    Atom,
    Molecules,
    defaultTheme
}
