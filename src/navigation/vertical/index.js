const navigation = () => {
  return [
    {
      title: 'Início',
      path: '/home',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'tabler:mail'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Meus anúncios',
      icon: 'nimbus:marketing'
    }
  ]
}

export default navigation
