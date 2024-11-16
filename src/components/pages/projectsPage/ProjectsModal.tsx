import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ProjectsModalProps {
    open: boolean;
    onOpenModal: (open: boolean) => void;
}
export const ProjectsModal = ({ open, onOpenModal }: ProjectsModalProps) => {
    const handleClose = () => {
        onOpenModal(false);
    };

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                {"ProjectHeader"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Hello world! here are my projects for you to see.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    back
                </Button>
            </DialogActions>
        </Dialog>
    );
};
