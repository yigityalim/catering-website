import {Text} from "../components/Text.tsx";
import BreadCrumb from "../components/BreadCrumb.tsx";
import {useTranslation} from "react-i18next";
import {Fragment, useCallback, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import Icon from "../components/Icon.tsx";
import {Helmet} from "react-helmet";

interface PictureModalProps {
    src: string;
    isOpen: boolean;
    close: () => void;
}

const PictureModal = ({ src, isOpen, close }: PictureModalProps): JSX.Element => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={close}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-1000"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full flex flex-col items-center justify-between max-w-md transform overflow-hidden rounded-2xl bg-wash dark:bg-wash-dark p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='flex items-center justify-between w-full h-full gap-x-2'>
                                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-wash-dark dark:text-wash">
                                            Resim Açıklaması gelicek Re
                                        </Dialog.Title>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center items-center rounded bg-brand px-4 py-2 text-sm font-medium text-wash outline-none"
                                            onClick={close}
                                        >
                                            <Icon children="close" className="w-4 h-4 flex items-center justify-center" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <img src={src} alt="" className="h-auto max-w-full rounded-lg"/>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default function Gallery(): JSX.Element {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string>('');

    const openModal = useCallback((src: string) => {
        setSelectedImage(src);
        setIsOpen(true);
    }, [])

    const closeModal = useCallback(() => {
        setSelectedImage('');
        setIsOpen(false);
    }, []);

    const {t} = useTranslation();
    return (
        <>
            <Helmet><title>{t('gallery.title')}</title></Helmet>
            <Text size='4xl' weight='bold' className='text-brand'>{t('gallery.title')}</Text>
            <BreadCrumb separator='Chevron'/>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Array.from(Array(4)).map((_, i) => {
                    return (
                        <div className="grid gap-4" key={i}>
                            {Array.from(Array(3)).map((_, j) => (
                                <div key={j}>
                                    {j === 0 && i === 0 ?
                                        <img
                                            className="h-auto max-w-full rounded-lg"
                                            src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg`}
                                            alt=""
                                            onClick={() => openModal(`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg`)}
                                        />
                                        :
                                        <img
                                            className="h-auto max-w-full rounded-lg"
                                            src={`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-${i * 3 + j}.jpg`}
                                            alt=""
                                            onClick={() => openModal(`https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-${i * 3 + j}.jpg`)}
                                        />
                                    }
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
            {isOpen &&
                <PictureModal
                    src={selectedImage}
                    isOpen={isOpen}
                    close={closeModal}
            />}
        </>
    )
}
/*
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {photos.map((photo, index) => (
                    <div key={index} className='relative'>
                        <img src={photo.imageUrl} alt={photo.title} className='w-full h-64 object-cover rounded-lg shadow-md'/>
                        <div className='absolute inset-x-0 bottom-0 px-4 py-2 bg-opacity-75 backdrop-filter backdrop-blur-lg rounded-lg'>
                            <h3 className='text-lg font-semibold text-white'>{photo.title}</h3>
                            <p className='text-sm text-white'>{photo.description}</p>
                        </div>
                    </div>
                ))}
            </div>
 */

/*
BUNU KULLAN. EN SONKİ HALİ BU
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {photos.map((photo) => (
                    <div key={photo} className="p-4 flex flex-col items-center justify-center shadow-xl border border-gray-200 dark:border-gray-700 rounded">
                        <img src={`public/images/${photo}.JPG`} alt={`Photo ${photo}`} className="h-64 object-cover" />
                        <Text size="lg" weight="bold" className="text-start w-full my-3 text-highlight">
                            Photo {photo}
                        </Text>
                        <Text size="md" weight="semibold" className="text-start w-full text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit
                        </Text>
                    </div>
                ))}
            </div>
 */