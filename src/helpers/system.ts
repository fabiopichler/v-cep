const appName = 'V-CEP';

export const setPageTitle = (title?: string): void => {
    document.title = title ? `${title} | ${appName}` : appName;
}
