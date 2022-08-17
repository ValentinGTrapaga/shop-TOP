const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency' })

export function formatCurrency (num) {
  return CURRENCY_FORMATER.format(num)
}
