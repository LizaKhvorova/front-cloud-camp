export type TAvatarProps = React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
> & {
    url?: string;
    initial?: string;
};
