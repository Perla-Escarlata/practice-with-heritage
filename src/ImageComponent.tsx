type ImageComponentProps = {
    src: string;
    alt: string;
    className: string;
};

const ImageComponent = (props: ImageComponentProps) => {
    return (
        <>
            <img src={props.src} alt={props.alt} className={props.className} />
        </>
    )
}

export default ImageComponent;