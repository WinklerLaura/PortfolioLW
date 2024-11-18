import { Button, DialogContent, DialogContentText } from "@mui/material";
import { overflowYStyle, StyledDialog } from "../../../muiTheme";
import { RiCloseCircleLine } from "react-icons/ri";
import { getContentDialog } from "../../../textContent/getContentDialog";

interface ProjectsModalProps {
    open: boolean;
    onOpenModal: (open: boolean) => void;
    projectId: number | null;
}
export const ProjectsModal = ({
    open,
    onOpenModal,
    projectId,
}: ProjectsModalProps) => {
    const handleClose = () => {
        onOpenModal(false);
    };

    return (
        <StyledDialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <Button
                onClick={handleClose}
                sx={{
                    justifyContent: "flex-end",
                    marginTop: "0.5rem",
                    marginRight: "0.5rem",
                }}
            >
                <RiCloseCircleLine />
            </Button>
            <DialogContent sx={{ ...overflowYStyle }}>
                <DialogContentText>
                    {getContentDialog(projectId, "title")}
                </DialogContentText>
                <DialogContentText>
                    {getContentDialog(projectId, "text")}
                </DialogContentText>
            </DialogContent>
        </StyledDialog>
    );
};
