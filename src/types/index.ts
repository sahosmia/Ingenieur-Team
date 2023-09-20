export type LocationInformationPropsType = {
    title: string,
    address: string,
    number: string,
    email: string,
    url: string,
}

export type PageBannerPropsType = {
    title: string,
    content?: string,
    children?: JSX.Element,
}
export type CareerItemPropsType = {
    location: string,
    designation: string,
    status: string,
    company: string;
}

export type ServiceItemPropsType = {
    title: string,
    bg: string,
    icon: JSX.Element,
    content: string,
}