export interface Reference {
    username: string;
    text: string;
}

export interface MenuItem {
    title: string;
    text: string;
}

export interface Home {
    title: string;
    subtitle: string;
    subtitle2: string;
    titlebutton: string;
    aboutSection: {
        title: string;
        description: string;
    };
    menuSection: {
        title: string;
        subtitle: string;
        menu: MenuItem[];
    };
    referencesSection: {
        title: string;
        subtitle: string;
        references: Reference[];
    };
}