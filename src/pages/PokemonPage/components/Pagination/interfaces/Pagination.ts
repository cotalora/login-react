export interface PaginationProps {
    nextAction: () => void;
    prevAction: () => void;
    nextDisabled?: boolean;
    prevDisabled?: boolean;
}