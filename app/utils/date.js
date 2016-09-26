const zeroPad = (value) => (value < 10 ? '0' : '') + String(value);

export const toHtmlDate = (value) => value && `${value.getUTCFullYear()}-${zeroPad(value.getUTCMonth() + 1)}-${zeroPad(value.getUTCDate())}`;
export const fromHtmlDate = (value) => {
    if (!value) {
        return null;
    }

    const [year, month, day] = value.split('-');
    return new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
};

export const today = () => {
    const now = new Date();
    return new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
};
