import { endpoint, headers, Result } from '../utils'

export default async function gameName(id: string): Promise<Result> {
  const body = `const body = `voucherPricePoint.id=48250&voucherPricePoint.price=16500&voucherPricePoint.variablePrice=0&user.userId=${id}&user.zoneId=&voucherTypeName=HAGO&shopLang=id_ID`` 
  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body
  })
  const data = await response.json()
  return {
    success: true,
    game: 'Hago',
    id,
    name: data.confirmationFields.username
  }
}
