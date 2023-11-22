
import { Popover } from "flowbite";
import type { PopoverInterface , PopoverOptions } from "flowbite";

export const newPopOver = (target: HTMLElement, trigger: HTMLElement) => {

    const options: PopoverOptions = {
        placement: 'top',
        triggerType: 'click',
        onHide: () => {
            console.log('tooltip is shown');
        },
        onShow: () => {
            console.log('tooltip is hidden');
        },
        onToggle: () => {
            console.log('tooltip is toggled');
        }
    };

    const tooltip: PopoverInterface = new Popover(target, trigger, options);
    return tooltip;
}