export default interface ProgressBarProps {
    percentage?: number,
    timer?: number,
    interval: number,
    onProgress?: (percentage: number) => void,
}