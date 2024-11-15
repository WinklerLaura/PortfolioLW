export const parentCardStyle = {
    width: "100%",
    maxWidth: {
        xs: "95%",
        sm: "85%",
        md: "75%",
    },
    height: "auto",
    maxHeight: "60vh",
    backgroundColor: "rgb(221, 213, 201, 0.04)",
    p: 3,
    borderRadius: "25px",
    boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    gap: 3,
    overflowY: "auto",
    mx: "auto",
    "&::-webkit-scrollbar": {
        width: "5px",
        backgroundColor: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: "50px",
    },
    "&::-webkit-scrollbar-track": {
        margin: "100px 0",
    },
};

export const cardMediaStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "25px",
    objectFit: "cover",
    boxShadow: "2px 2px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
        transform: "scale(1.02)",
    },
};
