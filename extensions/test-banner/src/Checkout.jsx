import { Banner, reactExtension } from '@shopify/ui-extensions-react/checkout'

export default reactExtension('purchase.checkout.block.render', () => (
  <Extension />
))

function Extension() {
  return (
    <Banner title='test-banner'>I am the released version of the app.</Banner>
  )
}
