import { Modal } from 'flowbite'
import type { ModalOptions, ModalInterface } from 'flowbite'


export const newModal = (target:HTMLElement)=>{
    const modalOptions: ModalOptions = {
        placement: 'bottom-right',
        backdrop: 'dynamic',
        
        backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
        closable: false,
        onHide: () => {
            console.log('modal is hidden');
        },
        onShow: () => {
            console.log('modal is shown');
        },
        onToggle: () => {
            console.log('modal has been toggled');
        }
    }
    const modal: ModalInterface = new Modal(target, modalOptions);
    return modal;
}