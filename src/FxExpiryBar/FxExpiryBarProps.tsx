export default interface FxExpiryBarProps {
    timer: number,
    from: {
      amount: number,
      unit: string
    },
    to: {
      amount: number,
      unit: string
    }
    onExpiry: () => void
  }