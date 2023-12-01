import React from "react";
import {PrimaryButton} from '@buttons/primary'
import { H1 } from '@typography'
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import {PrimaryModal} from "./primary-modal"
import {PrimaryModalProps} from "./types";

import {useSwitch} from '@hooks'

export default {
    title: "UI-kit/Modal",
    component: PrimaryModal,
} as Meta;

const Template: Story<PrimaryModalProps> = ({isOpen = false, ...args}) => {
    const [isModalOpen, openModal, closeModal] = useSwitch(isOpen)

    return <div>
        <PrimaryModal {...args} isOpen={isModalOpen} onClose={closeModal} >
            <H1>Modal Box</H1>
        </PrimaryModal>

        <PrimaryButton label='Open modal' onClick={openModal} />
    </div>
};

export const Primary = Template.bind({});
Primary.args = {isOpen: false};
