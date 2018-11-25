import Image from "./atoms/Image"
import InputWrapper from "./atoms/InputWrapper"
import Text from "./atoms/Text"

import CircularImageView from "./molecules/CircularImageView"
import Loader from "./molecules/Loader"
import SimpleButton from "./molecules/SimpleButton"

import { defaultTheme } from "./theme";

const Atom = {
    Image,
    InputWrapper,
    Text
};

const Molecules = {
    CircularImageView,
    Loader,
    SimpleButton
};

export {
    Atom,
    Molecules,
    defaultTheme
}
