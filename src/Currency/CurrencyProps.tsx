export default interface CurrencyProps {
    currency: {
        amount: number,
        unit: string
    },
    onChange: (value: string) => void
}
