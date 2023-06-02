import {Text} from "../components/Text.tsx";
import BreadCrumb from "../components/BreadCrumb.tsx";
import {useTranslation} from "react-i18next";
import React, {Fragment, useCallback, useEffect, useState} from "react";
import {Dialog, Transition} from "@headlessui/react";
import Icon from "../components/Icon.tsx";
import {Helmet} from "react-helmet";
import {Switch} from "@headlessui/react";
import c from "classnames";

interface PictureModalProps {
    src: string;
    isOpen: boolean;
    close: () => void;
    title: string;
}

interface ToggleViewProps {
    setView: React.Dispatch<React.SetStateAction<"grid" | "list">>
}

type Photo = {
    imageUrl: string;
    title: string;
    id: number;
};

type OpenModal = (id: number) => void;
type CloseModal = () => void;

const Photos: Photo[] = [
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
        title: 'Foto 1',
        id: 0,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        title: 'Foto 2',
        id: 1,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
        title: 'Foto 3',
        id: 2,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
        title: 'Foto 4',
        id: 3,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
        title: 'Foto 5',
        id: 4,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
        title: 'Foto 6',
        id: 5,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
        title: 'Foto 7',
        id: 6,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
        title: 'Foto 8',
        id: 7,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
        title: 'Foto 9',
        id: 8,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
        title: 'Foto 10',
        id: 9,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
        title: 'Foto 11',
        id: 10,
    },
    {
        imageUrl: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
        title: 'Foto 12',
        id: 11,
    }
]

const PictureModal = ({src, isOpen, close, title}: PictureModalProps): React.JSX.Element => {
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
                        <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-75"/>
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
                                <Dialog.Panel
                                    className="relative w-full flex flex-col items-center justify-between max-w-sm md:max-w-lg lg:max-w-xl transform overflow-hidden rounded-2xl bg-card dark:bg-card-dark p-6 text-left align-middle shadow-xl transition-all">
                                    <div className='flex items-center justify-between w-full h-full gap-x-2'>
                                        <Dialog.Title as="h3"
                                                      className="text-lg font-medium leading-6 text-wash-dark dark:text-wash">
                                            {title}
                                        </Dialog.Title>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center items-center rounded bg-brand px-4 py-2 text-sm font-medium text-wash outline-none"
                                            onClick={close}
                                        >
                                            <Icon children="close"
                                                  className="w-4 h-4 flex items-center justify-center"/>
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
const ToggleView = ({ setView }: ToggleViewProps): React.JSX.Element => {
    const [enabled, setEnabled] = useState<boolean>(false);

    useEffect(() => {
        setView(enabled ? 'list' : 'grid');
    }, [enabled, setView]);

    const handleChange = useCallback(() => {
        setEnabled((prevEnabled) => !prevEnabled);
    }, []);

    useEffect(() => {
        if (localStorage.getItem('viewPreference') === 'list') setEnabled(true);
    }, []);

    return (
        <div className="flex items-center justify-center">
            <Switch
                checked={enabled}
                onChange={handleChange}
                className={c(
                    enabled ? 'bg-brand' : 'bg-gray-200 dark:bg-gray-700',
                    'relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75'
                )}
            >
                <span className="sr-only">Toggle View</span>
                <span
                    aria-hidden="true"
                    className={c(
                        enabled ? 'translate-x-9' : 'translate-x-0',
                        'pointer-events-none h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out text-brand inline-flex items-center justify-center'
                    )}
                    children={enabled ? <Icon children="list" /> : <Icon children="grid_view" />}
                />
            </Switch>
        </div>
    );
};


export default function Gallery(): React.JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedImage, setSelectedImage  ] = useState<Photo | null>(null);

    type ViewPreference = 'grid' | 'list';

    const saveViewPreference = useCallback((view: ViewPreference): void => {
        localStorage.setItem('viewPreference', view);
    }, []);

    const getSavedViewPreference = (): ViewPreference | null => {
        const preference = localStorage.getItem('viewPreference');
        return preference === 'grid' || preference === 'list' ? preference : null;
    };

    const defaultViewPreference: ViewPreference = getSavedViewPreference() || 'grid';

    const [view, setView] = useState<ViewPreference>(defaultViewPreference);

    useEffect(() => {
        saveViewPreference(view);
    }, [saveViewPreference, view]);

    useEffect(() => {
        const savedPreference = getSavedViewPreference();
        if (savedPreference) {
            setView(savedPreference);
        }
    }, []);

    const openModal: OpenModal = useCallback<OpenModal>((id: number): void => {
        const photo: Photo | undefined = Photos.find(
            (photo: Photo): boolean => photo.id === id
        );
        if (photo) {
            setSelectedImage(photo);
            setIsOpen(true);
        }
    }, []);

    const closeModal: CloseModal = useCallback<CloseModal>((): void => {
        setSelectedImage(null);
        setIsOpen(false);
    }, []);

    const {t} = useTranslation();
    // Bileşenleri 'grid' veya 'list' görünümüne göre oluşturma
    const renderedPhotos = view === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from(Array(4)).map((_, i: number) => {
                return (
                    <div className="grid gap-4" key={i}>
                        {Array.from(Array(3)).map((_, j: number) => {
                            const imageIndex: number = i * 3 + j;
                            const photo: Photo | undefined = Photos.find(
                                (photo: Photo): boolean => photo.id === imageIndex
                            );
                            const imageUrl: string = photo ? photo.imageUrl : '';

                            return (
                                <div key={j}>
                                    {photo && (
                                        <img
                                            className="h-auto max-w-full rounded-lg cursor-pointer transition-all hover:scale-[1.02]"
                                            src={imageUrl}
                                            alt=""
                                            onClick={() => openModal(imageIndex)}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    ) : (
        <div className="w-full h-full flex items-center justify-center">
            {/*TODO - buraki 1300px gelen fotoğraflara göre değiştirilecek - */}
            <div className="h-[1300px] overflow-y-scroll snap-y snap-mandatory">
                <div className="flex flex-col gap-4 justify-center items-center">
                    {Photos.map((photo: Photo) => (
                        <div key={photo.id} className="flex flex-col gap-4 justify-center items-center snap-start">
                            <img
                                className="rounded-lg cursor-pointer max-w-full max-h-full"
                                src={photo.imageUrl}
                                alt=""
                                onClick={() => openModal(photo.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );

    return (
        <>
            <Helmet><title>{t('gallery.title')}</title>
            </Helmet>
            <Text size="4xl" weight="bold" className="text-brand">
                {t('gallery.title')}
            </Text>
            <div className="flex w-full items-center justify-between mb-4">
                <BreadCrumb separator="Chevron"/>
                <ToggleView setView={setView}/>
            </div>
            {renderedPhotos}
            {isOpen && selectedImage && (
                <PictureModal
                    src={selectedImage.imageUrl}
                    isOpen={isOpen}
                    close={closeModal}
                    title={selectedImage.title}
                />
            )}
        </>
    );
}
